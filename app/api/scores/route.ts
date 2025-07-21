import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = 5; // 5 requests per minute

    const current = rateLimitMap.get(ip);

    if (!current || now > current.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
        return false;
    }

    if (current.count >= maxRequests) {
        return true;
    }

    current.count++;
    return false;
}

function getClientIP(request: Request): string {
    const forwarded = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');

    if (forwarded) {
        return forwarded.split(',')[0].trim();
    }

    if (realIP) {
        return realIP;
    }

    return 'unknown';
}

export async function GET() {
    try {
        const scores = await prisma.score.findMany({
            orderBy: {
                scoreValue: 'desc',
            },
        });

        return NextResponse.json(scores);
    } catch {
        return NextResponse.json({ error: 'Failed to fetch scores' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const clientIP = getClientIP(request);

        if (isRateLimited(clientIP)) {
            return NextResponse.json(
                { error: 'Too many requests. Please wait before submitting another score.' },
                { status: 429 },
            );
        }

        const { playerName, payload, fingerprint } = await request.json();

        const deobfuscatedScore = deobfuscateScore(payload);

        if (!deobfuscatedScore) {
            return NextResponse.json({ error: 'Invalid score data' }, { status: 400 });
        }

        const isValidFingerprint = validateFingerprint(playerName, deobfuscatedScore, fingerprint);

        if (!isValidFingerprint) {
            return NextResponse.json({ error: 'Invalid fingerprint' }, { status: 400 });
        }

        const score = await prisma.score.create({
            data: {
                playerName,
                scoreValue: deobfuscatedScore,
            },
        });

        return NextResponse.json(score, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Failed to create score' }, { status: 500 });
    }
}

function deobfuscateScore(payload: string): number | null {
    try {
        const decoded = atob(payload);
        const [scrambledStr, timestampStr, scoreBase36] = decoded.split(':');

        const scrambled = parseInt(scrambledStr);
        const timestamp = parseInt(timestampStr);
        const expectedScore = parseInt(scoreBase36, 36);

        const unscrambled = scrambled ^ 0xabcdef;
        const actualScore = (unscrambled - timestamp) / 7919;

        if (Math.abs(actualScore - expectedScore) < 0.01) {
            return Math.round(actualScore);
        }

        return null;
    } catch {
        return null;
    }
}

function validateFingerprint(name: string, score: number, receivedFingerprint: string): boolean {
    return !!(receivedFingerprint && receivedFingerprint.length > 5);
}
