"use strict";
exports.__esModule = true;
function TopDetails(_a) {
    var length = _a.length, smallHeading = _a.smallHeading;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: " px-2 text-white text-sm py-1 bg-gray-600 flex justify-between items-center" },
            React.createElement("h3", null,
                smallHeading,
                " Name"),
            React.createElement("h3", null,
                "Total ",
                smallHeading,
                ": ",
                length))));
}
exports["default"] = TopDetails;
