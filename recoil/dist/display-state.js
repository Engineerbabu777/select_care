"use strict";
exports.__esModule = true;
exports.displayStateAtom = exports.displayState = void 0;
var recoil_1 = require("recoil");
exports.displayState = {
    display: 'USER'
};
exports.displayStateAtom = recoil_1["default"].atom({
    key: 'displayState123',
    "default": exports.displayState
});
