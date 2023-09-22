"use client";
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
exports.__esModule = true;
var Card_1 = require("@/components/shared/Card");
var employeeState_1 = require("@/recoil/employeeState");
var react_1 = require("react");
var recoil_1 = require("recoil");
var react_spinners_1 = require("react-spinners");
var Heading_1 = require("@/components/shared/Heading");
var role_hooks_1 = require("@/hooks/role.hooks");
var employee_hooks_1 = require("@/hooks/employee.hooks");
var TopDetails_1 = require("@/components/shared/TopDetails");
function UserMain() {
    var _a;
    var _b = recoil_1.useRecoilState(employeeState_1.employeeState), employee = _b[0], setEmployee = _b[1];
    var getRoles = role_hooks_1["default"]().getRoles;
    var getEmployees = employee_hooks_1["default"]().getEmployees;
    react_1.useEffect(function () {
        getRoles();
        getEmployees();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex w-full h-full" },
            React.createElement(Card_1["default"], null,
                React.createElement("div", { className: "h-full flex flex-col " },
                    React.createElement(Heading_1["default"], { heading: "Manage Employees" }),
                    (employee === null || employee === void 0 ? void 0 : employee.loadingEmployees) && (React.createElement("div", { className: "flex h-full items-center justify-center border-gray-300 bg-gray-50 m-2 " },
                        React.createElement("div", { className: "flex gap-2 items-center" },
                            React.createElement("span", { className: "text-[#E55604] font-semibold text-lg" }, "Please wait"),
                            React.createElement(react_spinners_1.PulseLoader, { size: 18, color: "#E55604" })))),
                    !employee.loadingEmployees && (React.createElement("div", { className: "flex flex-col overflow-hidden mb-2 mt-1 mx-2" },
                        React.createElement(TopDetails_1["default"], { length: employee === null || employee === void 0 ? void 0 : employee.totalNumberOfEmployee, smallHeading: "Employees" }),
                        React.createElement("div", { className: "border-gray-300 bg-gray-50 overflow-auto custom-scroll" },
                            React.createElement("div", { className: " flex-1  " }, ((_a = employee === null || employee === void 0 ? void 0 : employee.employees) === null || _a === void 0 ? void 0 : _a.length) > 0 && (employee === null || employee === void 0 ? void 0 : employee.employees.map(function (user) { return (React.createElement("div", { onClick: function () {
                                    return setEmployee(__assign(__assign({}, employee), { selectedOne: user }));
                                }, key: user, className: "text-md text-[#3abff8] transition-all duration-300 hover:text-blue-600 cursor-pointer hover:bg-gray-200 border-b border-gray-300 py-1 px-2" },
                                React.createElement("h1", { className: "hover:underline" },
                                    user.firstName,
                                    " ", user === null || user === void 0 ? void 0 :
                                    user.lastName))); })))))))))));
}
exports["default"] = UserMain;
