import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/tools/prisma";

/// This is a GET request for all computers
export const GET = async () => {

    const computers = await prisma.computer.findMany({
        take: 10,
    });

    return NextResponse.json({ message: "GET request", computers: computers });
}

/// This is a POST request for create a computer
export const POST = async (request: NextRequest) => {
    const { title, price, motherboardId, ramIds, graphicCardId } = await request.json();
    const newComputer = await prisma.computer.create({
        data: {
            title: title,
            price: price,
            motherboard: {
                connect: {
                    id: motherboardId,
                },
            },
            rams: {
                connect: ramIds.map((id: number) => ({ id })),
            },
            graphicCard: {
                connect: {
                    id: graphicCardId,
                },
            },
        },
        include: {
            rams: true,
            motherboard: true,
            graphicCard: true,
        },
    });
    return NextResponse.json({ message: `Computer created ${newComputer.id}`, computer: newComputer });
}


