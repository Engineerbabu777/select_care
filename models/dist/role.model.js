"use strict";
var _a;
exports.__esModule = true;
exports.roleModel = void 0;
var mongoose_1 = require("mongoose");
var roleSchema = new mongoose_1["default"].Schema({
    title: {
        type: String,
        required: true
    },
    isActive: {
        type: String,
        "default": true
    },
    description: {
        type: String,
        minLength: 10,
        maxLength: 300
    }
}, {
    timestamps: true
});
exports.roleModel = ((_a = mongoose_1["default"] === null || mongoose_1["default"] === void 0 ? void 0 : mongoose_1["default"].models) === null || _a === void 0 ? void 0 : _a.role) || mongoose_1["default"].model("role", roleSchema);
