"use client";
"use strict";
exports.__esModule = true;
var Card_1 = require("@/components/shared/Card");
var role_hooks_1 = require("@/hooks/role.hooks");
var react_1 = require("react");
var roleState_1 = require("@/recoil/roleState");
var recoil_1 = require("recoil");
var react_spinners_1 = require("react-spinners"); //IF NEEDED WILL PUSH TO NEW FILE!
var Heading_1 = require("@/components/shared/Heading");
function RoleMain() {
    var _a, _b;
    var getRoles = role_hooks_1["default"]().getRoles;
    var _c = recoil_1.useRecoilState(roleState_1.roleState), role = _c[0], setRole = _c[1];
    react_1.useEffect(function () {
        getRoles();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex w-full h-full" },
            React.createElement(Card_1["default"], null,
                React.createElement("div", { className: "h-full flex flex flex-col" },
                    React.createElement(Heading_1["default"], { heading: "Manage Roles" }),
                    role.loadingRoles && (React.createElement("div", { className: "flex h-full items-center justify-center border-gray-300 bg-gray-50 m-2 " },
                        React.createElement("div", { className: "flex gap-2 items-center" },
                            React.createElement("span", { className: "text-[#E55604] font-semibold text-lg" }, "Please wait"),
                            React.createElement(react_spinners_1.PulseLoader, { size: 18, color: "#E55604" })))),
                    !role.loadingRoles && (React.createElement("div", { className: "border-gray-300 bg-gray-50 overflow-auto m-2 custom-scroll " },
                        React.createElement("div", { className: " flex-1  " }, ((_a = role === null || role === void 0 ? void 0 : role.roles) === null || _a === void 0 ? void 0 : _a.length) > 0 && ((_b = role === null || role === void 0 ? void 0 : role.roles) === null || _b === void 0 ? void 0 : _b.map(function (r, ind) { return (React.createElement("div", { key: ind, className: "text-md text-[#3abff8] transition-all duration-300 hover:text-blue-600 cursor-pointer hover:bg-gray-200 border-b border-gray-300 py-1 px-2" },
                            React.createElement("h1", { className: "hover:underline" }, r === null || r === void 0 ? void 0 : r.title))); }))))))))));
}
exports["default"] = RoleMain;
