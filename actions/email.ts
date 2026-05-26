'use server';

import { headers } from 'next/headers';
import { Resend } from 'resend';
import { prisma } from '@/lib/prisma';

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3; // max emails sent per IP per hour
const BLOCK_THRESHOLD = 8; // if exceeded, silently pretend success (don't even store)

async function getClientIp(): Promise<string> {
    try {
        const headersList = await headers();
        return (
            headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            headersList.get('x-real-ip') ||
            'unknown'
        );
    } catch {
        return 'unknown';
    }
}

async function getUserAgent(): Promise<string> {
    try {
        const headersList = await headers();
        return headersList.get('user-agent') || 'unknown';
    } catch {
        return 'unknown';
    }
}

export async function sendEmail(data: { name: string; email: string; message: string }) {
    if (!process.env.RESEND_API_KEY) {
        throw new Error('RESEND_API_KEY is not configured');
    }

    const ip = await getClientIp();
    const userAgent = await getUserAgent();

    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);
    const recentCount = await prisma.contactSubmission.count({
        where: {
            ip,
            createdAt: { gte: windowStart },
        },
    });

    // --- aggressive block: silently reject without storing anything ---
    if (recentCount >= BLOCK_THRESHOLD) {
        console.warn(
            `[contact-blocked] IP ${ip} — ${recentCount} submissions in last hour, silently rejected`
        );
        // Return success so the spammer thinks it went through
        return { success: true };
    }

    // --- server-side validation ---
    const trimmedName = data.name.trim();
    const trimmedEmail = data.email.trim().toLowerCase();
    const trimmedMessage = data.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
        return { success: false, error: 'All fields are required.' };
    }

    if (trimmedMessage.length < 10) {
        return { success: false, error: 'Message is too short.' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
        return { success: false, error: 'Invalid email address.' };
    }

    // --- store submission silently (IP + user agent logged) ---
    try {
        await prisma.contactSubmission.create({
            data: {
                name: trimmedName,
                email: trimmedEmail,
                message: trimmedMessage,
                ip,
                userAgent,
            },
        });
    } catch (dbError) {
        console.error('Failed to store contact submission:', dbError);
    }

    // --- rate limit: still store in DB but skip email ---
    if (recentCount >= RATE_LIMIT_MAX) {
        console.warn(
            `[contact-ratelimit] IP ${ip} hit rate limit — stored but email skipped`
        );
        // Return success silently — spammer thinks it went through
        return { success: true };
    }

    // --- send email ---
    try {
        await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL || 'matija.kocev@gmail.com',
            subject: `New Contact Form Message from ${trimmedName}`,
            replyTo: trimmedEmail,
            text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}\n\n--- Sender Metadata ---\nIP: ${ip}\nUser Agent: ${userAgent}`,
        });

        return { success: true };
    } catch (error: unknown) {
        console.error('Failed to send email:', error);
        return { success: false, error: 'Failed to send email' };
    }
}
