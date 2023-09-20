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
// FUNCTION TO UPDATE STATES (MOVE THIS TO UTILS)!
exports.onChangeHandler = function (e, setUser, user) {
    var _a;
    //SPREADING PREVIOUS STATE BUT CHANGING CURRENT_TARGET!
    setUser(__assign(__assign({}, user), (_a = {}, _a[e.target.name] = e.target.value, _a)));
};
