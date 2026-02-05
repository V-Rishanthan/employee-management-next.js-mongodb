import connectMongo from "@/database/conn";
import { getUsers, postUser, putUser, deleteUser } from "@/database/controller";
import { NextResponse } from "next/server";


// GET http://localhost:3000/api/users
export async function GET(request) {
    try {
        await connectMongo();
        const users = await getUsers();

        if (!users) {
            return NextResponse.json({ error: "Data Not Found" }, { status: 404 });
        }
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error: "Error While Fetching Data" }, { status: 404 });
    }
}

// POST http://localhost:3000/api/users
export async function POST(request) {
    try {
        await connectMongo();
        const payload = await request.json();

        if (!payload) {
            return NextResponse.json({ error: "Form Data Not Provided" }, { status: 404 });
        }

        const data = await postUser(payload);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Error While Creating User" }, { status: 404 });
    }
}

// PUT http://localhost:3000/api/users?userId=...
export async function PUT(request) {
    try {
        await connectMongo();
        const payload = await request.json();
        const userId = request.nextUrl.searchParams.get('userId');

        if (userId && payload) {
            await putUser(userId, payload);
            return NextResponse.json({ message: "User Updated Successfully" });
        }
        return NextResponse.json({ error: "User Not Found...!" }, { status: 404 });
    } catch (error) {
        return NextResponse.json({ error: "Error While Updating Data" }, { status: 404 });
    }
}

// DELETE http://localhost:3000/api/users?userId=...
export async function DELETE(request) {
    try {
        await connectMongo();
        const userId = request.nextUrl.searchParams.get('userId');

        if (userId) {
            await deleteUser(userId);
            return NextResponse.json({ message: "User Deleted Successfully" });
        }
        return NextResponse.json({ error: "User Not Found...!" }, { status: 404 });
    } catch (error) {
        return NextResponse.json({ error: "Error While Deleting Data" }, { status: 404 });
    }
}

