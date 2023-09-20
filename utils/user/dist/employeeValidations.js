"use strict";
exports.__esModule = true;
exports.employeeValidation = void 0;
exports.employeeValidation = function (first, last, email) {
    // CHECK IF USER IS EMPTY!
    if (first === "" || last === "" || email === "") {
        throw new Error("Please fill in all fields!");
    }
    // CHECK IF FIRST AND LAST NAME ARE LONG ENOUGH
    if (first.length < 2 || last.length < 2) {
        throw new Error("First and Last name must be at least 2 characters long");
    }
    // CHECK IF EMAIL IS NOT HERE!
    if (!email) {
        throw new Error("Email is required!");
    }
    return true;
};
