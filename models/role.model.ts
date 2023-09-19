


import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        isActive: {
            type: String,
            default: true,
        },
        description: {
            type: String,
            minLength: 10,
            maxLength: 300,
        },
    },
    {
        timestamps: true,
    }
);

export const roleModel = mongoose?.models?.role || mongoose.model("role", roleSchema);
