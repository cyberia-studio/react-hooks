"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTrustedState = void 0;
var react_1 = require("react");
var useTrustedState = function (initialValue, initialTrust) {
    if (initialValue === void 0) { initialValue = undefined; }
    if (initialTrust === void 0) { initialTrust = true; }
    var _a = (0, react_1.useState)({ value: initialValue, isTrusted: initialTrust }), state = _a[0], setState = _a[1];
    var set = function (value, isTrusted) {
        if (isTrusted === void 0) { isTrusted = true; }
        return setState(function (prev) { return ({
            value: value instanceof Function ? value(prev.value) : value,
            isTrusted: isTrusted,
        }); });
    };
    return [state.value, set, state.isTrusted];
};
exports.useTrustedState = useTrustedState;
