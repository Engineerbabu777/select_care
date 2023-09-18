"use strict";
exports.__esModule = true;
var Input_1 = require("@/components/shared/Input");
var react_1 = require("react");
function UserModalBody(_a) {
    // MAY BE WE NEED REUSEABLE-COMPONENT FOT INPUTS AS WELL!
    var closeModal = _a.closeModal;
    return (react_1["default"].createElement("div", { className: "flex flex-col mx-2 my-4 gap-4" },
        react_1["default"].createElement(Input_1["default"], { label: "First Name", name: "firstName", placeholder: "Glenn", require: true, type: "text" }),
        react_1["default"].createElement(Input_1["default"], { label: "Last Name", name: "lastName", placeholder: "Maxwell", require: true, type: "text" }),
        react_1["default"].createElement(Input_1["default"], { label: "Email Address", name: "email", placeholder: "maxwell32@gmail.com", require: true, type: "email" })));
}
exports["default"] = UserModalBody;
