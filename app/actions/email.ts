'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: { name: string; email: string; message: string }) {
    if (!process.env.RESEND_API_KEY) {
        throw new Error('RESEND_API_KEY is not configured');
    }

    try {
        await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL || 'matija.kocev@gmail.com',
            subject: `New Contact Form Message from ${data.name}`,
            replyTo: data.email,
            text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
        });

        return { success: true };
    } catch (error: unknown) {
        console.error('Failed to send email:', error);
        return { success: false, error: 'Failed to send email' };
    }
}
