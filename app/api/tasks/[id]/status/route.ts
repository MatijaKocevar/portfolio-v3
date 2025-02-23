import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function POST(request: Request, { params }: { params: { id: string } }) {
    try {
        const { status } = await request.json();
        const id = parseInt(params.id);

        const task = await prisma.task.update({
            where: { id },
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
