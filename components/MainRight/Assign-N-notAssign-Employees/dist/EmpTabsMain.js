'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Tabs_1 = require("./Tabs");
var recoil_1 = require("recoil");
var employeeState_1 = require("@/recoil/employeeState");
var ShowData_1 = require("./ShowData");
function EmpTabsMain() {
    var _a = react_1.useState("assign"), currentTab = _a[0], setCurrentTab = _a[1];
    var _b = recoil_1.useRecoilState(employeeState_1.employeeState), employees = _b[0], setEmployees = _b[1];
    return (React.createElement(React.Fragment, null, React.createElement("div", { className: "w-full h-full rounded-md flex flex-col overflow-hidden p-1" },
        React.createElement(Tabs_1["default"], { currentTab: currentTab, setCurrentTab: setCurrentTab }),
        React.createElement("div", { className: "w-full h-full flex-1 flex-col overflow-auto custom-scroll mr-2" },
            currentTab === "assign" && (React.createElement(React.Fragment, null,
                React.createElement(ShowData_1["default"], { employees: employees.assigned }))),
            currentTab === "not-assign" && (React.createElement(React.Fragment, null,
                React.createElement(ShowData_1["default"], { employees: employees.nonAssigned })))))));
}
exports["default"] = EmpTabsMain;
