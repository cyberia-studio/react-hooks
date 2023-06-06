"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEvents = void 0;
var react_1 = require("react");
var useEvents = function (type, callback, element, deps) {
    var handler = (0, react_1.useRef)(callback);
    (0, react_1.useEffect)(function () {
        if (!element)
            return;
        element.addEventListener(type, handler.current);
        return function () {
            return element.removeEventListener(type, handler.current);
        };
    }, deps);
};
exports.useEvents = useEvents;
