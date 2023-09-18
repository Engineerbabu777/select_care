"use strict";
exports.__esModule = true;
function Input(_a) {
    var label = _a.label, name = _a.name, placeholder = _a.placeholder, type = _a.type, _b = _a.require, require = _b === void 0 ? false : _b;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: name, className: "text-md font-semibold text-gray-500 -mb-2" }, label),
        React.createElement("input", { required: require, id: name, type: type, name: name, placeholder: placeholder, className: "px-2 py-1 rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400 text-gray-700 w-full border border-green-500" })));
}
exports["default"] = Input;
