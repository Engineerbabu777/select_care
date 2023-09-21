import { databaseConnect } from "@/database/mongooseConnect";
import { employeeModel } from "@/models/employee.model";
import { roleModel } from "@/models/role.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		// CREATING CONNECTION WITH DATABASE!
		databaseConnect();

		const body = await request.json();

		const { lastName, firstName, email, role } = body;

		// ADD EMPLOYEE TO DATABASE!
		const newDoc = await employeeModel.create({
			firstName,
			lastName,
			email,
			role,
		});

		// WILL HANDLE DUPLICATE EMAIL LATER!

		return NextResponse.json({ success: true, newDoc });
	} catch (err: any) {
		console.log(err.message);
		return NextResponse.json({ error: true, message: err.message });
	}
}

// GET REQUEST !!
export async function GET(request: Request) {
	try {
		// CREATING CONNECTION WITH DATABASE!
		databaseConnect();

		// FETCHING DATA!
		const emp = await employeeModel
			.find({})
			.populate("role", { path: roleModel });

		console.log(emp);

		return NextResponse.json({ success: true, employees: emp });
	} catch (err: any) {
		console.log(err?.message);
		return NextResponse.json({ error: true, message: err?.message });
	}
}

// DELETE REQUEST !!
export async function DELETE(request: Request) {
	try {
		let url = new URL(request.url);

		let id = url.searchParams.get("id");

		const result = await employeeModel.findByIdAndDelete(id);

		// DELETION FROM DATABASE!

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
export async function PUT(request: Request) {
	try {
		const body = await request.json();
		const { _id, role, firstName, lastName, email } = body;

		console.log("ROLE ID-> ", role);

		// UPDATED DATA!
		const updatedDoc = await employeeModel.findByIdAndUpdate(_id, {
			role,
			firstName,
			lastName,
			email,
		});

		return NextResponse.json({ success: true, updatedDoc });
	} catch (error: any) {
		NextResponse.json({ error: true, message: error?.message });
	}
}
