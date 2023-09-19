"use strict";
exports.__esModule = true;
var Card_1 = require("@/components/shared/Card");
var data_1 = require("@/constants/data");
function RoleMain() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex w-full h-full" },
            React.createElement(Card_1["default"], null,
                React.createElement("div", { className: "h-full flex flex flex-col" },
                    React.createElement("div", { className: "border-b px-2 py-3 border-gray-300 text-2xl text-semibold text-gray-700 flex" },
                        React.createElement("h1", null, "Manage Roles")),
                    React.createElement("div", { className: "border-gray-300 bg-gray-50 overflow-auto m-2 custom-scroll " },
                        React.createElement("div", { className: " flex-1  " }, data_1.roles.map(function (role) { return (React.createElement("div", { key: role.roleName, className: "text-md text-[#3abff8] transition-all duration-300 hover:text-blue-600 cursor-pointer hover:bg-gray-200 border-b border-gray-300 py-1 px-2" },
                            React.createElement("h1", { className: "hover:underline" }, role.roleName))); }))))))));
}
exports["default"] = RoleMain;
