/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/button.js":
/*!***************************!*\
  !*** ./example/button.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ \"./lib/index.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./example/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nlet btn = document.getElementById('btn');\nlet btn2 = document.getElementById('btn2');\n\nnew _lib__WEBPACK_IMPORTED_MODULE_0__[\"GradualButton\"]({\n    root: 'btn2'\n})\n\nlet timer\nbtn.addEventListener('mouseenter', e => {\n    bilibili();\n})\n\nbtn.addEventListener('mouseleave', e => {\n    killBilibili();\n})\n\nlet i = 0;\n\nfunction bilibili () {\n    timer = setInterval(() => {\n        if (i > 360) {\n            i = 0;\n        }\n        i += 10;\n        btn.style  = `--angle: ${i}deg;--borderW:3px;`;\n    }, 10)\n}\nfunction killBilibili() {\n    btn.style  = ``;\n    clearInterval(timer);\n    timer = null;\n}\n\n//# sourceURL=webpack:///./example/button.js?");

/***/ }),

/***/ "./example/index.js":
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ \"./example/button.js\");\n// import './canvas';\n\n\n//# sourceURL=webpack:///./example/index.js?");

/***/ }),

/***/ "./example/style.css":
/*!***************************!*\
  !*** ./example/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./example/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./example/style.css?");

/***/ }),

/***/ "./lib/button.js":
/*!***********************!*\
  !*** ./lib/button.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar checkType_1 = __importDefault(__webpack_require__(/*! ./checkType */ \"./lib/checkType.js\"));\nvar logger_1 = __importDefault(__webpack_require__(/*! ./logger */ \"./lib/logger.js\"));\nvar color_1 = __importDefault(__webpack_require__(/*! ./color */ \"./lib/color.js\"));\nfunction GradualButton(_a) {\n    var root = _a.root;\n    var dom;\n    if (checkType_1.default(root, 'String')) {\n        // if (!/#(.*?)/.test(root)) {\n        //     throw 'better-gradual:[ERROR] button.js 类型检查失败，请确认输入的是dom的id(#xx)。'\n        // }\n        dom = document.getElementById(root);\n        if (!dom) {\n            console.log(dom);\n            logger_1.default.Error('没有找到dom元素');\n        }\n    }\n    else {\n        dom = root;\n    }\n    var width = dom.clientWidth; // offsetWidth是视觉宽度\n    var height = dom.clientHeight;\n    var colorCalc = new color_1.default();\n    dom.setAttribute('style', \"\\n        background-image: linear-gradient(red, green);\\n    \");\n    console.log(width, height);\n}\nexports.default = GradualButton;\n\n\n//# sourceURL=webpack:///./lib/button.js?");

/***/ }),

/***/ "./lib/checkType.js":
/*!**************************!*\
  !*** ./lib/checkType.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction checkType(target, type) {\n    return Object.prototype.toString.call(target) === \"[object \" + type + \"]\";\n}\nexports.default = checkType;\n\n\n//# sourceURL=webpack:///./lib/checkType.js?");

/***/ }),

/***/ "./lib/color.js":
/*!**********************!*\
  !*** ./lib/color.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// colorItem interface:\n// {\n//     pos: val.pos,\n//     color: val.color,\n//     duration: 0,\n//     nextIndex: (index + 1) >= colorList.length ? 0 : (index + 1),\n//     currentRGB: {//当前RGB\n//         r: 0,//十进制数字\n//         g: 0,//十进制数字\n//         b: 0,//十进制数字\n//     },\n//     directionRGB: {//目标RGB\n//         r: 0,//十进制数字\n//         g: 0,//十进制数字\n//         b: 0,//十进制数字\n//     },\n//     step: {//RGB变化步长\n//         r: 0,//rstepNum\n//         g: 0,//gstepNum\n//         b: 0//bstepNum\n//     }\n// }\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// params\n/**\n *\n * params\n * canvas, stepNum, width, height          direction\n * canvas   步数      canvas宽度  canvas高度  方向\n */\nfunction ColorCalc(_a) {\n    var _b = _a === void 0 ? {} : _a, _c = _b.stepNum, stepNum = _c === void 0 ? 50 : _c, _d = _b.colorList, colorList = _d === void 0 ? [\n        {\n            color: '#ff0e0f',\n            pos: 0 //位置\n        }, {\n            color: '#e09f0f',\n            pos: 0.5\n        }, {\n            color: '#0e3f0f',\n            pos: 1\n        }\n    ] : _d;\n    // 计时器\n    var timer = 0;\n    // let  = config;//基本参数  colorList为长度为2的数组\n    var destroy = function () {\n        if (timer) {\n            clearInterval(timer);\n            timer = 0;\n        }\n    };\n    var init = function () {\n        destroy();\n        //初始化\n        colorList = colorList.map(function (val, index) {\n            val = {\n                pos: val.pos,\n                color: val.color,\n                nextIndex: index,\n                currentRGB: getRGB(val.color),\n                duration: 0,\n                directionRGB: getRGB(val.color),\n                step: getRGB(val.color),\n            };\n            val = __assign(__assign({}, val), getDirectionRGBAndStep(val));\n            return val;\n        });\n    };\n    ColorCalc.prototype.getColorList = function () {\n        colorList.map(function (val, index) {\n            var flag = false; //校验\n            var key;\n            for (key in val.currentRGB) {\n                val.currentRGB[key] += val.step[key];\n                val.currentRGB[key] = Math.round(val.currentRGB[key]);\n                val.currentRGB[key] = val.currentRGB[key] > 0 ? val.currentRGB[key] : 0;\n            }\n            if (val.duration > stepNum) { //(val.step[key] < 0 && val.currentRGB[key] < val.directionRGB[key]) ||(val.step[key] > 0 && val.currentRGB[key] > val.directionRGB[key]) ||(val.currentRGB[key] == val.directionRGB[key] ) {//正在减小\n                flag = true;\n                val.duration = 0;\n            }\n            else {\n                val.duration++;\n            }\n            if (flag) {\n                // val.currentRGB = getRGB(colorList[val.nextIndex].color)\n                getDirectionRGBAndStep(val);\n            }\n            var currentColor = getColor(val.currentRGB);\n            if (index == 0) {\n                //console.log(currentColor)\n            }\n            if (currentColor.length > 7) {\n                console.log(currentColor);\n            }\n        });\n        return colorList;\n    };\n    //从6位 16进制 色值 转换到10进制rbg\n    var getRGB = function (color) {\n        var rgb = { r: 0, g: 0, b: 0 };\n        var index = 1; //计数 #00ff00 从1开始\n        var key;\n        for (key in rgb) {\n            rgb[key] = parseInt(color.substring(index, index + 2), 16);\n            index += 2;\n        }\n        return rgb;\n    };\n    var getColor = function (RGB) {\n        var color = '#';\n        var key;\n        for (key in RGB) {\n            RGB[key] = RGB[key] > 255 ? 255 : RGB[key];\n            RGB[key] = RGB[key] < 0 ? 0 : RGB[key];\n            var _tempValue = RGB[key].toString(16);\n            color += _tempValue.length > 1 ? _tempValue : ('0' + _tempValue);\n        }\n        return color;\n    };\n    //计算步长\n    var getStep = function (directionRGB, currentRGB) {\n        var step = {\n            r: 0,\n            g: 0,\n            b: 0\n        };\n        var index = 0;\n        var key;\n        for (key in step) {\n            step[key] = (directionRGB[key] - currentRGB[key]) / stepNum;\n            index++;\n        }\n        return step;\n    };\n    //获取下一个目标色值 和RGB步长\n    var getDirectionRGBAndStep = function (val) {\n        val.nextIndex++;\n        if (val.nextIndex > colorList.length - 1) {\n            val.nextIndex = 0;\n        }\n        val.directionRGB = getRGB(colorList[val.nextIndex].color);\n        val.step = getStep(val.directionRGB, val.currentRGB);\n        return val;\n    };\n    init();\n    // console.log(getStep({ r: 249, g: 10, b: 102 }, { r: 49, g: 210, b: 2 }))\n}\nexports.default = ColorCalc;\n\n\n//# sourceURL=webpack:///./lib/color.js?");

/***/ }),

/***/ "./lib/gradual.js":
/*!************************!*\
  !*** ./lib/gradual.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// colorItem interface:\n// {\n//     pos: val.pos,\n//     color: val.color,\n//     duration: 0,\n//     nextIndex: (index + 1) >= colorList.length ? 0 : (index + 1),\n//     currentRGB: {//当前RGB\n//         r: 0,//十进制数字\n//         g: 0,//十进制数字\n//         b: 0,//十进制数字\n//     },\n//     directionRGB: {//目标RGB\n//         r: 0,//十进制数字\n//         g: 0,//十进制数字\n//         b: 0,//十进制数字\n//     },\n//     step: {//RGB变化步长\n//         r: 0,//rstepNum\n//         g: 0,//gstepNum\n//         b: 0//bstepNum\n//     }\n// }\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// params\n/**\n *\n * params\n * canvas, stepNum, width, height          direction\n * canvas   步数      canvas宽度  canvas高度  方向\n */\nfunction Gradual(_a) {\n    var canvasDom = _a.canvasDom, _b = _a.stepNum, stepNum = _b === void 0 ? 50 : _b, _c = _a.direction, direction = _c === void 0 ? 'row' : _c, width = _a.width, height = _a.height, _d = _a.colorList, colorList = _d === void 0 ? [\n        {\n            color: '#ff0e0f',\n            pos: 0 //位置\n        }, {\n            color: '#e09f0f',\n            pos: 0.5\n        }, {\n            color: '#0e3f0f',\n            pos: 1\n        }\n    ] : _d;\n    if (canvasDom === undefined) {\n        console.error('canvasDom is invaild.');\n        return;\n    }\n    // 计时器\n    var timer = 0;\n    // let  = config;//基本参数  colorList为长度为2的数组\n    var grd;\n    var canvas;\n    var destroy = function () {\n        if (timer) {\n            clearInterval(timer);\n            timer = 0;\n        }\n    };\n    var init = function () {\n        destroy();\n        //初始化\n        if (typeof canvasDom == 'string') {\n            //判断canvas类型\n            //此处进行转化\n            canvasDom = document.getElementById(canvasDom);\n        }\n        if (!width) {\n            width = canvasDom.width;\n        }\n        if (!height) {\n            height = canvasDom.height;\n        }\n        canvas = canvasDom.getContext('2d');\n        canvas.clearRect(0, 0, width, height);\n        if (direction == 'column') {\n            grd = canvas.createLinearGradient(0, 0, 0, height);\n        }\n        else {\n            grd = canvas.createLinearGradient(0, 0, width, 0);\n        }\n        colorList = colorList.map(function (val, index) {\n            grd.addColorStop(val.pos, val.color);\n            val = {\n                pos: val.pos,\n                color: val.color,\n                nextIndex: index,\n                currentRGB: getRGB(val.color),\n                duration: 0,\n                directionRGB: getRGB(val.color),\n                step: getRGB(val.color),\n            };\n            val = __assign(__assign({}, val), getDirectionRGBAndStep(val));\n            return val;\n        });\n        canvas.fillStyle = grd;\n        canvas.fillRect(0, 0, width, height);\n        timer = setInterval(function () {\n            changeCanvas();\n        }, 50);\n        function changeCanvas() {\n            canvas.clearRect(0, 0, width, height);\n            if (direction == 'column') {\n                grd = canvas.createLinearGradient(0, 0, 0, height);\n            }\n            else {\n                grd = canvas.createLinearGradient(0, 0, width, 0);\n            }\n            colorList.map(function (val, index) {\n                var flag = false; //校验\n                var key;\n                for (key in val.currentRGB) {\n                    val.currentRGB[key] += val.step[key];\n                    val.currentRGB[key] = Math.round(val.currentRGB[key]);\n                    val.currentRGB[key] = val.currentRGB[key] > 0 ? val.currentRGB[key] : 0;\n                }\n                if (val.duration > stepNum) { //(val.step[key] < 0 && val.currentRGB[key] < val.directionRGB[key]) ||(val.step[key] > 0 && val.currentRGB[key] > val.directionRGB[key]) ||(val.currentRGB[key] == val.directionRGB[key] ) {//正在减小\n                    flag = true;\n                    val.duration = 0;\n                }\n                else {\n                    val.duration++;\n                }\n                if (flag) {\n                    // val.currentRGB = getRGB(colorList[val.nextIndex].color)\n                    getDirectionRGBAndStep(val);\n                }\n                var currentColor = getColor(val.currentRGB);\n                if (index == 0) {\n                    //console.log(currentColor)\n                }\n                if (currentColor.length > 7) {\n                    console.log(currentColor);\n                }\n                grd.addColorStop(val.pos, currentColor);\n            });\n            canvas.fillStyle = grd;\n            canvas.fillRect(0, 0, width, height);\n            if (canvas.draw) {\n                canvas.draw();\n            }\n            // canvas.fillRect(0, 0, )\n        }\n    };\n    //从6位 16进制 色值 转换到10进制rbg\n    var getRGB = function (color) {\n        var rgb = { r: 0, g: 0, b: 0 };\n        var index = 1; //计数 #00ff00 从1开始\n        var key;\n        for (key in rgb) {\n            rgb[key] = parseInt(color.substring(index, index + 2), 16);\n            index += 2;\n        }\n        return rgb;\n    };\n    var getColor = function (RGB) {\n        var color = '#';\n        var key;\n        for (key in RGB) {\n            RGB[key] = RGB[key] > 255 ? 255 : RGB[key];\n            RGB[key] = RGB[key] < 0 ? 0 : RGB[key];\n            var _tempValue = RGB[key].toString(16);\n            color += _tempValue.length > 1 ? _tempValue : ('0' + _tempValue);\n        }\n        return color;\n    };\n    //计算步长\n    var getStep = function (directionRGB, currentRGB) {\n        var step = {\n            r: 0,\n            g: 0,\n            b: 0\n        };\n        var index = 0;\n        var key;\n        for (key in step) {\n            step[key] = (directionRGB[key] - currentRGB[key]) / stepNum;\n            index++;\n        }\n        return step;\n    };\n    //获取下一个目标色值 和RGB步长\n    var getDirectionRGBAndStep = function (val) {\n        val.nextIndex++;\n        if (val.nextIndex > colorList.length - 1) {\n            val.nextIndex = 0;\n        }\n        val.directionRGB = getRGB(colorList[val.nextIndex].color);\n        val.step = getStep(val.directionRGB, val.currentRGB);\n        return val;\n    };\n    init();\n    // console.log(getStep({ r: 249, g: 10, b: 102 }, { r: 49, g: 210, b: 2 }))\n}\nexports.default = Gradual;\n\n\n//# sourceURL=webpack:///./lib/gradual.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GradualButton = exports.Gradual = void 0;\nvar gradual_1 = __importDefault(__webpack_require__(/*! ./gradual */ \"./lib/gradual.js\"));\nexports.Gradual = gradual_1.default;\nvar button_1 = __importDefault(__webpack_require__(/*! ./button */ \"./lib/button.js\"));\nexports.GradualButton = button_1.default;\n\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ }),

/***/ "./lib/logger.js":
/*!***********************!*\
  !*** ./lib/logger.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction Error(arg) {\n    throw 'better-gradual:[ERROR] ' + arg;\n}\nfunction Warning(arg) {\n    console.warn('better-gradual:[Warning] ' + arg);\n}\nfunction log(arg) {\n    console.log('better-gradual:[ERROR] ' + arg);\n}\nexports.default = {\n    Error: Error,\n    Warning: Warning,\n    log: log\n};\n\n\n//# sourceURL=webpack:///./lib/logger.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./example/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./example/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".canvas {\\n    height: 50vh;\\n    width: 100vw;\\n    overflow: hidden;\\n}\\n\\nbody {\\n    margin: 0;\\n}\\n\\n.btn{\\n    height: 200px;\\n    width: 200px;\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    box-sizing: border-box;\\n    --color: #ff0000;\\n    --color2: #0000ff;\\n    --borderW: 2px;\\n    --angle: 25deg;\\n    --gradientL: 30%;\\n}\\n.btn::after, .btn::before {\\n    content: \\\"\\\";\\n    position: absolute;\\n    height: 100%;\\n    width: 100%;\\n}\\n.btn::after {\\n    background-image: linear-gradient(var(--angle), var(--color2) 0, var(--color2) var(--borderW), transparent var(--gradientL), transparent calc(100% - var(--gradientL)), var(--color) calc(100% - var(--borderW)), var(--color) 100%);\\n    -webkit-mask-image: linear-gradient(#000 0, transparent var(--borderW), transparent calc(100% - var(--borderW)), #000 100%), \\n    linear-gradient(90deg, #000 0, transparent var(--borderW), transparent calc(100% - var(--borderW)), #000 100%);\\n}\\n\\n\\n/* .btn::before {\\n    transform: scale(1.2);\\n\\n    background-image: radial-gradient(circle at 15% 85%, red 0, transparent 50%), radial-gradient(circle at 100% 0, blue 0, transparent 40%);\\n    -webkit-mask-image: linear-gradient(transparent 0, #000 calc(10% - 1px), transparent calc(10% - 1px), transparent calc(90% + 1px),  #000 calc(90% + 1px), transparent 100%), linear-gradient(90deg, transparent 0, #000 calc(10% - 1px),transparent calc(10% - 1px), transparent calc(90% + 1px),  #000 calc(90% + 1px), transparent 100%);\\n} */\\n.corn {\\n    position: absolute;\\n    height: 100%;\\n    width: 100%;\\n    top: 0;\\n    left: 0;\\n    box-sizing: border-box;\\n}\\n.corn::before, .corn::after {\\n    content: '';\\n    box-sizing: border-box;\\n    position: absolute;\\n    height: 20%;\\n    width: 20%;\\n    background-color: #fff;\\n    /* border: 1px solid #000; */\\n}\\n.corn::before {\\n    top: calc(100% - 1px);\\n    left: calc(-20% + 1px);\\n    background-image: radial-gradient(circle at calc(100% + 1px) -1px, var(--color), transparent 40%);\\n}\\n.corn::after {\\n    top: calc(-20% + 1px);\\n    right: calc(-20% + 1px);\\n    background-image: radial-gradient(circle at -1px calc(100% + 1px), var(--color2), transparent 40%);\\n}\\n\\n\\n.btn2 {\\n    height: 100px;\\n    width: 100px;\\n    border: 1px solid #000;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./example/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });