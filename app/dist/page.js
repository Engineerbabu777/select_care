"use strict";
exports.__esModule = true;
var HomeLayout_1 = require("@/components/Home/HomeLayout");
var SidebarMain_1 = require("@/components/Sidebar/SidebarMain");
function Home() {
    // (!AUTHENTICATION) REFERS TO /LOGIN PAGE (WILL IMPLEMENT-AT-END!)!
    return (React.createElement(React.Fragment, null,
        React.createElement(HomeLayout_1["default"], null,
            React.createElement(SidebarMain_1["default"], null),
            React.createElement("div", null, "2"),
            React.createElement("div", null, "3"))));
}
exports["default"] = Home;
