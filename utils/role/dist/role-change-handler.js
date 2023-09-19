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
exports.onChangeHandler = void 0;
// FUNCTION TO UPDATE STATES (-)!
exports.onChangeHandler = function (e, setRole, role) {
    var _a;
    //SPREADING PREVIOUS STATE BUT CHANGING CURRENT_TARGET!
    setRole(__assign(__assign({}, role), (_a = {}, _a[e.target.name] = e.target.value, _a)));
};
