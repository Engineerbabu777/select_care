"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PUT = exports.DELETE = exports.GET = exports.POST = void 0;
var mongooseConnect_1 = require("@/database/mongooseConnect");
var employee_model_1 = require("@/models/employee.model");
var role_model_1 = require("@/models/role.model");
var server_1 = require("next/server");
function POST(request) {
    return __awaiter(this, void 0, void 0, function () {
        var body, lastName, firstName, email, role, newDoc, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    // CREATING CONNECTION WITH DATABASE!
                    mongooseConnect_1.databaseConnect();
                    return [4 /*yield*/, request.json()];
                case 1:
                    body = _a.sent();
                    lastName = body.lastName, firstName = body.firstName, email = body.email, role = body.role;
                    return [4 /*yield*/, employee_model_1.employeeModel.create({
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            role: role
                        })];
                case 2:
                    newDoc = _a.sent();
                    // WILL HANDLE DUPLICATE EMAIL LATER!
                    return [2 /*return*/, server_1.NextResponse.json({ success: true, newDoc: newDoc })];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1.message);
                    return [2 /*return*/, server_1.NextResponse.json({ error: true, message: err_1.message })];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.POST = POST;
// GET REQUEST !!
function GET(request) {
    return __awaiter(this, void 0, void 0, function () {
        var emp, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    // CREATING CONNECTION WITH DATABASE!
                    mongooseConnect_1.databaseConnect();
                    return [4 /*yield*/, employee_model_1.employeeModel
                            .find({})
                            .populate("role", { path: role_model_1.roleModel })];
                case 1:
                    emp = _a.sent();
                    console.log(emp);
                    return [2 /*return*/, server_1.NextResponse.json({ success: true, employees: emp })];
                case 2:
                    err_2 = _a.sent();
                    console.log(err_2 === null || err_2 === void 0 ? void 0 : err_2.message);
                    return [2 /*return*/, server_1.NextResponse.json({ error: true, message: err_2 === null || err_2 === void 0 ? void 0 : err_2.message })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.GET = GET;
// DELETE REQUEST !!
function DELETE(request) {
    return __awaiter(this, void 0, void 0, function () {
        var url, id, result, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    url = new URL(request.url);
                    id = url.searchParams.get("id");
                    return [4 /*yield*/, employee_model_1.employeeModel.findByIdAndDelete(id)];
                case 1:
                    result = _a.sent();
                    // DELETION FROM DATABASE!
                    return [2 /*return*/, server_1.NextResponse.json({
                            success: true,
                            message: "Deletion Successful!",
                            result: result
                        })];
                case 2:
                    err_3 = _a.sent();
                    return [2 /*return*/, server_1.NextResponse.json({ error: true, message: "Deletion Failed!" })];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.DELETE = DELETE;
// PUT REQUEST!
function PUT(request) {
    return __awaiter(this, void 0, void 0, function () {
        var body, _id, role, firstName, lastName, email, updatedDoc, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, request.json()];
                case 1:
                    body = _a.sent();
                    _id = body._id, role = body.role, firstName = body.firstName, lastName = body.lastName, email = body.email;
                    console.log("ROLE ID-> ", role);
                    return [4 /*yield*/, employee_model_1.employeeModel.findByIdAndUpdate(_id, {
                            role: role,
                            firstName: firstName,
                            lastName: lastName,
                            email: email
                        })];
                case 2:
                    updatedDoc = _a.sent();
                    return [2 /*return*/, server_1.NextResponse.json({ success: true, updatedDoc: updatedDoc })];
                case 3:
                    error_1 = _a.sent();
                    server_1.NextResponse.json({ error: true, message: error_1 === null || error_1 === void 0 ? void 0 : error_1.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.PUT = PUT;
