"use strict";
exports.__esModule = true;
exports.roleState = void 0;
var recoil_1 = require("recoil");
// INITIAL STATE!
var initialState = {
    loadingRoles: false,
    totalNumberOfRoles: 0,
    roles: []
};
// EXPORTING STATE!
exports.roleState = recoil_1.atom({
    "default": initialState,
    key: "ENGINEER_BABU_ASSIGNMENT_2_ROLE"
});
