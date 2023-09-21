"use strict";
exports.__esModule = true;
exports.employeeState = void 0;
var recoil_1 = require("recoil");
// INITIAL STATE!
var initialState = {
    loadingEmployees: false,
    totalNumberOfEmployee: 0,
    employees: [],
    selectedOne: null,
    assigned: [],
    nonAssigned: []
};
// EXPORTING STATE!
exports.employeeState = recoil_1.atom({
    "default": initialState,
    key: "ENGINEER_BABU_ASSIGNMENT_2_EMPLOYEE"
});
