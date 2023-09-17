'use client';
"use strict";
exports.__esModule = true;
var HomeLayout_1 = require("@/components/Home/HomeLayout");
var SidebarMain_1 = require("@/components/Sidebar/SidebarMain");
var Main_1 = require("@/components/Main/Main");
var recoil_1 = require("recoil");
function Home() {
    // (!AUTHENTICATION) REFERS TO /LOGIN PAGE (WILL IMPLEMENT-AT-END!)!
    return (React.createElement(recoil_1.RecoilRoot, null,
        React.createElement(HomeLayout_1["default"], null,
            React.createElement(SidebarMain_1["default"], null),
            React.createElement(Main_1["default"], null),
            React.createElement("div", null, "3"))));
}
exports["default"] = Home;
