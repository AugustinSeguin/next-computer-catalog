import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/tools/prisma";

/// This is a GET request for all rams
export const GET = async () => {

    const rams = await prisma.ram.findMany({
        take: 10,
    });

    return NextResponse.json({ message: "GET request", rams: rams });
}

/// This is a POST request for create a ram
export const POST = async (request: NextRequest) => {
    const { title, power, reference } = await request.json();
    const newram = await prisma.ram.create({
        data: {
            title: title,
            power: power,
            reference: reference,
        },
    });
    return NextResponse.json({ message: `ram created ${newram.id}`, ram: newram });
}


