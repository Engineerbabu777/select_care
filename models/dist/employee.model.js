"use strict";
exports.__esModule = true;
exports.employeeModel = void 0;
var mongoose_1 = require("mongoose");
var employeeSchema = new mongoose_1["default"].Schema({
    fistName: {
        type: String,
        minLength: 3,
        required: true
    },
    lastName: {
        type: String,
        minLength: 3,
        required: true
    },
    email: {
        type: String,
        minLength: 8,
        required: true,
        unique: true
    },
    role: {
        type: String
    }
}, {
    timestamps: true
});
exports.employeeModel = mongoose_1["default"].model("employee", employeeSchema);
