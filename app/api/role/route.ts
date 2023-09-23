import { databaseConnect } from "@/database/mongooseConnect";
import { roleModel } from "@/models/role.model";
import { NextResponse } from "next/server";

// POST FUNCTION HANDLES THE POST REQUESTS !
export async function POST(request: Request) {
	const body = await request.json(); // CONVERTING REQUEST TO JSON!!

	const { title, description, isActive } = body; // DESTRUCTING BODY OBJECT!

	try {
		databaseConnect(); // ESTABLISHING CONNECTION WITH OUR DATABASE!

		// CREATING NEW DOCUMENT!
		// SAVING DATA IN OUR DATABASE!
		const newDoc = await roleModel.create({
			title,
			description,
			isActive,
		});

		// RETURNING SUCCESS RESPONSE TO FRONT-END! ✔️✔️
		return NextResponse.json({ success: true, data: newDoc });
	} catch (err: any) {
		// RETURNING FAILURE RESPONSE TO FRONT-END!❌❌
		return NextResponse.json({ success: false, error: err.message });
	}
}

// GET FUNCTION HANDLES THE GET REQUESTS !
export async function GET(request: Request) {
	try {
		databaseConnect(); // ESTABLISHING CONNECTION WITH OUR DATABASE!

		// GETTING ALL ROLES!
		const roles = await roleModel.find({});

		// RETURNING SUCCESS RESPONSE TO FRONT-END! ✔️✔️
		return NextResponse.json({ success: true, roles });
	} catch (err: any) {
		// RETURNING FAILURE RESPONSE TO FRONT-END!❌❌
		return NextResponse.json({ success: false, error: err.message });
	}
}

// DELETE FUNCTION HANDLES THE DELETE REQUESTS !
export async function DELETE(request: Request) {
	try {
		databaseConnect(); // ESTABLISHING CONNECTION WITH OUR DATABASE!

		let url = new URL(request.url);

		let id = url.searchParams.get("id");

		// DELETION FROM DATABASE!
		const result = await roleModel.findByIdAndDelete(id);

		// RETURNING SUCCESS RESPONSE TO FRONT-END! ✔️✔️
		return NextResponse.json({
			success: true,
			message: "Deletion Successful!",
			result,
		});
	} catch (err: any) {
		// RETURNING FAILURE RESPONSE TO FRONT-END!❌❌
		return NextResponse.json({ error: true, message: "Deletion Failed!" });
	}
}

// PUT FUNCTION HANDLES THE PUT REQUESTS !
export async function PUT(request: Request) {
	try {
		databaseConnect(); // ESTABLISHING CONNECTION WITH OUR DATABASE!

		const body = await request.json();
		const { _id, description, title, isActive } = body;

		// UPDATED DATA!
		const updatedDoc = await roleModel.findByIdAndUpdate(_id, {
			description,
			title,
			isActive,
		});

		// RETURNING SUCCESS RESPONSE TO FRONT-END! ✔️✔️
		return NextResponse.json({ success: true, updatedDoc });
	} catch (error: any) {
		// RETURNING FAILURE RESPONSE TO FRONT-END!❌❌
		NextResponse.json({ error: true, message: error?.message });
	}
}
