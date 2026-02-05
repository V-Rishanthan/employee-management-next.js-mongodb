import connectMongo from "@/database/conn";
import { getUser } from "@/database/controller";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        await connectMongo();
        const { userId } = await params;
        const user = await getUser(userId);

        if (!user) {
            return NextResponse.json({ error: "User Not Found" }, { status: 404 });
        }
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: "Error While Fetching User" }, { status: 404 });
    }
}
