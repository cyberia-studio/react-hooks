"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRefReady = void 0;
var react_1 = require("react");
var react_2 = __importDefault(require("react"));
var CustomRef = (function () {
    function CustomRef(value, callback) {
        if (value === void 0) { value = null; }
        this.current = value;
        this.callback = callback;
        this.set = this.set.bind(this);
        return this;
    }
    CustomRef.prototype.set = function (ref) {
        if (ref === null || ref === undefined)
            return;
        this.current = ref;
        this.callback();
    };
    return CustomRef;
}());
var useRefReady = function (callback, deps) {
    if (deps === void 0) { deps = []; }
    var _a = (0, react_1.useState)(false), isReady = _a[0], setReady = _a[1];
    var callbackRef = react_2.default.useRef(undefined);
    var localRef = (0, react_1.useMemo)(function () { return new CustomRef(null, function () { return setReady(true); }); }, []);
    (0, react_1.useEffect)(function () {
        if (callbackRef.current === null || !callback)
            return;
        callbackRef.current = callback;
        if (!isReady || localRef.current === null)
            return;
        var cb = callbackRef.current;
        callbackRef.current = null;
        return cb(localRef.current);
    }, __spreadArray([isReady], deps, true));
    return localRef;
};
exports.useRefReady = useRefReady;
