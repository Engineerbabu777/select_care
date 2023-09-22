"use client";
"use strict";
exports.__esModule = true;
function EmployeeInputs(_a) {
    var _b;
    var onChangeData = _a.onChangeData, employee = _a.employee;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex gap-1 flex-col" },
            React.createElement("label", { className: "text-gray-600 text-sm", htmlFor: "firstName" }, "First Name"),
            React.createElement("input", { className: "w-full transition-all duration-300  py-1 outline-none focus:outline-none border-b hover:border-blue-400 focus:border-blue-600  text-gray-500 placeholder:text-gray-300", placeholder: "John", name: "firstName", id: "firstName", type: "text", value: employee.selectedOne.firstName, onChange: onChangeData })),
        React.createElement("div", { className: "flex gap-1 flex-col" },
            React.createElement("label", { className: "text-gray-600 text-sm", htmlFor: "firstName" }, "Last Name"),
            React.createElement("input", { className: "w-full transition-all duration-300  py-1 outline-none focus:outline-none border-b hover:border-blue-400 focus:border-blue-600  text-gray-500 placeholder:text-gray-300", placeholder: "Doe", name: "lastName", id: "lastName", type: "text", value: (_b = employee === null || employee === void 0 ? void 0 : employee.selectedOne) === null || _b === void 0 ? void 0 : _b.lastName, onChange: onChangeData })),
        React.createElement("div", { className: "flex gap-1 flex-col" },
            React.createElement("label", { className: "text-gray-600 text-sm", htmlFor: "email" }, "Email Address"),
            React.createElement("input", { className: "w-full transition-all duration-300  py-1 outline-none focus:outline-none border-b hover:border-blue-400 focus:border-blue-600  text-gray-500 placeholder:text-gray-300", placeholder: "example@gmail.com", name: "email", id: "email", type: "email", value: employee.selectedOne.email, onChange: onChangeData }))));
}
exports["default"] = EmployeeInputs;
