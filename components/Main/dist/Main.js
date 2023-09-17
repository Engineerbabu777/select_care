'use client';
"use strict";
exports.__esModule = true;
var recoil_1 = require("recoil");
var display_state_1 = require("@/recoil/display-state");
var UserMain_1 = require("../MainView/Users/UserMain");
var RolesMain_1 = require("../MainView/Roles/RolesMain");
function Main() {
    var _a = recoil_1.useRecoilState(display_state_1.displayStateAtom), display = _a[0], setDisplay = _a[1];
    return (React.createElement(React.Fragment, null,
        display.display === 'USER' && React.createElement(UserMain_1["default"], null),
        display.display === 'ROLE' && React.createElement(RolesMain_1["default"], null),
        display.display === 'DEV' && React.createElement(React.Fragment, null, "DEVELOPER INFORMATION: ENGINEER BABU (TURKISH DEV)")));
}
exports["default"] = Main;
