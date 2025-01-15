import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/tools/prisma";

type Params = { params: { id: string } };

/// This is a GET request for all motherboards
export const GET = async (request: NextRequest) => {

    const motherboards = await prisma.motherboard.findMany({
        take: 10,
    });

    return NextResponse.json({ message: "GET request", motherboards: motherboards });
}

/// This is a POST request for create a motherboard
export const POST = async (request: NextRequest) => {
    const motherboard = await request.json();
    const newmotherboard = await prisma.motherboard.create({
        data: {
            ...motherboard
        },
    });
    return NextResponse.json({ message: `motherboard created ${newmotherboard.id}`, motherboard: newmotherboard });
}


