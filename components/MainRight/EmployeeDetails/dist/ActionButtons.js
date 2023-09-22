"use client";
"use strict";
exports.__esModule = true;
var reset_all_fields_1 = require("@/utils/reset-all-fields");
function ActionButtons(_a) {
    var setEmployee = _a.setEmployee, employee = _a.employee, edit = _a.edit, setEdit = _a.setEdit, editEmployee = _a.editEmployee, _b = _a.roleMode, roleMode = _b === void 0 ? false : _b, setRole = _a.setRole, role = _a.role, editRole = _a.editRole;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex w-full h-full justify-between items-end" },
            React.createElement("div", { className: "flex justify-between items-center w-full" },
                React.createElement("button", { className: " text-blue-500 bg-blue-100 hover:bg-blue-200 uppercase font-semibold rounded-full tracking-[0.08rem] px-4 py-1", type: "button", onClick: function () {
                        reset_all_fields_1.reset(roleMode, role, setRole, employee, setEdit, setEmployee);
                    } }, "Reset"),
                React.createElement("button", { className: "rounded-full font-semibold text-green-500 bg-green-100 hover:bg-green-200 tracking-[0.08rem] px-4 py-1", type: "button", onClick: function () {
                        if (roleMode) {
                            editRole();
                        }
                        editEmployee();
                        setEdit(false);
                    } }, "Save")))));
}
exports["default"] = ActionButtons;
