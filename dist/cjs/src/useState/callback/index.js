"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCallbackState = void 0;
var react_1 = require("react");
var useCallbackState = function (initialValue) {
    if (initialValue === void 0) { initialValue = undefined; }
    var _a = (0, react_1.useState)(initialValue), state = _a[0], setState = _a[1];
    var callbackRef = (0, react_1.useRef)(undefined);
    var set = (0, react_1.useCallback)(function (value, callback) {
        setState(value);
        callbackRef.current = callback;
    }, []);
    (0, react_1.useEffect)(function () {
        if (!callbackRef.current)
            return;
        callbackRef.current(state);
        callbackRef.current = undefined;
    }, [state]);
    return [state, set];
};
exports.useCallbackState = useCallbackState;
