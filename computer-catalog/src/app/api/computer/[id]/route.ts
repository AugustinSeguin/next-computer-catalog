import { NextRequest, NextResponse } from 'next/server';

type Params = { params: { id: string } };

export const GET = (request: NextRequest, { params: { id } }: Params) => {
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    return NextResponse.json({ message: `GET request ${id}` });
}

export const PUT = (request: NextRequest, { params: { id } }: Params) => {
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    return NextResponse.json({ message: `PUT request ${id}` });
}

export const PATCH = (request: NextRequest, { params: { id } }: Params) => {
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    return NextResponse.json({ message: `PATCH request ${id}` });
}

export const DELETE = (request: NextRequest, { params: { id } }: Params) => {
    if (!id) {
        console.log("Error: id is not defined");
        return NextResponse.json({ message: "Error: id is not defined", status: 500 });
    }
    return NextResponse.json({ message: `DELETE request ${id}` });
}
