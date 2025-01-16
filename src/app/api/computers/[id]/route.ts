import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/tools/prisma";

type Params = { params: Promise<{ id: string }> };

/// This is a GET request for one computer
export const GET = async (request: NextRequest, param: Params) => {
    const {id} = await param.params;
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }

    const computer = await prisma.computer.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            rams: true,
            motherboard: true,
            graphicCard: true,
        },
    });

    return NextResponse.json({ message: `Computer updated ${id}`, computer: computer });
}

/// This is a PUT request for computer
export const PUT = async (request: NextRequest,param: Params) => {
    const {id} = await param.params;
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    const { title, price, motherboardId, ramIds, graphicCardId } = await request.json();
    const updatedComputer = await prisma.computer.update({
        where: {
            id: parseInt(id)
        },
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

    return NextResponse.json({ message: `Computer updated ${id}`, computer: updatedComputer });
}

/// This is a PATCH request for computer
export const PATCH = async (request: NextRequest,param: Params) => {
    const {id} = await param.params;
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    const { title, price, motherboardId, ramIds, graphicCardId } = await request.json();
    const updatedComputer = await prisma.computer.update({
        where: {
            id: parseInt(id)
        },
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

    return NextResponse.json({ message: `Computer updated ${id}`, computer: updatedComputer });
}

export const DELETE = async (request: NextRequest,param: Params) => {
    const {id} = await param.params;
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    await prisma.computer.delete({
        where: {
            id: parseInt(id)
        },
    });

    return NextResponse.json({ message: `DELETE computer ${id}` });
}

