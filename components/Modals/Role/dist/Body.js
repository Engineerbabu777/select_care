"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = require("react");
var TextArea_1 = require("@/components/shared/TextArea");
var icons_1 = require("@/icons/icons");
var role_hooks_1 = require("@/hooks/role.hooks");
var role_change_handler_1 = require("@/utils/role/role-change-handler");
function RoleModalBody(_a) {
    var _this = this;
    var closeModal = _a.closeModal;
    // CUSTOM ROLE HOOK!
    var createNewRole = role_hooks_1["default"]().createNewRole;
    // STATES!
    var _b = react_1.useState({
        title: "",
        description: "",
        isActive: true
    }), role = _b[0], setRole = _b[1];
    var onSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createNewRole(role)];
                case 1:
                    data = _a.sent();
                    alert(data === null || data === void 0 ? void 0 : data.error, data === null || data === void 0 ? void 0 : data.success);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "flex flex-col mx-2 my-4 gap-4" },
        react_1["default"].createElement(Input_1["default"], { label: "Title", name: "title", placeholder: "HR", require: true, type: "text", onChange: function (e) {
                return role_change_handler_1.onChangeHandler(e, setRole, role);
            } }),
        react_1["default"].createElement(TextArea_1["default"], { label: "Description", name: "description", placeholder: "Human resources (HR) is a department in a company that is responsible for managing the company's workforce. This includes tasks such as recruiting, hiring, onboarding, training, and developing employees. HR is also responsible for ensuring that the company complies with employment laws and regulations, and that it provides a safe and healthy work environment for its employees", require: true, onChange: function (e) {
                return role_change_handler_1.onChangeHandler(e, setRole, role);
            } }),
        react_1["default"].createElement("div", { className: "flex gap-3 flex-col" },
            react_1["default"].createElement("p", { className: "text-gray-500 font-semibold " }, "Role Active Status:"),
            react_1["default"].createElement("div", { className: "flex gap-2 items-center" },
                react_1["default"].createElement("div", { onClick: function () { return setRole(__assign(__assign({}, role), { isActive: true })); }, className: "flex items-center gap-2 border-gray-200 border  rounded-md px-2 py-1 cursor-pointer transition-all duration-300 " +
                        (role.isActive === true
                            ? " bg-gray-300 shadow-md shadow-gray-600 border-green-500 border "
                            : " bg-gray-200 ") },
                    react_1["default"].createElement("span", { className: "text-gray-600 font-semibold text-sm" }, "Active"),
                    react_1["default"].createElement(icons_1.AiFillCheckCircle, { className: "w-5 h-5 text-green-500" })),
                react_1["default"].createElement("div", { onClick: function () { return setRole(__assign(__assign({}, role), { isActive: false })); }, className: "flex items-center gap-2 border-gray-200 border  rounded-md px-2 py-1 cursor-pointer transition-all duration-300 " +
                        (role.isActive === false
                            ? " bg-gray-300 shadow-md shadow-gray-600 border-red-500 border "
                            : " bg-gray-200 ") },
                    react_1["default"].createElement("span", { className: "text-gray-600 font-semibold text-sm" }, "UnActive"),
                    react_1["default"].createElement(icons_1.AiFillCheckCircle, { className: "h-5 w-5 text-red-500" })))),
        react_1["default"].createElement("div", { className: "flex items-center w-full mt-6 gap-2" },
            react_1["default"].createElement(CloseButton_1["default"], { onClick: closeModal }),
            react_1["default"].createElement(SaveButton_1["default"], { onClick: onSubmit }))));
}
exports["default"] = RoleModalBody;
