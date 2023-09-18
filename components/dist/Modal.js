"use strict";
exports.__esModule = true;
function Modal(_a) {
    var showModal = _a.showModal, header = _a.header, body = _a.body;
    return (React.createElement(React.Fragment, null, showModal && (React.createElement("section", { className: "fixed inset-0 bg-red-900/20 flex items-center justify-center" },
        React.createElement("div", { className: "w-full h-full md:w-3/6 lg:w-2/5 xl:w-2/6 flex items-center justify-center " },
            React.createElement("div", { className: "rounded-lg flex flex-col bg-white w-full overflow-hidden" },
                React.createElement("div", { className: "py-2 px-2 border-b text-lg font-semibold" }, header),
                React.createElement("div", { className: "mt-2" }, body)))))));
}
exports["default"] = Modal;
