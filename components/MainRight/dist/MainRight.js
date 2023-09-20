"use strict";
exports.__esModule = true;
var recoil_1 = require("recoil");
var Card_1 = require("../shared/Card");
var display_state_1 = require("@/recoil/display-state");
function MainRight() {
    var _a = recoil_1.useRecoilState(display_state_1.displayStateAtom), display = _a[0], setDisplay = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "h-full w-full flex " },
            React.createElement(Card_1["default"], null,
                React.createElement("div", { className: "h-full w-full" },
                    (display === null || display === void 0 ? void 0 : display.display) === "USER" && (display === null || display === void 0 ? void 0 : display.right) === "" && (React.createElement(React.Fragment, null, "user details")),
                    (display === null || display === void 0 ? void 0 : display.display) === "USER" && (display === null || display === void 0 ? void 0 : display.right) === "SUNSUSER" && (React.createElement(React.Fragment, null, "SUNSUSER")),
                    ((display === null || display === void 0 ? void 0 : display.display) === "ROLE" && (display === null || display === void 0 ? void 0 : display.right) === "") && React.createElement(React.Fragment, null, "role details"),
                    (display === null || display === void 0 ? void 0 : display.display) === "ROLE" && (display === null || display === void 0 ? void 0 : display.right) === "SUNSROLE" && (React.createElement(React.Fragment, null, "SUNSROLE")))))));
}
exports["default"] = MainRight;
