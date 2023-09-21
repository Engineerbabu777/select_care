"use strict";
exports.__esModule = true;
var Heading_1 = require("@/components/shared/Heading");
var IconComponent_1 = require("@/components/shared/IconComponent");
var icons_1 = require("@/icons/icons");
function CardHeading(_a) {
    var _b, _c;
    var employee = _a.employee, edit = _a.edit, setEdit = _a.setEdit, setShowDelete = _a.setShowDelete, showDelete = _a.showDelete, _d = _a.single, single = _d === void 0 ? false : _d, deleteEmployee = _a.deleteEmployee;
    return (React.createElement(React.Fragment, null,
        !(employee === null || employee === void 0 ? void 0 : employee.selectedOne) && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "h-full w-full" },
                React.createElement(Heading_1["default"], { heading: 'Select an Employee' }),
                React.createElement("p", { className: "px-1 py-2 text-sm text-gray-700" }, "Select a user to see its details here.")))),
        employee.selectedOne && single && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "border-b flex items-center justify-between px-2 py-3 border-gray-300 text-2xl text-semibold text-gray-700 flex" },
                React.createElement("h1", null,
                    edit && React.createElement(React.Fragment, null, "Edit Mode"),
                    !edit && (React.createElement(React.Fragment, null, (_b = employee === null || employee === void 0 ? void 0 : employee.selectedOne) === null || _b === void 0 ? void 0 :
                        _b.firstName,
                        "\u00A0", (_c = employee === null || employee === void 0 ? void 0 : employee.selectedOne) === null || _c === void 0 ? void 0 :
                        _c.lastName))),
                React.createElement("div", { className: "flex items-center gap-2 " },
                    React.createElement("p", { className: "font-semibold text-orange-500 text-sm" }, "DETAILS"),
                    React.createElement(IconComponent_1["default"], { aside: true, icon: React.createElement(icons_1.BiDotsVertical, { className: "w-5 h-5 font-semibold text-blue-600" }), isClickable: true, onClick: function () {
                            setShowDelete(!showDelete);
                        } }),
                    showDelete && (React.createElement("div", { className: "absolute bg-gray-300 rounded-md overflow-hidden shadow-sm mt-24" },
                        React.createElement("p", { className: "cursor-pointer text-green-500 bg-green-100 hover:bg-green-200 font-semibold text-sm px-6 py-2", onClick: function () {
                                setEdit(true); // SO W E CAN ED IT INSTEAD OF VIEW!
                                setShowDelete(!showDelete); // CLOSE THE MENU!
                            } }, "Edit"),
                        React.createElement("p", { className: "cursor-pointer text-red-500 bg-red-100 hover:bg-red-200 font-semibold text-sm px-6 py-2", onClick: function () {
                                deleteEmployee(employee.selectedOne._id); // DELETING SELECTED ID!
                                setShowDelete(!showDelete); // CLOSE THE MENU!
                            } }, "Delete")))))))));
}
exports["default"] = CardHeading;
