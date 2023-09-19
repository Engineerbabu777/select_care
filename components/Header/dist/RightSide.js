"use strict";
exports.__esModule = true;
var icons_1 = require("@/icons/icons");
var IconComponent_1 = require("../shared/IconComponent");
function RightSide(_a) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex gap-2 items-center" },
            React.createElement(IconComponent_1["default"], { header: true, icon: React.createElement(icons_1.MdNotifications, { className: "w-6 h-6" }) }),
            React.createElement(IconComponent_1["default"], { header: true, icon: React.createElement(icons_1.PiChatsBold, { className: "w-6 h-6" }) }),
            React.createElement(IconComponent_1["default"], { header: true, icon: React.createElement(icons_1.MdOutlineApps, { className: "w-6 h-6 " }) }),
            React.createElement(IconComponent_1["default"], { header: true, icon: React.createElement(icons_1.BiSolidUserCircle, { className: "w-6 h-6" }) }))));
}
exports["default"] = RightSide;
