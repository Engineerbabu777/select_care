'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function HomeLayout(_a) {
    // SAME CLASSES WILL BE MOVE TO CSS FILE(AT END) !!!
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("main", { className: "flex gap-2 w-full h-full lg:h-[calc(100vh-55px)] mt-14" },
            react_1["default"].createElement("section", { className: "hidden sm:block w-[5vw] md:w-[6vw] h-full ml-2 sm:m-0 " }, children[0]),
            react_1["default"].createElement("div", { className: "flex-1 flex gap-2 h-full " },
                react_1["default"].createElement("section", { className: "flex-1 h-full " }, children[1]),
                react_1["default"].createElement("section", { className: "hidden lg:block lg:flex-1 mr-4  h-full" }, children[2])))));
}
exports["default"] = HomeLayout;
