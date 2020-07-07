"use strict";
// colorItem interface:
// {
//     pos: val.pos,
//     color: val.color,
//     duration: 0,
//     nextIndex: (index + 1) >= colorList.length ? 0 : (index + 1),
//     currentRGB: {//当前RGB
//         r: 0,//十进制数字
//         g: 0,//十进制数字
//         b: 0,//十进制数字
//     },
//     directionRGB: {//目标RGB
//         r: 0,//十进制数字
//         g: 0,//十进制数字
//         b: 0,//十进制数字
//     },
//     step: {//RGB变化步长
//         r: 0,//rstepNum
//         g: 0,//gstepNum
//         b: 0//bstepNum
//     }
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// params
/**
 *
 * params
 * canvas, stepNum, width, height          direction
 * canvas   步数      canvas宽度  canvas高度  方向
 */
function ColorCalc(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.stepNum, stepNum = _c === void 0 ? 50 : _c, _d = _b.colorList, colorList = _d === void 0 ? [
        {
            color: '#ff0e0f',
            pos: 0 //位置
        }, {
            color: '#e09f0f',
            pos: 0.5
        }, {
            color: '#0e3f0f',
            pos: 1
        }
    ] : _d;
    // 计时器
    var timer = 0;
    // let  = config;//基本参数  colorList为长度为2的数组
    var destroy = function () {
        if (timer) {
            clearInterval(timer);
            timer = 0;
        }
    };
    var init = function () {
        destroy();
        //初始化
        colorList = colorList.map(function (val, index) {
            val = {
                pos: val.pos,
                color: val.color,
                nextIndex: index,
                currentRGB: getRGB(val.color),
                duration: 0,
                directionRGB: getRGB(val.color),
                step: getRGB(val.color),
            };
            val = __assign(__assign({}, val), getDirectionRGBAndStep(val));
            return val;
        });
    };
    ColorCalc.prototype.getColorList = function () {
        colorList.map(function (val, index) {
            var flag = false; //校验
            var key;
            for (key in val.currentRGB) {
                val.currentRGB[key] += val.step[key];
                val.currentRGB[key] = Math.round(val.currentRGB[key]);
                val.currentRGB[key] = val.currentRGB[key] > 0 ? val.currentRGB[key] : 0;
            }
            if (val.duration > stepNum) { //(val.step[key] < 0 && val.currentRGB[key] < val.directionRGB[key]) ||(val.step[key] > 0 && val.currentRGB[key] > val.directionRGB[key]) ||(val.currentRGB[key] == val.directionRGB[key] ) {//正在减小
                flag = true;
                val.duration = 0;
            }
            else {
                val.duration++;
            }
            if (flag) {
                // val.currentRGB = getRGB(colorList[val.nextIndex].color)
                getDirectionRGBAndStep(val);
            }
            var currentColor = getColor(val.currentRGB);
            if (index == 0) {
                //console.log(currentColor)
            }
            if (currentColor.length > 7) {
                console.log(currentColor);
            }
        });
        return colorList;
    };
    //从6位 16进制 色值 转换到10进制rbg
    var getRGB = function (color) {
        var rgb = { r: 0, g: 0, b: 0 };
        var index = 1; //计数 #00ff00 从1开始
        var key;
        for (key in rgb) {
            rgb[key] = parseInt(color.substring(index, index + 2), 16);
            index += 2;
        }
        return rgb;
    };
    var getColor = function (RGB) {
        var color = '#';
        var key;
        for (key in RGB) {
            RGB[key] = RGB[key] > 255 ? 255 : RGB[key];
            RGB[key] = RGB[key] < 0 ? 0 : RGB[key];
            var _tempValue = RGB[key].toString(16);
            color += _tempValue.length > 1 ? _tempValue : ('0' + _tempValue);
        }
        return color;
    };
    //计算步长
    var getStep = function (directionRGB, currentRGB) {
        var step = {
            r: 0,
            g: 0,
            b: 0
        };
        var index = 0;
        var key;
        for (key in step) {
            step[key] = (directionRGB[key] - currentRGB[key]) / stepNum;
            index++;
        }
        return step;
    };
    //获取下一个目标色值 和RGB步长
    var getDirectionRGBAndStep = function (val) {
        val.nextIndex++;
        if (val.nextIndex > colorList.length - 1) {
            val.nextIndex = 0;
        }
        val.directionRGB = getRGB(colorList[val.nextIndex].color);
        val.step = getStep(val.directionRGB, val.currentRGB);
        return val;
    };
    init();
    // console.log(getStep({ r: 249, g: 10, b: 102 }, { r: 49, g: 210, b: 2 }))
}
exports.default = ColorCalc;
