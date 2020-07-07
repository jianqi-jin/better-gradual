import checkType from './checkType'
import log from './logger';
import ColorCalc from './color';
interface IConfig {
    root: string | HTMLDivElement
}
export default function GradualButton({
    root
}: IConfig) {
    let dom: HTMLDivElement;
    if (checkType(root, 'String')) {
        // if (!/#(.*?)/.test(root)) {
        //     throw 'better-gradual:[ERROR] button.js 类型检查失败，请确认输入的是dom的id(#xx)。'
        // }
        dom = <HTMLDivElement>document.getElementById(root as string);
        if (!dom) {
            console.log(dom);
            log.Error('没有找到dom元素');
        }
    }
    else {
        dom = <HTMLDivElement>root;
    }
    let width:number = dom.clientWidth; // offsetWidth是视觉宽度
    let height:number = dom.clientHeight;

    let colorCalc = new ColorCalc();


    dom.setAttribute('style', `
        background-image: linear-gradient(red, green);
    `)

    console.log(width, height);
}