function Error(arg: string) {
    throw 'better-gradual:[ERROR] ' + arg;
}
function Warning(arg: string) {
    console.warn('better-gradual:[Warning] ' + arg);
}
function log(arg: string) {
    console.log('better-gradual:[ERROR] ' + arg);
}
export default {
    Error,
    Warning,
    log
}