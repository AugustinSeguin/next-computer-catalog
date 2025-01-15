import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/tools/prisma";

type Params = { params: { id: string } };

/// This is a GET request for one ram
export const GET = async (request: NextRequest, { params: { id } }: Params) => {
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }

    const ram = await prisma.ram.findUnique({
        where: {
            id: parseInt(id),
        },
    });

    return NextResponse.json({ message: `ram updated ${id}`, ram: ram });
}

/// This is a PUT request for ram
export const PUT = async (request: NextRequest, { params: { id } }: Params) => {
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    const ram = await request.json();
    const updatedram = await prisma.ram.update({
        where: {
            id: parseInt(id)
        },
        data: {
            ...ram
        },
    });

    return NextResponse.json({ message: `ram updated ${id}`, ram: updatedram });
}

/// This is a PATCH request for ram
export const PATCH = async (request: NextRequest, { params: { id } }: Params) => {
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    const ram = await request.json();
    const updatedram = await prisma.ram.update({
        where: {
            id: parseInt(id)
        },
        data: {
            ...ram
        },
    });

    return NextResponse.json({ message: `ram updated ${id}`, ram: updatedram });
}

export const DELETE = async (request: NextRequest, { params: { id } }: Params) => {
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    const ram = await prisma.ram.delete({
        where: {
            id: parseInt(id)
        },
    });

    return NextResponse.json({ message: `DELETE request ${id}` });
}

