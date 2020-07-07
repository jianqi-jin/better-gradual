
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

interface IConfig {
    stepNum: number,
    colorList: IColorList
}
type IRgb = {
    r: number,
    g: number,
    b: number
}
type IRgbKey = keyof IRgb;
type IColorList = IColorItem[]
interface IColorItem {
    color: string;
    pos: number,
    duration: number,
    nextIndex: number,
    currentRGB: IRgb,
    directionRGB: IRgb,
    step: IRgb
}
interface IColorCalc {
    getColorList: () => IColorList
}
// params
/**
 * 
 * params
 * canvas, stepNum, width, height          direction
 * canvas   步数      canvas宽度  canvas高度  方向
 */

function ColorCalc({
    stepNum = 50,
    colorList = [//渐变颜色
        {
            color: '#ff0e0f',//色值
            pos: 0//位置
        }, {
            color: '#e09f0f',
            pos: 0.5
        }, {
            color: '#0e3f0f',
            pos: 1
        }
    ] as IColorList} = {}) {
    // 计时器
    let timer: number = 0;
    // let  = config;//基本参数  colorList为长度为2的数组
    const destroy = () => {
        if (timer) {
            clearInterval(timer);
            timer = 0;
        }
    }
    const init = () => {
        destroy();
        //初始化
        colorList = colorList.map((val, index) => {
            val = {
                pos: val.pos,
                color: val.color,
                nextIndex: index,
                currentRGB: getRGB(val.color),
                duration: 0,
                directionRGB: getRGB(val.color),
                step: getRGB(val.color),
            }
            val = {
                ...val,
                ...getDirectionRGBAndStep(val)
            }

            return val
        })
        

    }
    ColorCalc.prototype.getColorList = function() {
        colorList.map((val, index) => {
            let flag = false;//校验
            let key: IRgbKey;
            for (key in val.currentRGB) {
                val.currentRGB[key] += val.step[key]
                val.currentRGB[key] = Math.round(val.currentRGB[key])
                val.currentRGB[key] = val.currentRGB[key] > 0 ? val.currentRGB[key] : 0

            }
            if (val.duration > stepNum) {//(val.step[key] < 0 && val.currentRGB[key] < val.directionRGB[key]) ||(val.step[key] > 0 && val.currentRGB[key] > val.directionRGB[key]) ||(val.currentRGB[key] == val.directionRGB[key] ) {//正在减小
                flag = true;
                val.duration = 0
            } else {
                val.duration++
            }
            if (flag) {
                // val.currentRGB = getRGB(colorList[val.nextIndex].color)
                getDirectionRGBAndStep(val)
            }
            let currentColor = getColor(val.currentRGB);
            if (index == 0) {
                //console.log(currentColor)
            }

            if (currentColor.length > 7) {
                console.log(currentColor)
            }
        })
        return colorList;
    }

    //从6位 16进制 色值 转换到10进制rbg
    const getRGB = (color: string) => {
        let rgb = { r: 0, g: 0, b: 0 };
        let index = 1;//计数 #00ff00 从1开始
        let key: IRgbKey;
        for (key in rgb) {
            rgb[key] = parseInt(color.substring(index, index + 2), 16);
            index += 2;
        }
        return rgb;
    }

    const getColor = (RGB: IRgb) => {
        let color = '#'
        let key: IRgbKey;
        for (key in RGB) {
            RGB[key] = RGB[key] > 255 ? 255 : RGB[key]
            RGB[key] = RGB[key] < 0 ? 0 : RGB[key]
            let _tempValue = RGB[key].toString(16);
            color += _tempValue.length > 1 ? _tempValue : ('0' + _tempValue)
        }
        return color;
    }

    //计算步长
    const getStep = (directionRGB: IRgb, currentRGB: IRgb) => {
        let step = {
            r: 0,
            g: 0,
            b: 0
        }
        let index = 0;
        let key: IRgbKey;
        for (key in step) {
            step[key] = (directionRGB[key] - currentRGB[key]) / stepNum

            index++;
        }

        return step;
    }

    //获取下一个目标色值 和RGB步长
    const getDirectionRGBAndStep = (val: IColorItem) => {
        val.nextIndex++
        if (val.nextIndex > colorList.length - 1) {
            val.nextIndex = 0
        }
        val.directionRGB = getRGB(colorList[val.nextIndex].color);
        val.step = getStep(val.directionRGB, val.currentRGB)
        return val;
    }



    init()
    // console.log(getStep({ r: 249, g: 10, b: 102 }, { r: 49, g: 210, b: 2 }))
}

export default ColorCalc