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
exports.onChangeHandlerEdit = void 0;
var react_hot_toast_1 = require("react-hot-toast");
// INSTEAD OF PUTTING INLINE/IN-COMPONENT WE DO THIS! THAT WILL INCREASE (READABILITY OF CODE)!
exports.onChangeHandlerEdit = function (e, setEmployee, employee, edit) {
    // // console.log('VIEWING-> ',e?.target?.name, e?.target.value, employee.);
    // console.log('VALUE->',e.target.name,typeof(e.target.value));
    var _a, _b;
    // CAN'T EDIT!
    if (!edit) {
        react_hot_toast_1["default"]("You are in a viewing mode!", {
            icon: "👏",
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff"
            }
        });
        return;
    }
    // CAN EDIT!
    if (e.target.name === "role" && e.target.value === "") {
        setEmployee(__assign(__assign({}, employee), { selectedOne: __assign(__assign({}, employee.selectedOne), (_a = {}, _a[e.target.name] = null, _a)) }));
        return;
    }
    setEmployee(__assign(__assign({}, employee), { selectedOne: __assign(__assign({}, employee.selectedOne), (_b = {}, _b[e.target.name] = e.target.value, _b)) }));
};
