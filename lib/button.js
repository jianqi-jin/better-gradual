"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkType_1 = __importDefault(require("./checkType"));
var logger_1 = __importDefault(require("./logger"));
var color_1 = __importDefault(require("./color"));
function GradualButton(_a) {
    var root = _a.root;
    var dom;
    if (checkType_1.default(root, 'String')) {
        // if (!/#(.*?)/.test(root)) {
        //     throw 'better-gradual:[ERROR] button.js 类型检查失败，请确认输入的是dom的id(#xx)。'
        // }
        dom = document.getElementById(root);
        if (!dom) {
            console.log(dom);
            logger_1.default.Error('没有找到dom元素');
        }
    }
    else {
        dom = root;
    }
    var width = dom.clientWidth; // offsetWidth是视觉宽度
    var height = dom.clientHeight;
    var colorCalc = new color_1.default();
    dom.setAttribute('style', "\n        background-image: linear-gradient(red, green);\n    ");
    console.log(width, height);
}
exports.default = GradualButton;
