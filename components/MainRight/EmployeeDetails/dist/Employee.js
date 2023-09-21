"use strict";
exports.__esModule = true;
var employeeState_1 = require("@/recoil/employeeState");
var roleState_1 = require("@/recoil/roleState");
var recoil_1 = require("recoil");
var react_1 = require("react");
var employee_hooks_1 = require("@/hooks/employee.hooks");
var edit_view_change_handler_1 = require("@/utils/user/edit-view-change-handler");
var CardHeading_1 = require("./CardHeading");
var EmployeeInputs_1 = require("./EmployeeInputs");
var ActionButtons_1 = require("./ActionButtons");
function EmployeeDetail() {
    var _a, _b;
    var _c = recoil_1.useRecoilState(employeeState_1.employeeState), employee = _c[0], setEmployee = _c[1];
    var _d = recoil_1.useRecoilState(roleState_1.roleState), roles = _d[0], setRoles = _d[1];
    var _e = employee_hooks_1["default"](), deleteEmployee = _e.deleteEmployee, editEmployee = _e.editEmployee;
    // MAKE THIS TO ONE STATE!
    var _f = react_1.useState(false), showDelete = _f[0], setShowDelete = _f[1]; // THIS WILL SHOW DELETE/EDIT MENU!
    var _g = react_1.useState(false), edit = _g[0], setEdit = _g[1]; // SHOW WILL SHOW VIEW/EDIT STATE OF EMPLOYEE!
    // ONCHANGE HANDLER FUNCTION!
    var onChangeData = function (e) {
        edit_view_change_handler_1.onChangeHandlerEdit(e, setEmployee, employee, edit);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(CardHeading_1["default"], { employee: employee, edit: edit, setEdit: setEdit, setShowDelete: setShowDelete, showDelete: showDelete }),
        (employee === null || employee === void 0 ? void 0 : employee.selectedOne) && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "h-full w-full " },
                React.createElement(CardHeading_1["default"], { single: true, employee: employee, edit: edit, setEdit: setEdit, setShowDelete: setShowDelete, showDelete: showDelete, deleteEmployee: deleteEmployee }),
                React.createElement("div", { className: "p-3 mt-2" },
                    React.createElement("h2", { className: "font-semibold text-sm text-[#8e8e8e]" }, "USER DETAILS"),
                    React.createElement("div", { className: "border-t border-gray-300" })),
                React.createElement("div", { className: "p-4 flex flex-col gap-8" },
                    React.createElement(EmployeeInputs_1["default"], { onChangeData: onChangeData, employee: employee }),
                    React.createElement("div", { className: "flex flex-col gap-1" },
                        React.createElement("label", { className: "text-gray-600 text-sm", htmlFor: "role" }, "Active Role ?"),
                        React.createElement("select", { value: (_a = employee.selectedOne.role) === null || _a === void 0 ? void 0 : _a._id, onChange: onChangeData, name: "role", id: "role", className: "cursor-pointer overflow-auto text-gray-500 font-medium text-sm border-b-2 focus:ring-b-2 focus:ring-gray-500 border-gray-300 focus:border-gray-400 focus:border-b-2 outline-none focus:outline-none py-1 " },
                            React.createElement("option", { value: "", className: "bg-gray-100 hover:bg-400 text-black hover:text-gray-700" }, "No-Role"),
                            (roles === null || roles === void 0 ? void 0 : roles.roles.length) > 0 && ((_b = roles === null || roles === void 0 ? void 0 : roles.roles) === null || _b === void 0 ? void 0 : _b.map(function (r) { return (React.createElement(React.Fragment, null,
                                React.createElement("option", { value: r === null || r === void 0 ? void 0 : r._id, className: " bg-gray-100 hover:bg-400 text-black hover:text-gray-700" }, r === null || r === void 0 ? void 0 : r.title))); })))),
                    React.createElement(ActionButtons_1["default"], { employee: employee, setEmployee: setEmployee, setEdit: setEdit, edit: edit, editEmployee: editEmployee })))))));
}
exports["default"] = EmployeeDetail;
