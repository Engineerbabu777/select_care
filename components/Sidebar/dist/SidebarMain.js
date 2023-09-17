"use strict";
exports.__esModule = true;
var Card_1 = require("../Card");
var IconComponent_1 = require("../IconComponent");
var icons_1 = require("@/icons/icons");
function SidebarMain() {
    // WILL REMOVE DIVISIONS AT END AS WELL CREATE COMPONENT FOR ICON-DIV!
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "w-full max-w-[3rem] mx-auto h-full flex" },
            React.createElement(Card_1["default"], null,
                React.createElement("div", { className: "mt-4 px-1 gap-2 flex flex-col items-center  " },
                    React.createElement("div", { className: "" },
                        React.createElement(IconComponent_1["default"], { aside: true, icon: React.createElement(icons_1.IoIosAddCircle, { className: "w-8 m-1 h-8 text-[#016A70]" }) })),
                    React.createElement("hr", { className: " bg-gray-500 w-8" }),
                    React.createElement("div", { className: "-mb-1" },
                        React.createElement(IconComponent_1["default"], { aside: true, icon: React.createElement(icons_1.RiGroup2Fill, { className: "w-7 h-7 m-1.5" }) })),
                    React.createElement("div", { className: "" },
                        React.createElement(IconComponent_1["default"], { aside: true, icon: React.createElement(icons_1.FaIdCardClip, { className: "w-6 h-6 m-2" }) })),
                    React.createElement("div", { className: "" },
                        React.createElement(IconComponent_1["default"], { aside: true, icon: React.createElement(icons_1.MdEngineering, { className: "w-6 h-6 m-2" }) })))))));
}
exports["default"] = SidebarMain;
