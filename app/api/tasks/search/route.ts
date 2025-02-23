import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const searchTerm = searchParams.get('searchTerm') || '';

        const tasks = await prisma.task.findMany({
            where: {
                description: {
                    contains: searchTerm,
                    mode: 'insensitive',
                },
            },
        });

        return NextResponse.json(tasks);
    } catch {
        return NextResponse.json({ error: 'Failed to search tasks' }, { status: 500 });
    }
}
