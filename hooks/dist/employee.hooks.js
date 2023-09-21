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
var employeeState_1 = require("@/recoil/employeeState");
var employeeValidations_1 = require("@/utils/user/employeeValidations");
var recoil_1 = require("recoil");
var react_hot_toast_1 = require("react-hot-toast");
function useEmployee() {
    var _this = this;
    var _a = recoil_1.useRecoilState(employeeState_1.employeeState), users = _a[0], setUsers = _a[1]; // CHANGE TO EMPLOYEE!
    // GET ALL ROLES!
    var getEmployees = function () {
        setUsers(__assign(__assign({}, users), { loadingEmployees: true }));
        try {
            // MAKE A GET REQUEST! (PUT IN TRY CATCH AT LAST!)!
            fetch("/api/employee")
                .then(function (response) {
                response.json().then(function (data) {
                    var _a, _b, _c;
                    setUsers({
                        employees: data === null || data === void 0 ? void 0 : data.employees,
                        totalNumberOfEmployee: (_a = data === null || data === void 0 ? void 0 : data.employees) === null || _a === void 0 ? void 0 : _a.length,
                        loadingEmployees: false,
                        selectedOne: null,
                        assigned: (_b = data === null || data === void 0 ? void 0 : data.employees) === null || _b === void 0 ? void 0 : _b.filter(function (emp) { return (emp === null || emp === void 0 ? void 0 : emp.role) !== null; }),
                        nonAssigned: (_c = data === null || data === void 0 ? void 0 : data.employees) === null || _c === void 0 ? void 0 : _c.filter(function (emp) { return (emp === null || emp === void 0 ? void 0 : emp.role) === null; })
                    });
                    console.log("CLIENT EMPLOYEE->", data);
                });
            })["catch"](function (err) {
                setUsers(__assign(__assign({}, users), { loadingEmployees: false }));
                // WILL WRITE HERE LATER  MORE !!!
            });
        }
        catch (err) { }
        // VALIDATE IF ERROR EXITS OR NOT !!
    };
    // CREATE NEW ROLE!
    var createNewEmployee = function (user) { return __awaiter(_this, void 0, void 0, function () {
        var validator;
        return __generator(this, function (_a) {
            try {
                validator = employeeValidations_1.employeeValidation(user.firstName, user.lastName, user.email);
                // MAKE A POST REQUEST TO SAVE DATA IN OUR DATABASE!
                if (validator) {
                    fetch("/api/employee", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            accept: "application/json"
                        },
                        body: JSON.stringify(user)
                    }).then(function (response) {
                        return response.json().then(function (data) {
                            setUsers(__assign(__assign({}, users), { employees: data === null || data === void 0 ? void 0 : data.employees }));
                        });
                    });
                    getEmployees();
                    return [2 /*return*/, { success: true, message: "Employee created successfully!" }];
                }
            }
            catch (err) {
                return [2 /*return*/, { error: true, message: err.message }];
            }
            return [2 /*return*/];
        });
    }); };
    // DELETE ANY ROLE!
    var deleteEmployee = function (id) {
        try {
            // DELETE FROM STATE!
            setUsers(__assign(__assign({}, users), { employees: users === null || users === void 0 ? void 0 : users.employees.filter(function (u) { return u._id !== id; }), selectedOne: null })); // THAT WILL REMOVE DELETION ID AND MAKE SELECTED NULL ON RIGHT SIDE!
            // WE CAN ALSO CHECK FROM OUR STATE THAT IF ID IS AVAILABLE THEN REMOVE FROM DATABASE OTHERWISE NOT MAKE A DELETE REQUEST! (IN FUTURE!) !
            // OTHERWISE DELETE REQUEST!
            fetch("/api/employee?id=" + id, { method: "DELETE" }).then(function (response) {
                return response.json().then(function (data) { return console.log(data); });
            });
            react_hot_toast_1["default"].success("DELETION SUCCESSFUL!");
            // THAT MEANS EVERYTHING IS OK FETCH REFRESH DATA!
            // getEmployees();
        }
        catch (error) {
            console.log("DELETION ERROR:-> ", error.message);
        }
    };
    // EDIT ANY ROLE!
    var editEmployee = function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, firstName, lastName, email, role, _id, validator, body;
        return __generator(this, function (_b) {
            _a = users.selectedOne, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, role = _a.role, _id = _a._id;
            // console.log('NEW ROLE ID', role._id, "ACTUAL ROLE: ",role,users.selectedOne);
            try {
                validator = employeeValidations_1.employeeValidation(firstName, lastName, email);
                body = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    role: role,
                    _id: _id
                };
                // EVERTING IS OK!
                // PUT REQUEST!
                if (validator) {
                    fetch("/api/employee", {
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
                react_hot_toast_1["default"].success("EDIT SUCCESSFUL!");
                getEmployees(); // GETTING FRESH EMPLOYEES!
                return [2 /*return*/, { success: true, message: "Employee updated successfully!" }];
            }
            catch (error) {
                react_hot_toast_1["default"].error(error.message); // GIVING TOAST ERROR!
                // console.log('ERROR: ', error.message);
            }
            return [2 /*return*/];
        });
    }); };
    return {
        createNewEmployee: createNewEmployee,
        users: users,
        getEmployees: getEmployees,
        deleteEmployee: deleteEmployee,
        editEmployee: editEmployee
    };
}
exports["default"] = useEmployee;
