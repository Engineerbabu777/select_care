import { databaseConnect } from "@/database/mongooseConnect";
import { roleModel } from "@/models/role.model";
import { NextResponse } from "next/server";

// HERE IN THIS FUNCTION WE WILL BE HANDLE POST REQUEST POST REQUEST!
export async function POST(request: Request) {
	const body = await request.json();
	const { title, description, isActive } = body;

	try {
		// SAVING DATA IN OUR DATABASE!
		databaseConnect();

		// CREATING NEW DOCUMENT!
		const newDoc = await roleModel.create({
			title,
			description,
			isActive,
		});

		return NextResponse.json({ success: true, data: newDoc });
	} catch (err: any) {
		return NextResponse.json({ success: false, error: err.message });
	}
}

// FUNCTION MAKING GET REQUEST!
export async function GET(request: Request) {
	try {
		databaseConnect();

		// GETTING ALL ROLES!
		const roles = await roleModel.find({});

		console.log("SERVER IS SAYING HELLO!");

		return NextResponse.json({ success: true, roles });
	} catch (err: any) {
		return NextResponse.json({ success: false, error: err.message });
	}
}

// DELETE REQUEST!
export async function DELETE(request: Request) {
	try {
		let url = new URL(request.url);

		let id = url.searchParams.get("id");

		// DELETION FROM DATABASE!

		const result = await roleModel.findByIdAndDelete(id);

		// RETURNING RESPONSE!
		return NextResponse.json({
			success: true,
			message: "Deletion Successful!",
			result,
		});
	} catch (err: any) {
		return NextResponse.json({ error: true, message: "Deletion Failed!" });
	}
}

// PUT REQUEST!
// PUT REQUEST!
export async function PUT(request: Request) {
	try {
		const body = await request.json();
		const { _id, description, title, isActive } = body;

		// UPDATED DATA!
		const updatedDoc = await roleModel.findByIdAndUpdate(_id, {
			description,
			title,
			isActive,
		});

		return NextResponse.json({ success: true, updatedDoc });
	} catch (error: any) {
		NextResponse.json({ error: true, message: error?.message });
	}
}
