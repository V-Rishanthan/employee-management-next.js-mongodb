import connectMongo from "@/database/conn";
import { getUser, getUsers, postUser, putUser, deleteUser } from "@/database/controller";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    connectMongo();
    const userId = params.userId;
    const user = await getUser(userId);
    return NextResponse.json(user);
}
