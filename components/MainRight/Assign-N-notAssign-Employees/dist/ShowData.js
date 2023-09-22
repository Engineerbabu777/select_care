"use client";
"use strict";
exports.__esModule = true;
function ShowData(_a) {
    var employees = _a.employees;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex h-full w-full bg-gray-50 flex-col mt-1 " }, employees.map(function (emp, ind) {
            var _a;
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { key: ind, className: " cursor-pointer flex justify-between hover:bg-gray-200 transition-all duration-300 items-center px-2 py-1 border-b border-gray-300" },
                    React.createElement("div", { className: "flex flex-col " },
                        React.createElement("p", { className: "font-semibold text-gray-700" }, emp === null || emp === void 0 ? void 0 :
                            emp.firstName,
                            " ", emp === null || emp === void 0 ? void 0 :
                            emp.lastName),
                        React.createElement("p", { className: "text-sm text-gray-400" }, emp === null || emp === void 0 ? void 0 : emp.email)),
                    React.createElement("div", { className: "" },
                        React.createElement("p", { className: "flex items-center gap-1" },
                            React.createElement("span", { className: "font-semibold hover:underline text-blue-500" }, ((_a = emp === null || emp === void 0 ? void 0 : emp.role) === null || _a === void 0 ? void 0 : _a.title) || "Nill"))))));
        }))));
}
exports["default"] = ShowData;
