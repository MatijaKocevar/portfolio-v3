import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

interface RouteContext {
    params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: RouteContext) {
    try {
        const { id } = await params;
        const taskId = parseInt(id);
        const task = await prisma.task.findUnique({
            where: { id: taskId },
        });

        if (!task) {
            return NextResponse.json({ message: 'Task not found' }, { status: 404 });
        }

        return NextResponse.json(task);
    } catch {
        return NextResponse.json({ error: 'Failed to fetch task' }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: RouteContext) {
    try {
        const { id } = await params;
        const taskId = parseInt(id);
        const data = await request.json();

        const task = await prisma.task.update({
            where: { id: taskId },
            data: {
                title: data.title,
                description: data.description,
                status: data.status,
            },
        });

        return NextResponse.json(task);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return NextResponse.json({ message: 'Task not found' }, { status: 404 });
        }
        return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: RouteContext) {
    try {
        const { id } = await params;
        const taskId = parseInt(id);
        await prisma.task.delete({
            where: { id: taskId },
        });

        return NextResponse.json({ message: 'Task deleted' });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return NextResponse.json({ message: 'Task not found' }, { status: 404 });
        }
        return NextResponse.json({ error: 'Failed to delete task' }, { status: 500 });
    }
}
