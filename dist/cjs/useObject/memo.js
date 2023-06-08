"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useObjectMemo = void 0;
var react_1 = require("react");
var deps_1 = require("./deps");
var useObjectMemo = function (factory, deps) {
    return (0, react_1.useMemo)(factory, deps ? [(0, deps_1.stringify)(deps)] : undefined);
};
exports.useObjectMemo = useObjectMemo;
