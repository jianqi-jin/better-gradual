# better-gradual
---------------
兼容pc、wap、原生小程序、Taro框架等的基于canvas炫酷的流式渐变(canvas flow gradient for PC、WAP、minProgram)
## 怎么实现的(HOW)
通过实时计算RGB三原色，为canvas设置渐变。    
通过setInterval来不断刷新。
## 例子example
首先拉取代码、安装依赖和运行example
```bash
git clone https://github.com/2359634711/better-gradual
cd better-gradual
npm run example
```
然后打开 example/dist/index.html查看运行结果，推荐使用liveReload
example例子代码可以修改index.js查看结果。

![](./img/img.gif)

## 安装
```js
npm i better-gradual
```
## 引入
```js
import Gradual from 'better-gradual'
```
## 使用

### PC或WAP页面
```js
// 第一步 引入Gradual
import Gradual from 'better-gradual'
let root = document.createElement('div');
// 第二步创建一个canvas
let canvas = document.createElement('canvas');
root.appendChild(canvas);
canvas.className = 'canvas';

// 第三步 实例化 Gradual 实现canvas渐变
let gradual = new Gradual({
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

```

### Taro框架
```js
  componentDidMount() {
    const canvas = Taro.createCanvasContext('canvas', this)
    new GRADUAL({
      canvas: canvas,//canvas实例
      width: 800,//canvas宽度
      direction: 'column',//渐变方向
      height: 2000,//canvas高度
      stepNum: 100,//渐变步长
      colorList: [//渐变颜色
        {
          color: '#ff0e0f',//色值
          pos: 0//位置
        },
        {
          color: '#e09f0f',
          pos: 0.5
        },
        {
          color: '#0e3f0f',
          pos: 1
        }
      ]
    })
  }
  render() {
    return (
      <View>
        <Canvas className='canvas' canvasId='canvas'>
          <CoverView className='view'>hello world</CoverView>
        </Canvas>
      </View>
    )
  }
```
## API
> 通过 `new GRADUAL([config])`来对渐变进行实例化

### config参数
|键|类型|必填|默认|例子|说明|
|-|-|-|-|-|-|
|canvas|canvas|true|
|width|int|true|
|height|int|true|
|direction|string|false|'row'|'row'或者'column'|渐变方向|
|stepNum|int|false|50|50或者10|步长，越大变化越慢|
|colorList|obj[]|true|无|[{color: '#ff00ff', pos: 1},{color: '#4ff0ef', pos: 0}]|颜色列表|


### 版本 v1.2.0
- 兼容pc和wap端canvas
- 提供example使用案例
### 版本 v1.1.1
- 新增typescript支持。
### 版本 v1.0.0
- 初始化项目
## TODO
- 添加一些可用组件
- 完善渐变方式
- 完善报错机制