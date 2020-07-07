interface IConfig {
    canvasDom: HTMLCanvasElement | string;
    stepNum: number;
    direction: 'row' | 'column';
    width: number;
    height: number;
    colorList: IColorList;
}
declare type IRgb = {
    r: number;
    g: number;
    b: number;
};
declare type IColorList = IColorItem[];
interface IColorItem {
    color: string;
    pos: number;
    duration: number;
    nextIndex: number;
    currentRGB: IRgb;
    directionRGB: IRgb;
    step: IRgb;
}
/**
 *
 * params
 * canvas, stepNum, width, height          direction
 * canvas   步数      canvas宽度  canvas高度  方向
 */
declare function Gradual({ canvasDom, stepNum, direction, width, height, colorList }: IConfig): void;
export default Gradual;
//# sourceMappingURL=gradual.d.ts.map