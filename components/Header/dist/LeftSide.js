"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
function LeftSide(_a) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex gap-3 items-center" },
            React.createElement(image_1["default"], { src: "/images/logo2.png", alt: "logo-alt", priority: true, quality: 95, width: 35, height: 35 }),
            React.createElement("div", { className: "flex gap-2 items-center text-lg text-gray-100" },
                React.createElement("h2", { className: "font-bold " }, "Select Care"),
                React.createElement("span", { className: "hidden md:flex gap-2 items-center font-semibold" },
                    React.createElement("span", null, "|"),
                    React.createElement("h3", null, "Senior"),
                    React.createElement("span", null, ">"),
                    React.createElement("h3", null, "Admin"))))));
}
exports["default"] = LeftSide;
