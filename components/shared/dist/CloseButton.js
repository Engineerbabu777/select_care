"use strict";
exports.__esModule = true;
var icons_1 = require("@/icons/icons");
function CloseButton(_a) {
    var onClick = _a.onClick;
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { type: "button", className: "flex py-2 text-red-700 hover:text-white hover:bg-red-400 transition duration-300 gap-2 items-center justify-center bg-red-300 shadow-sm rounded-md w-full", onClick: onClick },
            React.createElement(icons_1.MdClose, { className: "w-4 h-4 " }),
            React.createElement("p", { className: "text-md font-bold " }, "Close"))));
}
exports["default"] = CloseButton;
