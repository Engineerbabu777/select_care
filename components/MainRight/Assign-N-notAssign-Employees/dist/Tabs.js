"use strict";
exports.__esModule = true;
function Tabs(_a) {
    var currentTab = _a.currentTab, setCurrentTab = _a.setCurrentTab;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: " flex gap-1 text-center items-center text-sm text-semibold m-1 " },
            React.createElement("div", { className: "flex-1 font-semibold py-4 cursor-pointer hover:bg-gray-100  " +
                    (currentTab === "assign"
                        ? " border-b-2 border-blue-500 text-blue-500 "
                        : " text-gray-500 border-white border-b-2"), onClick: function () { return setCurrentTab("assign"); } }, "ASSIGNED"),
            React.createElement("div", { className: "flex-1 font-semibold py-4 cursor-pointer hover:bg-gray-100  " +
                    (currentTab === "not-assign"
                        ? " border-b-2 border-blue-500 text-blue-500"
                        : " text-gray-500 border-white border-b-2"), onClick: function () { return setCurrentTab("not-assign"); } }, "UNASSIGNED"))));
}
exports["default"] = Tabs;
