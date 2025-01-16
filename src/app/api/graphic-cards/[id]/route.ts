import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/tools/prisma";

type Params = { params: Promise<{ id: string }> };

/// This is a GET request for one graphicCard
export const GET = async (request: NextRequest, param: Params) => {
    const {id} = await param.params;
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }

    const graphicCard = await prisma.graphicCard.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    return NextResponse.json({ message: `graphicCard updated ${id}`, graphicCard: graphicCard });
}

/// This is a PUT request for graphicCard
export const PUT = async (request: NextRequest, param: Params) => {
    const {id} = await param.params;
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    const graphicCard = await request.json();
    const updatedgraphicCard = await prisma.graphicCard.update({
        where: {
            id: parseInt(id)
        },
        data: {
            ...graphicCard
        },
    });

    return NextResponse.json({ message: `graphicCard updated ${id}`, graphicCard: updatedgraphicCard });
}

/// This is a PATCH request for graphicCard
export const PATCH = async (request: NextRequest, param: Params) => {
    const {id} = await param.params;
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    const graphicCard = await request.json();
    const updatedgraphicCard = await prisma.graphicCard.update({
        where: {
            id: parseInt(id)
        },
        data: {
            ...graphicCard
        },
    });

    return NextResponse.json({ message: `graphicCard updated ${id}`, graphicCard: updatedgraphicCard });
}

export const DELETE = async (request: NextRequest, param: Params) => {
    const {id} = await param.params;
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    await prisma.graphicCard.delete({
        where: {
            id: parseInt(id)
        },
    });

    return NextResponse.json({ message: `DELETE graphic card ${id}` });
}

