"use strict";
exports.__esModule = true;
function TestModal(_a) {
    var showModal = _a.showModal, closeModal = _a.closeModal;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "fixed inset-0 bg-red-900/20 flex items-center justify-center" },
            React.createElement("div", { className: "w-full h-full md:w-3/6 lg:w-2/5 xl:w-2/6 flex items-center justify-center " },
                React.createElement("div", { className: "rounded-lg flex flex-col bg-white w-full" },
                    React.createElement("p", null, "header"),
                    React.createElement("p", null, "body"),
                    React.createElement("p", null, "footer1"))))));
}
exports["default"] = TestModal;
