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
declare function ColorCalc({ stepNum, colorList }?: {
    stepNum?: number | undefined;
    colorList?: IColorList | undefined;
}): void;
export default ColorCalc;
//# sourceMappingURL=color.d.ts.map