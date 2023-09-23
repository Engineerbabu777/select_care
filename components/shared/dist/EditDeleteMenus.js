"use strict";
exports.__esModule = true;
var IconComponent_1 = require("./IconComponent");
var icons_1 = require("@/icons/icons");
var role_hooks_1 = require("@/hooks/role.hooks");
var employee_hooks_1 = require("@/hooks/employee.hooks");
function EditDeleteMenus(_a) {
    var edit = _a.edit, setEdit = _a.setEdit, selectedOne = _a.selectedOne, deleteFunction = _a.deleteFunction, setShowDelete = _a.setShowDelete, _b = _a.role, role = _b === void 0 ? false : _b, showDelete = _a.showDelete;
    var clearSelectedRole = role_hooks_1["default"]().clearSelectedRole;
    var clearSelectedEmployee = employee_hooks_1["default"]().clearSelectedEmployee;
    return (React.createElement(React.Fragment, null,
        React.createElement(React.Fragment, null,
            React.createElement("div", { className: "border-b flex items-center justify-between px-2 py-3 border-gray-300 text-2xl text-semibold text-gray-700 flex" },
                React.createElement("h1", null,
                    edit && React.createElement(React.Fragment, null, "Edit Mode"),
                    !edit && (React.createElement(React.Fragment, null,
                        role && React.createElement(React.Fragment, null, selectedOne === null || selectedOne === void 0 ? void 0 : selectedOne.title),
                        !role && (React.createElement(React.Fragment, null, selectedOne === null || selectedOne === void 0 ? void 0 :
                            selectedOne.firstName,
                            "\u00A0", selectedOne === null || selectedOne === void 0 ? void 0 :
                            selectedOne.lastName))))),
                React.createElement("div", { className: "flex items-center gap-2 " },
                    React.createElement("p", { className: "font-semibold text-orange-500 text-sm" }, "DETAILS"),
                    React.createElement(IconComponent_1["default"], { aside: true, icon: React.createElement(icons_1.BiDotsVertical, { className: "w-5 h-5 font-semibold text-blue-600" }), isClickable: true, onClick: function () {
                            setShowDelete(!showDelete);
                        } }),
                    showDelete && (React.createElement("div", { className: "absolute bg-gray-300  rounded-md overflow-hidden shadow-sm \r\n\t\t\t\t\t\t\tlg:-ml-6 lg:mt-32 right-12 md:mt-24 mt-20 " },
                        React.createElement("p", { className: " flex gap-2 transition-all duration-500 items-center cursor-pointer text-green-500 bg-green-100 hover:bg-green-300 font-semibold text-sm px-8 py-2", onClick: function () {
                                setEdit(true); // SO W E CAN ED IT INSTEAD OF VIEW!
                                setShowDelete(!showDelete); // CLOSE THE MENU!
                            } },
                            React.createElement(icons_1.BiEdit, { className: "w-5 h-5 text-green-500" }),
                            "Edit"),
                        React.createElement("p", { className: "flex gap-2 transition-all duration-500 items-center cursor-pointer text-red-500 bg-red-100 hover:bg-red-300 font-semibold text-sm px-8 py-2", onClick: function () {
                                deleteFunction(selectedOne._id); // DELETING SELECTED ID!
                                setShowDelete(!showDelete); // CLOSE THE MENU!
                            } },
                            React.createElement(icons_1.BiSolidTrash, { className: "w-5 h-5 text-red-500" }),
                            "Delete"),
                        React.createElement("p", { className: "flex gap-2 transition-all duration-300 items-center cursor-pointer text-gray-500 bg-gray-100 hover:bg-gray-300 font-semibold text-sm px-8 py-2", onClick: function () {
                                if (role) {
                                    // RIGHT NOW WE HAVE OPEN ROLE!!
                                    clearSelectedRole();
                                }
                                else {
                                    // ELSE WE OPEN ANY EMPLOYEE
                                    clearSelectedEmployee();
                                }
                                // CLEAR SELECTED ONE!
                                setShowDelete(!showDelete); // CLOSE THE MENU!
                            } },
                            React.createElement(icons_1.GrClearOption, { className: "w-5 h-5 text-gray-500" }),
                            "Clear"))))))));
}
exports["default"] = EditDeleteMenus;
