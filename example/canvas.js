// 第一步 引入Gradual
import {Gradual} from '../lib/index'
import './style.css'

let root = document.createElement('div');
// 第二步创建一个canvas
let canvas = document.createElement('canvas');
root.appendChild(canvas);
canvas.className = 'canvas';

// 第三步 实例化 Gradual 实现canvas渐变
new Gradual({
    canvasDom: canvas,// canvas的dom或者canvas的id
    stepNum: 100,// 渐变步长，数值越大变化越慢
    direction: 'row',// 渐变方向
    colorList: [// 颜色列表
        {
            color: '#ff0000',
            pos: 0
        }, {
            color: '#00ff00',
            pos: .5
        }, {
            color: '#0000ff',
            pos: 1
        }
    ]
})


document.body.appendChild(root);
