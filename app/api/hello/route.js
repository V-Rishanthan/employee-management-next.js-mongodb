
import connectMongo from "../../../database/conn";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongo();
    return NextResponse.json({ name: "Harini" });
}
