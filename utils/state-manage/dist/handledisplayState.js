"use strict";
exports.__esModule = true;
exports.updateState = void 0;
// UPDATING STATE FUNCTION FOR MAIN PART OF PAGE!
exports.updateState = function (isTrue, onClick) {
    // CHECKING IF ONCLICK AVAILABLE OR NOT!
    if (!isTrue)
        return; // RETURN IF BUTTON IS NOT CLICKABLE!
    // RUNNING THE PROVIDED FUNCTION!
    onClick();
};
