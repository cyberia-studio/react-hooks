"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRefEffect = void 0;
var react_1 = require("react");
var useRefEffect = function (effect, ref, deps) {
    return (0, react_1.useEffect)(function () {
        if (!Array.isArray(ref))
            return ref.current ? effect(ref.current) : undefined;
        else if (ref.every(function (r) { return r.current !== null; }))
            return effect(ref.map(function (r) { return r.current; }));
    }, deps);
};
exports.useRefEffect = useRefEffect;
