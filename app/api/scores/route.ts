import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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
        const { playerName, scoreValue } = await request.json();

        const score = await prisma.score.create({
            data: {
                playerName,
                scoreValue,
            },
        });

        return NextResponse.json(score, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Failed to create score' }, { status: 500 });
    }
}
