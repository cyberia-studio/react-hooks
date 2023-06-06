"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOutside = void 0;
var events_1 = require("../events");
var contains = function (el, target) { return (el ? el.contains(target) : false); };
var useOutside = function (ref, callback, deps) {
    (0, events_1.useEvents)('click', function (event) {
        var target = event.target;
        if (!Array.isArray(ref))
            !contains(ref.current, target) && callback();
        else
            ref.every(function (r) { return !contains(r.current, target); }) && callback();
    }, document, deps);
};
exports.useOutside = useOutside;
