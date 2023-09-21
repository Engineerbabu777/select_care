"use strict";
exports.__esModule = true;
var recoil_1 = require("recoil");
var Card_1 = require("../shared/Card");
var display_state_1 = require("@/recoil/display-state");
var Employee_1 = require("./EmployeeDetails/Employee");
var RoleDetail_1 = require("./RoleDetails/RoleDetail");
var EmpTabsMain_1 = require("./Assign-N-notAssign-Employees/EmpTabsMain");
function MainRight() {
    var _a = recoil_1.useRecoilState(display_state_1.displayStateAtom), display = _a[0], setDisplay = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "h-full w-full flex " },
            React.createElement(Card_1["default"], null,
                React.createElement("div", { className: "w-full h-full " },
                    (display === null || display === void 0 ? void 0 : display.display) === "USER" && (display === null || display === void 0 ? void 0 : display.right) === "" && (React.createElement(React.Fragment, null,
                        React.createElement(Employee_1["default"], null))),
                    (display === null || display === void 0 ? void 0 : display.display) === "USER" && (display === null || display === void 0 ? void 0 : display.right) === "SUNSUSER" && (React.createElement(React.Fragment, null,
                        React.createElement(EmpTabsMain_1["default"], null))),
                    (display === null || display === void 0 ? void 0 : display.display) === "ROLE" && (display === null || display === void 0 ? void 0 : display.right) === "" && (React.createElement(React.Fragment, null,
                        React.createElement(RoleDetail_1["default"], null))),
                    (display === null || display === void 0 ? void 0 : display.display) === "ROLE" && (display === null || display === void 0 ? void 0 : display.right) === "SUNSROLE" && (React.createElement(React.Fragment, null, "SUNSROLE")))))));
}
exports["default"] = MainRight;
