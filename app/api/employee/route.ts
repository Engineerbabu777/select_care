import { databaseConnect } from "@/database/mongooseConnect";
import { employeeModel } from "@/models/employee.model";
import { NextResponse } from "next/server";

// POST FUNCTION HANDLES THE POST REQUESTS !
export async function POST(request: Request) {
	try {
		databaseConnect(); // ESTABLISHING CONNECTION WITH OUR DATABASE!

		const body = await request.json(); // CONVERTING REQUEST TO JSON!!

		const { lastName, firstName, email, role } = body;

		// ADD EMPLOYEE TO DATABASE!
		const newDoc = await employeeModel.create({
			firstName,
			lastName,
			email,
			role,
		});

		// WILL HANDLE DUPLICATE EMAIL LATER!

		// RETURNING SUCCESS RESPONSE TO FRONT-END! ✔️✔️
		return NextResponse.json({ success: true, newDoc });
	} catch (err: any) {
		// RETURNING FAILURE RESPONSE TO FRONT-END!❌❌
		// throw new Error(err.message);
		return NextResponse.json({ error: true, message: err.message });
	}
}

// GET FUNCTION HANDLES THE GET REQUESTS !
export async function GET(request: Request) {
	try {
		// CREATING CONNECTION WITH DATABASE!
		databaseConnect();

		// GETTING DATA!
		const emp = await employeeModel
			.find({})
			.populate("role");

		// RETURNING SUCCESS RESPONSE TO FRONT-END! ✔️✔️
		return NextResponse.json({ success: true, employees: emp });
	} catch (err: any) {
		// RETURNING FAILURE RESPONSE TO FRONT-END!❌❌
		return NextResponse.json({ error: true, message: err?.message });
	}
}

// DELETE FUNCTION HANDLES THE DELETE REQUESTS !
export async function DELETE(request: Request) {
	try {
		let url = new URL(request.url);

		let id = url.searchParams.get("id");

		// DELETION FROM DATABASE!

		const result = await employeeModel.findByIdAndDelete(id);

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
		const body = await request.json();
		const { _id, role, firstName, lastName, email } = body;

		// UPDATED DATA!
		const updatedDoc = await employeeModel.findByIdAndUpdate(_id, {
			role,
			firstName,
			lastName,
			email,
		});
		// RETURNING SUCCESS RESPONSE TO FRONT-END! ✔️✔️
		return NextResponse.json({ success: true, updatedDoc });
	} catch (error: any) {
		// RETURNING FAILURE RESPONSE TO FRONT-END!❌❌
		NextResponse.json({ error: true, message: error?.message });
	}
}
