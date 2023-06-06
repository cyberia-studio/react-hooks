"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTrustedPromise = void 0;
var react_1 = require("react");
var useTrustedPromise = function (initialValue, initialTrust) {
    if (initialValue === void 0) { initialValue = undefined; }
    if (initialTrust === void 0) { initialTrust = true; }
    var _a = (0, react_1.useState)({ value: initialValue, isTrusted: initialTrust }), state = _a[0], setState = _a[1];
    var resolveRef = (0, react_1.useRef)(undefined);
    var set = (0, react_1.useCallback)(function (value, isTrusted) {
        if (isTrusted === void 0) { isTrusted = true; }
        setState(function (prev) { return ({
            value: value instanceof Function ? value(prev.value) : value,
            isTrusted: isTrusted,
        }); });
        return new Promise(function (resolve) {
            resolveRef.current = resolve;
        });
    }, []);
    (0, react_1.useEffect)(function () {
        if (!resolveRef.current)
            return;
        resolveRef.current(state.value);
        resolveRef.current = undefined;
    }, [state]);
    return [state.value, set, state.isTrusted];
};
exports.useTrustedPromise = useTrustedPromise;
