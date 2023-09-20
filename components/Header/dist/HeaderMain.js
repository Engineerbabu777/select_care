"use client";
"use strict";
exports.__esModule = true;
var LeftSide_1 = require("./LeftSide");
var RightSide_1 = require("./RightSide");
function HeaderMain() {
    return (React.createElement("header", { className: "fixed top-0 left-0 right-0 flex justify-between items-center px-2 md:px-4 lg:px-6 bg-[#C63D2F] text-white py-2" },
        React.createElement(LeftSide_1["default"], null),
        React.createElement(RightSide_1["default"], null)));
}
exports["default"] = HeaderMain;
