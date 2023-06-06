"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useObjectCallback = void 0;
var react_1 = require("react");
var deps_1 = require("./deps");
var useObjectCallback = function (effect, deps) { return (0, react_1.useCallback)(effect, (0, deps_1.stringify)(deps)); };
exports.useObjectCallback = useObjectCallback;
