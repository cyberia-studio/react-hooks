"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePromiseState = void 0;
var react_1 = require("react");
var usePromiseState = function (initialValue) {
    if (initialValue === void 0) { initialValue = undefined; }
    var _a = (0, react_1.useState)(initialValue), state = _a[0], setState = _a[1];
    var resolveRef = (0, react_1.useRef)(undefined);
    var set = (0, react_1.useCallback)(function (value) {
        setState(value);
        return new Promise(function (resolve) {
            resolveRef.current = resolve;
        });
    }, []);
    (0, react_1.useEffect)(function () {
        if (!resolveRef.current)
            return;
        resolveRef.current(state);
        resolveRef.current = undefined;
    }, [state]);
    return [state, set];
};
exports.usePromiseState = usePromiseState;
