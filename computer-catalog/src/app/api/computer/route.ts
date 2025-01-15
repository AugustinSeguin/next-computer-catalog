import { NextRequest, NextResponse } from 'next/server';

export const GET = (request: NextRequest) => {
    return NextResponse.json({ message: "GET request" });
}

export const POST = async (request: NextRequest) => {
    const { name } = await request.json() ?? "unknown";
    return NextResponse.json({ message: `POST ${name}` });
}
