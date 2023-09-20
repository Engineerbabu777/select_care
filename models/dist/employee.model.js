"use strict";
var _a;
exports.__esModule = true;
exports.employeeModel = void 0;
var mongoose_1 = require("mongoose");
var employeeSchema = new mongoose_1["default"].Schema({
    firstName: {
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
        type: mongoose_1["default"].Types.ObjectId,
        "default": 'no-role',
        ref: 'role'
    }
}, {
    timestamps: true
});
exports.employeeModel = ((_a = mongoose_1["default"] === null || mongoose_1["default"] === void 0 ? void 0 : mongoose_1["default"].models) === null || _a === void 0 ? void 0 : _a.employee) || mongoose_1["default"].model("employee", employeeSchema);
