"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Error(arg) {
    throw 'better-gradual:[ERROR] ' + arg;
}
function Warning(arg) {
    console.warn('better-gradual:[Warning] ' + arg);
}
function log(arg) {
    console.log('better-gradual:[ERROR] ' + arg);
}
exports.default = {
    Error: Error,
    Warning: Warning,
    log: log
};
