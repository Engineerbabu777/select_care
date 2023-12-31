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
var dataValidations_1 = require("@/utils/role/dataValidations");
var roleState_1 = require("@/recoil/roleState");
var recoil_1 = require("recoil");
var react_hot_toast_1 = require("react-hot-toast");
function useRole() {
    var _this = this;
    // REQUIRED STATES!
    var _a = recoil_1.useRecoilState(roleState_1.roleState), role = _a[0], setRole = _a[1];
    // GET ALL ROLES!
    var getRoles = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setRole(__assign(__assign({}, role), { loadingRoles: true })); // THAT WILL SHOW LOADING!!
            // MAKE A GET REQUEST! (PUT IN TRY CATCH AT LAST!)!
            fetch("/api/role")
                .then(function (response) {
                response.json().then(function (data) {
                    var _a;
                    setRole({
                        roles: data === null || data === void 0 ? void 0 : data.roles,
                        totalNumberOfRoles: (_a = data === null || data === void 0 ? void 0 : data.roles) === null || _a === void 0 ? void 0 : _a.length,
                        loadingRoles: false,
                        selectedRole: null
                    });
                });
            })["catch"](function (err) {
                setRole(__assign(__assign({}, role), { loadingRoles: false }));
                // WILL WRITE HERE LATER  MORE !!!
            });
            return [2 /*return*/];
        });
    }); };
    // CREATE NEW ROLE!
    var createNewRole = function (role) { return __awaiter(_this, void 0, void 0, function () {
        var validator, data, newDocs, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    validator = dataValidations_1.validateRoleData(role.title, role.description, role.isActive);
                    if (!validator) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch("/api/role", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                accept: "application/json"
                            },
                            body: JSON.stringify(role)
                        })];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, getRoles()];
                case 2:
                    newDocs = _a.sent();
                    // GIVING SUCCESS TOAST!
                    react_hot_toast_1["default"].error('NEW ROLE SUCCESSFUL!');
                    console.log(data, newDocs);
                    return [2 /*return*/, { success: true }];
                case 3: return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    // GIVING ERROR TOAST NOTIFICATION!
                    react_hot_toast_1["default"].error(err_1.message);
                    // IF ERROR WE WILL PRINT TO CONSOLE!
                    console.log("HELLO FROM USE ROLE HOOK!");
                    return [2 /*return*/, { error: err_1.message }]; // RETURNING ERROR WHILE CREATING ROLE!
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // DELETE ANY ROLE!
    var deleteRole = function (id) {
        try {
            // DELETE FROM STATE!
            setRole(__assign(__assign({}, role), { roles: role === null || role === void 0 ? void 0 : role.roles.filter(function (u) { return u._id !== id; }), selectedRole: null })); // THAT WILL REMOVE DELETION ID AND MAKE SELECTED NULL ON RIGHT SIDE!
            // WE CAN ALSO CHECK FROM OUR STATE THAT IF ID IS AVAILABLE THEN REMOVE FROM DATABASE OTHERWISE NOT MAKE A DELETE REQUEST! (IN FUTURE!) !!
            // OTHERWISE DELETE REQUEST!
            fetch("/api/role?id=" + id, { method: "DELETE" }).then(function (response) {
                return response.json().then(function (data) { return console.log(data); });
            });
            // GIVING TOAST NOTIFICATION OF SUCCESS!
            react_hot_toast_1["default"].success("DELETION SUCCESSFUL!");
            // THAT MEANS EVERYTHING IS OK FETCH REFRESH DATA!
        }
        catch (error) {
            // GIVING TOAST NOTIFICATION OF ERROR!
            react_hot_toast_1["default"].success("DELETION FAILED!");
            console.log("DELETION ERROR:-> ", error.message);
        }
    };
    // EDIT ANY ROLE!
    var editRole = function () {
        var _a = role === null || role === void 0 ? void 0 : role.selectedRole, _id = _a._id, title = _a.title, description = _a.description, isActive = _a.isActive;
        try {
            // VALIDATING OUR DATA!
            var validator = dataValidations_1.validateRoleData(title, description, isActive);
            var body = { title: title, description: description, isActive: isActive, _id: _id };
            // EVERTING IS OK NOW MOVE TO PUT REQUEST!
            if (validator) {
                // UPDATE DATA IN DATABASE!
                fetch("/api/role", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        accept: "application/json"
                    },
                    body: JSON.stringify(body)
                })
                    .then(function (response) {
                    return response.json().then(function (data) { return console.log(data); });
                })["catch"](function (er) { return console.log(er === null || er === void 0 ? void 0 : er.message); });
            }
            // PUT REQUEST SUCCEED NOTIFICATION!
            react_hot_toast_1["default"].success("EDIT SUCCESSFUL!");
            getRoles(); // GETTING FRESH ROLES!
            return { success: true, message: "Roles updated successfully!" };
        }
        catch (err) { }
    };
    // CLEAR SELECTED ROLE!
    var clearSelectedRole = function () {
        setRole(__assign(__assign({}, role), { selectedRole: null }));
    };
    return {
        createNewRole: createNewRole,
        deleteRole: deleteRole,
        editRole: editRole,
        getRoles: getRoles,
        clearSelectedRole: clearSelectedRole
    };
}
exports["default"] = useRole;
