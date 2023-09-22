'use client';
"use strict";
exports.__esModule = true;
var recoil_1 = require("recoil");
var employeeState_1 = require("@/recoil/employeeState");
var roleState_1 = require("@/recoil/roleState");
var react_1 = require("react");
var role_hooks_1 = require("@/hooks/role.hooks");
var CardHeading_1 = require("../EmployeeDetails/CardHeading");
var ActionButtons_1 = require("../EmployeeDetails/ActionButtons");
var SelectAny_1 = require("@/components/shared/SelectAny");
var Fields_1 = require("./Fields");
function RoleDetail(_a) {
    var _b = recoil_1.useRecoilState(employeeState_1.employeeState), employee = _b[0], setEmployee = _b[1];
    var _c = recoil_1.useRecoilState(roleState_1.roleState), roles = _c[0], setRoles = _c[1];
    var _d = role_hooks_1["default"](), editRole = _d.editRole, deleteRole = _d.deleteRole;
    // MAKE THIS TO ONE STATE!
    var _e = react_1.useState(false), showDelete = _e[0], setShowDelete = _e[1]; // THIS WILL SHOW DELETE/EDIT MENU!
    var _f = react_1.useState(false), edit = _f[0], setEdit = _f[1]; // SHOW WILL SHOW VIEW/EDIT STATE OF ROLE!
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "h-full w-full overflow-scroll no-scroll" },
            !roles.selectedRole && (React.createElement(SelectAny_1["default"], { title: "Select Role", desc: "Select any role to see details here" })),
            (roles === null || roles === void 0 ? void 0 : roles.selectedRole) && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "h-full w-full flex flex-col " },
                    React.createElement(CardHeading_1["default"], { role: roles, roleView: true, employee: employee, edit: edit, setEdit: setEdit, setShowDelete: setShowDelete, showDelete: showDelete, deleteFunction: deleteRole }),
                    React.createElement("div", { className: "p-3 mt-2" },
                        React.createElement("h2", { className: "font-semibold text-sm text-[#8e8e8e]" }, "ROLE DETAILS"),
                        React.createElement("div", { className: "border-t border-gray-300" })),
                    React.createElement("div", { className: "p-4 flex flex-col gap-8 flex-1" },
                        React.createElement(Fields_1["default"], { roles: roles, setRoles: setRoles, edit: edit }),
                        React.createElement(ActionButtons_1["default"], { editRole: editRole, roleMode: true, employee: employee, setEmployee: setEmployee, setEdit: setEdit, edit: edit, editEmployee: editRole, setRole: setRoles, role: roles }))))))));
}
exports["default"] = RoleDetail;
