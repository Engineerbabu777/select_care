"use strict";
exports.__esModule = true;
var react_1 = require("react");
function IconComponent(_a) {
    var icon = _a.icon, header = _a.header, aside = _a.aside;
    return (react_1.React.createElement(react_1.React.Fragment, null,
        react_1.React.createElement("div", { className: "p-1 py-1 rounded-full cursor-pointer  transition-all duration-300 \n\t\t\t  " + (header ? "hover:text-red-700 hover:bg-gray-100" : "") + " \n\t\t\t  " + (aside ? "hover:text-red-700 hover:bg-gray-200" : "") }, icon)));
}
exports["default"] = IconComponent;
