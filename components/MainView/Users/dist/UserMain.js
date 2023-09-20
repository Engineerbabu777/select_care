"use client";
"use strict";
exports.__esModule = true;
var Card_1 = require("@/components/shared/Card");
var employee_hooks_1 = require("@/hooks/employee.hooks");
var role_hooks_1 = require("@/hooks/role.hooks");
var employeeState_1 = require("@/recoil/employeeState");
var react_1 = require("react");
var recoil_1 = require("recoil");
var react_spinners_1 = require("react-spinners");
function UserMain() {
    var _a;
    var getRoles = role_hooks_1["default"]().getRoles;
    var getEmployees = employee_hooks_1["default"]().getEmployees;
    var _b = recoil_1.useRecoilState(employeeState_1.employeeState), employee = _b[0], setEmployee = _b[1];
    react_1.useEffect(function () {
        getEmployees();
    }, []);
    react_1.useEffect(function () {
        getRoles();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex w-full h-full" },
            React.createElement(Card_1["default"], null,
                React.createElement("div", { className: "h-full flex flex-col " },
                    React.createElement("div", { className: "border-b px-2 py-3 border-gray-300 text-2xl text-semibold text-gray-700  flex" },
                        React.createElement("h1", { className: "" }, "Manage Users")),
                    employee.loadingEmployees && (React.createElement("div", { className: "flex h-full items-center justify-center border-gray-300 bg-gray-50 m-2 " },
                        React.createElement("div", { className: "flex gap-2 items-center" },
                            React.createElement("span", { className: "text-[#E55604] font-semibold text-lg" }, "Please wait"),
                            React.createElement(react_spinners_1.PulseLoader, { size: 18, color: "#E55604" })))),
                    !employee.loadingEmployees && (React.createElement("div", { className: "border-gray-300 bg-gray-50 overflow-auto m-2 custom-scroll" },
                        React.createElement("div", { className: " flex-1  " }, ((_a = employee === null || employee === void 0 ? void 0 : employee.employees) === null || _a === void 0 ? void 0 : _a.length) > 0 && (employee === null || employee === void 0 ? void 0 : employee.employees.map(function (user) { return (React.createElement("div", { key: user, className: "text-md text-[#3abff8] transition-all duration-300 hover:text-blue-600 cursor-pointer hover:bg-gray-200 border-b border-gray-300 py-1 px-2" },
                            React.createElement("h1", { className: "hover:underline" },
                                user.firstName,
                                " ", user === null || user === void 0 ? void 0 :
                                user.lastName))); }))))))))));
}
exports["default"] = UserMain;
