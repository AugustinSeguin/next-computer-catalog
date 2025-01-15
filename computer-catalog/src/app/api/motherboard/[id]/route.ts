import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/tools/prisma";

type Params = { params: { id: string } };

/// This is a GET request for one motherboard
export const GET = async (request: NextRequest, { params: { id } }: Params) => {
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }

    const motherboard = await prisma.motherboard.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    return NextResponse.json({ message: `motherboard updated ${id}`, motherboard: motherboard });
}

/// This is a PUT request for motherboard
export const PUT = async (request: NextRequest, { params: { id } }: Params) => {
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    const motherboard = await request.json();
    const updatedmotherboard = await prisma.motherboard.update({
        where: {
            id: parseInt(id)
        },
        data: {
            ...motherboard
        },
    });

    return NextResponse.json({ message: `motherboard updated ${id}`, motherboard: updatedmotherboard });
}

/// This is a PATCH request for motherboard
export const PATCH = async (request: NextRequest, { params: { id } }: Params) => {
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    const motherboard = await request.json();
    const updatedmotherboard = await prisma.motherboard.update({
        where: {
            id: parseInt(id)
        },
        data: {
            ...motherboard
        },
    });

    return NextResponse.json({ message: `motherboard updated ${id}`, motherboard: updatedmotherboard });
}

export const DELETE = async (request: NextRequest, { params: { id } }: Params) => {
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    const motherboard = await prisma.motherboard.delete({
        where: {
            id: parseInt(id)
        },
    });

    return NextResponse.json({ message: `DELETE request ${id}` });
}

