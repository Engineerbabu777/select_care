'use client';
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
var CloseButton_1 = require("@/components/shared/CloseButton");
var Input_1 = require("@/components/shared/Input");
var SaveButton_1 = require("@/components/shared/SaveButton");
var employee_hooks_1 = require("@/hooks/employee.hooks");
var roleState_1 = require("@/recoil/roleState");
var onChangeHandler_1 = require("@/utils/user/onChangeHandler");
var react_1 = require("react");
var recoil_1 = require("recoil");
var react_hot_toast_1 = require("react-hot-toast");
function UserModalBody(_a) {
    var _this = this;
    var _b;
    var closeModal = _a.closeModal;
    var _c = recoil_1.useRecoilState(roleState_1.roleState), role = _c[0], setRole = _c[1];
    var _d = react_1.useState(false), loading = _d[0], setLoading = _d[1];
    var _e = employee_hooks_1["default"](), createNewEmployee = _e.createNewEmployee, getEmployees = _e.getEmployees;
    // STATES!
    var _f = react_1.useState({
        firstName: "",
        lastName: "",
        email: "",
        role: null
    }), user = _f[0], setUser = _f[1];
    // WILL CHANGE ANY TYPES LATER!
    // SUBMIT HANDLER! (WILL PUT THIS SEP.....)
    var onSubmitHandler = function () { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    return [4 /*yield*/, createNewEmployee(user)];
                case 1:
                    data = _a.sent();
                    if (data === null || data === void 0 ? void 0 : data.error) {
                        react_hot_toast_1.toast.error(data === null || data === void 0 ? void 0 : data.message); // WILL CONVERT THIS TO JSX!
                        setLoading(false);
                        return [2 /*return*/];
                    }
                    if (data === null || data === void 0 ? void 0 : data.success) {
                        react_hot_toast_1.toast.success(data === null || data === void 0 ? void 0 : data.message);
                        setLoading(false);
                        setUser({ firstName: "", lastName: "", role: "", email: "" });
                        closeModal();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "flex flex-col mx-2 my-4 gap-4" },
        react_1["default"].createElement(Input_1["default"], { label: "First Name", name: "firstName", placeholder: "Glenn", require: true, type: "text", onChange: function (e) { return onChangeHandler_1.onChangeHandler(e, setUser, user); } }),
        react_1["default"].createElement(Input_1["default"], { label: "Last Name", name: "lastName", placeholder: "Maxwell", require: true, onChange: function (e) { return onChangeHandler_1.onChangeHandler(e, setUser, user); }, type: "text" }),
        react_1["default"].createElement(Input_1["default"], { label: "Email Address", name: "email", placeholder: "maxwell32@gmail.com", require: true, type: "email", onChange: function (e) { return onChangeHandler_1.onChangeHandler(e, setUser, user); } }),
        react_1["default"].createElement("div", { className: "" },
            react_1["default"].createElement("div", { className: "flex flex-col gap-2" },
                react_1["default"].createElement("label", { className: "text-md font-semibold text-gray-500", htmlFor: "role" }, "Choose Current Role"),
                react_1["default"].createElement("select", { onChange: function (e) { return onChangeHandler_1.onChangeHandler(e, setUser, user); }, name: "role", id: "role", className: "cursor-pointer overflow-auto text-blue-500 font-medium text-sm rounded-md shadow-sm bg-gray-200  hover:bg-gray-300 outline-none focus:outline-none px-3 py-1 focus:ring-blue-500 focus:ring-2" },
                    react_1["default"].createElement("option", { value: "", className: "bg-gray-100 hover:bg-400 text-black hover:text-gray-700" }, "No-Role"),
                    (role === null || role === void 0 ? void 0 : role.roles.length) > 0 && ((_b = role === null || role === void 0 ? void 0 : role.roles) === null || _b === void 0 ? void 0 : _b.map(function (r) {
                        if ((r === null || r === void 0 ? void 0 : r.isActive) === 'false')
                            return; // THAT MEANS THE ROLE IS UNAVAILABLE!
                        // ELSE RETURN THE AVAILABLE ROLES!
                        return (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement("option", { value: r === null || r === void 0 ? void 0 : r._id, className: " bg-gray-100 hover:bg-400 text-black hover:text-gray-700" }, r === null || r === void 0 ? void 0 : r.title)));
                    }))))),
        react_1["default"].createElement("div", { className: "flex items-center justify-between w-full mt-6 gap-2" },
            react_1["default"].createElement(CloseButton_1["default"], { onClick: closeModal }),
            react_1["default"].createElement(SaveButton_1["default"], { loading: loading, setLoading: setLoading, onClick: function () {
                    onSubmitHandler();
                } }))));
}
exports["default"] = UserModalBody;
