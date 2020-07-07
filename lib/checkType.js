"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkType(target, type) {
    return Object.prototype.toString.call(target) === "[object " + type + "]";
}
exports.default = checkType;
