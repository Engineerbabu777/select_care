"use client";
"use strict";
exports.__esModule = true;
function TextArea(_a) {
    var onChange = _a.onChange, placeholder = _a.placeholder, label = _a.label, name = _a.name, require = _a.require;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: name, className: "text-md font-semibold text-gray-500 -mb-2" }, label),
        React.createElement("textarea", { className: "no-scroll px-2 py-1 h-36 rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-gray-700 w-full border border-blue-500", placeholder: placeholder, onChange: onChange, name: name, required: require })));
}
exports["default"] = TextArea;
