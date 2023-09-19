import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
	{
		fistName: {
			type: String,
			minLength: 3,
			required: true,
		},
		lastName: {
			type: String,
			minLength: 3,
			required: true,
		},
		email: {
			type: String,
			minLength: 8,
			required: true,
			unique: true,
		},
		role: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

export const employeeModel = mongoose.model("employee", employeeSchema);
