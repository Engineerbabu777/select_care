"use client";
"use strict";
exports.__esModule = true;
var icons_1 = require("@/icons/icons");
var react_spinners_1 = require("react-spinners");
function SaveButton(_a) {
    // WILL CONTAIN SPINNER!
    var onClick = _a.onClick, _b = _a.loading, loading = _b === void 0 ? false : _b;
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { disabled: loading, type: "button", className: "flex py-2 text-green-600 hover:text-white hover:bg-green-400 transition duration-300 gap-2 items-center justify-center bg-green-300 shadow-sm rounded-md w-full", onClick: onClick },
            !loading && (React.createElement(React.Fragment, null,
                React.createElement(icons_1.FaSave, { className: "w-4 h-4 " }),
                React.createElement("p", { className: "text-md font-bold " }, "Save"))),
            loading && (React.createElement("div", { className: "text-gray-500 flex items-center text-md gap-2 font-semibold" },
                React.createElement("span", null, "Please wait"),
                React.createElement(react_spinners_1.ClipLoader, { size: 18, color: "grey" }))))));
}
exports["default"] = SaveButton;
