import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb();

export function GET(request) {

    const users = [
        {
            name: 'durgesh',
            phone: '8473847384',
            course: 'java',
        },
        {
            name: 'Prash',
            phone: '8473847384',
            course: 'next',
        },
        {
            name: 'rohan',
            phone: '8473847384',
            course: 'js',
        },
    ];

    return NextResponse.json(users)

}

export function POST() {

}
export function PUT() {

}
export function DELETE() {

}