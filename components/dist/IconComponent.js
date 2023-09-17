"use client";
"use strict";
exports.__esModule = true;
var handledisplayState_1 = require("@/utils/state-manage/handledisplayState");
var react_1 = require("react");
function IconComponent(_a) {
    // UPDATE SET STATE FUNCTION MOVE TO UTILS NEXT!
    var icon = _a.icon, header = _a.header, aside = _a.aside, onClick = _a.onClick, _b = _a.isClickable, isClickable = _b === void 0 ? false : _b;
    return (react_1.React.createElement(react_1.React.Fragment, null,
        react_1.React.createElement("div", { onClick: function () {
                handledisplayState_1.updateState(isClickable, onClick);
            }, className: "p-1 py-1 rounded-full cursor-pointer  transition-all duration-300 \n\t\t\t  " + (header ? "hover:text-red-700 hover:bg-gray-100" : "") + " \n\t\t\t  " + (aside ? "hover:text-red-700 hover:bg-gray-200" : "") }, icon)));
}
exports["default"] = IconComponent;
