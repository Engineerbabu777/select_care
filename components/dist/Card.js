"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Card(_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("section", { className: "bg-white rounded-md shadow-md my-2 w-full" }, children)));
}
exports["default"] = Card;
