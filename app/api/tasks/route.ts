import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const tasks = await prisma.task.findMany({
            orderBy: {
                updatedAt: 'desc',
            },
        });

        return NextResponse.json(tasks);
    } catch {
        return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const task = await prisma.task.create({
            data: {
                title: data.title ?? null,
                description: data.description ?? null,
                status: data.status ?? false,
            },
        });

        return NextResponse.json(task, { status: 201 });
    } catch {
        return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
    }
}
