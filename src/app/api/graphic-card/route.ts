import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/tools/prisma";

/// This is a GET request for all graphicCards
export const GET = async () => {

    const graphicCards = await prisma.graphicCard.findMany({
        take: 10,
    });

    return NextResponse.json({ message: "GET request", graphicCards: graphicCards });
}

/// This is a POST request for create a graphicCard
export const POST = async (request: NextRequest) => {
    const { title, power, reference } = await request.json();
    const newgraphicCard = await prisma.graphicCard.create({
        data: {
            title: title,
            power: power,
            reference: reference,
        },
    });
    return NextResponse.json({ message: `graphicCard created ${newgraphicCard.id}`, graphicCard: newgraphicCard });
}


