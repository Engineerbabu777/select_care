"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var CloseButton_1 = require("@/components/shared/CloseButton");
var Input_1 = require("@/components/shared/Input");
var SaveButton_1 = require("@/components/shared/SaveButton");
var react_1 = require("react");
function UserModalBody(_a) {
    var closeModal = _a.closeModal;
    // STATES!
    var _b = react_1.useState({
        firstName: "",
        lastName: "",
        email: "",
        role: ""
    }), user = _b[0], setUser = _b[1];
    // FUNCTION TO UPDATE STATES (MOVE THIS TO UTILS)!
    var onChangeHandler = function (e) {
        var _a;
        //SPREADING PREVIOUS STATE BUT CHANGING CURRENT_TARGET!
        setUser(__assign(__assign({}, user), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    // SUBMIT HANDLER!
    var onSubmitHandler = function () {
        // VALIDATIONS!
        // LOGIC!
    };
    return (react_1["default"].createElement("div", { className: "flex flex-col mx-2 my-4 gap-4" },
        react_1["default"].createElement(Input_1["default"], { label: "First Name", name: "firstName", placeholder: "Glenn", require: true, type: "text", onChange: onChangeHandler }),
        react_1["default"].createElement(Input_1["default"], { label: "Last Name", name: "lastName", placeholder: "Maxwell", require: true, onChange: onChangeHandler, type: "text" }),
        react_1["default"].createElement(Input_1["default"], { label: "Email Address", name: "email", placeholder: "maxwell32@gmail.com", require: true, type: "email", onChange: onChangeHandler }),
        react_1["default"].createElement("div", { className: "flex items-center w-full mt-6 gap-2" },
            react_1["default"].createElement(CloseButton_1["default"], { onClick: closeModal }),
            react_1["default"].createElement(SaveButton_1["default"], { onClick: function () {
                    onSubmitHandler();
                } }))));
}
exports["default"] = UserModalBody;
