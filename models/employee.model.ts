import mongoose from "mongoose";
import { roleModel } from "./role.model";

const employeeSchema = new mongoose.Schema(
	{
		firstName: {
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
			type: mongoose.Types.ObjectId,
			default:'no-role',
			ref: 'role',
		},
	},
	{
		timestamps: true,
	}
);

export const employeeModel = mongoose?.models?.employee || mongoose.model("employee", employeeSchema);
