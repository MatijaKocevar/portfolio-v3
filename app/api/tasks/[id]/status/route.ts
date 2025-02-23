import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

interface RouteContext {
    params: Promise<{ id: string }>;
}

export async function POST(request: Request, { params }: RouteContext) {
    try {
        const { id } = await params;
        const taskId = parseInt(id);
        const { status } = await request.json();

        const task = await prisma.task.update({
            where: { id: taskId },
            data: { status },
        });

        return NextResponse.json(task);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return NextResponse.json({ message: 'Task not found' }, { status: 404 });
        }
        return NextResponse.json({ error: 'Failed to update task status' }, { status: 500 });
    }
}
