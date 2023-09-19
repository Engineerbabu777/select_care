"use strict";
exports.__esModule = true;
var icons_1 = require("@/icons/icons");
function SaveButton(_a) {
    // WILL CONTAIN SPINNER!
    var onClick = _a.onClick;
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { type: "button", className: "flex py-2 text-green-600 hover:text-white hover:bg-green-400 transition duration-300 gap-2 items-center justify-center bg-green-300 shadow-sm rounded-md w-full", onClick: onClick },
            React.createElement(icons_1.FaSave, { className: "w-4 h-4 " }),
            React.createElement("p", { className: "text-md font-bold " }, "Save"))));
}
exports["default"] = SaveButton;
