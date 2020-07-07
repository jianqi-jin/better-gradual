export default function checkType(target: any, type: string) {
    return Object.prototype.toString.call(target) === `[object ${type}]`;
}