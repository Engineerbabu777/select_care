"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Tabs_1 = require("./Tabs");
var recoil_1 = require("recoil");
var employeeState_1 = require("@/recoil/employeeState");
function EmpTabsMain() {
    var _a = react_1.useState("assign"), currentTab = _a[0], setCurrentTab = _a[1];
    var _b = recoil_1.useRecoilState(employeeState_1.employeeState), employees = _b[0], setEmployees = _b[1];
    return (React.createElement(React.Fragment, null, React.createElement("div", { className: "w-full h-full overflow-hidden rounded-md" },
        React.createElement(Tabs_1["default"], { currentTab: currentTab, setCurrentTab: setCurrentTab }),
        currentTab === "assign" && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "flex h-full w-full bg-gray-50 overflow-auto flex-col mt-1" }, employees.assigned.map(function (emp, ind) {
                var _a;
                return (React.createElement(React.Fragment, null,
                    React.createElement("div", { key: ind, className: " cursor-pointer flex justify-between hover:bg-gray-200 transition-all duration-300 items-center px-2 py-1 border-b border-gray-300" },
                        React.createElement("div", { className: "flex flex-col " },
                            React.createElement("p", { className: "font-semibold text-gray-700" }, emp === null || emp === void 0 ? void 0 :
                                emp.firstName,
                                " ", emp === null || emp === void 0 ? void 0 :
                                emp.lastName),
                            React.createElement("p", { className: "text-sm text-gray-400" }, emp === null || emp === void 0 ? void 0 : emp.email)),
                        React.createElement("div", { className: "" },
                            React.createElement("p", { className: "flex items-center gap-1" },
                                React.createElement("span", { className: "font-semibold hover:underline text-blue-500" }, (_a = emp === null || emp === void 0 ? void 0 : emp.role) === null || _a === void 0 ? void 0 : _a.title))))));
            })))),
        currentTab === "not-assign" && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "flex h-full w-full bg-gray-50 overflow-auto flex-col mt-1" },
                employees.nonAssigned.map(function (emp, ind) { return (React.createElement(React.Fragment, null,
                    React.createElement("div", { key: ind, className: " cursor-pointer flex justify-between hover:bg-gray-200 transition-all duration-300 items-center px-2 py-1 border-b border-gray-300" },
                        React.createElement("div", { className: "flex flex-col " },
                            React.createElement("p", { className: "font-semibold text-gray-700" }, emp === null || emp === void 0 ? void 0 :
                                emp.firstName,
                                " ", emp === null || emp === void 0 ? void 0 :
                                emp.lastName),
                            React.createElement("p", { className: "text-sm text-gray-400" }, emp === null || emp === void 0 ? void 0 : emp.email)),
                        React.createElement("div", { className: "" },
                            React.createElement("p", { className: "flex items-center gap-1" },
                                React.createElement("span", { className: "font-semibold hover:underline text-blue-500" }, "nill")))))); }),
                employees.nonAssigned.length < 1 && React.createElement(React.Fragment, null, "Nothing to show")))))));
}
exports["default"] = EmpTabsMain;
