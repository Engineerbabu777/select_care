"use strict";
exports.__esModule = true;
exports.displayStateAtom = exports.displayState = void 0;
var recoil_1 = require("recoil");
exports.displayState = {
    display: 'USER',
    right: ''
};
exports.displayStateAtom = recoil_1["default"].atom({
    key: 'ENGINEER_BABU_ASSIGNMENT_2_DISPLAY',
    "default": exports.displayState
});
