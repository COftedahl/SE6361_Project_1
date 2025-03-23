import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const CameraSVGIcon = (props: Props) => {

  const scaleFactor: number = 1;
  const standardSVGSize: number = 100;

  const finalProps: SVG_ICON_PROPS_DEFINED = SVG_ICON_GetIconValues(props);
  const svgAttrs = {
    width: finalProps.width, 
    height: finalProps.height,
  }
  const pathAttrs = {
    stroke: finalProps.strokeColor, 
    fill: finalProps.backgroundColor, 
    strokeWidth: finalProps.strokeWidth 
  };

  const topCornerRadius: number = 15;//distance along each edge in where the curve begins -> 5 radius means 5 units off horizontal and 5 units off vertical spent on curve
  const bottomCornerRadius: number = 5;
  const sideHeight: number = 60;
  const sideWidth: number = 90;
  const trapezoidBaseLength: number = 35;
  const trapezoidTopLength: number = 20;
  const trapezoidHeight: number = 10;
  const innerCircleRadius: number = 15;
  const totalWidth: number = sideWidth;
  const totalHeight: number = sideHeight + trapezoidHeight;

  return (
    <svg {...svgRenderingAttribute} viewBox={`0 0 ${(standardSVGSize * finalProps.viewBoxScale)} ${(standardSVGSize * finalProps.viewBoxScale)}`} {...svgAttrs}>
      <path {...pathAttrs} 
        d={`M ${scaleFactor * (((standardSVGSize * finalProps.viewBoxScale) - totalWidth) / 2)},${scaleFactor * (((standardSVGSize * finalProps.viewBoxScale) - ((standardSVGSize * finalProps.viewBoxScale) - totalHeight) / 2) - bottomCornerRadius)} ` + 
           `v ${scaleFactor * (-(sideHeight - (topCornerRadius + bottomCornerRadius)))} ` + 
           `q ${0},${scaleFactor * (-topCornerRadius)}  ${scaleFactor * (topCornerRadius)},${scaleFactor * (-topCornerRadius)} ` + //q (control point - relative coords to current pos)  (end point - relative coords to current pos)
           `h ${scaleFactor * (((sideWidth - trapezoidBaseLength) / 2) - topCornerRadius)} ` + 
           `l ${scaleFactor * ((trapezoidBaseLength - trapezoidTopLength) / 2)},${scaleFactor * (-trapezoidHeight)} ` + 
           `h ${scaleFactor * (trapezoidTopLength)} ` + 
           `l ${scaleFactor * ((trapezoidBaseLength - trapezoidTopLength) / 2)},${scaleFactor * (trapezoidHeight)} ` + 
           `h ${scaleFactor * (((sideWidth - trapezoidBaseLength) / 2) - topCornerRadius)} ` + 
           `q ${scaleFactor * (topCornerRadius)},${0}  ${scaleFactor * (topCornerRadius)},${scaleFactor * (topCornerRadius)} ` + 
           `v ${scaleFactor * (sideHeight - (bottomCornerRadius + topCornerRadius))} ` + 
           `q ${0},${scaleFactor * (bottomCornerRadius)}  ${scaleFactor * (-bottomCornerRadius)},${scaleFactor * (bottomCornerRadius)} ` + 
           `h ${scaleFactor * (-sideWidth + 2 * bottomCornerRadius)} ` + 
           `q ${scaleFactor * (-bottomCornerRadius)},${0}  ${scaleFactor * (-bottomCornerRadius)},${scaleFactor * (-bottomCornerRadius)} ` }/>
      <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${(standardSVGSize * finalProps.viewBoxScale) / 2}`} cy={`${trapezoidHeight + (sideHeight / 2) + (((standardSVGSize * finalProps.viewBoxScale) - totalHeight)/2)}`} />
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default CameraSVGIcon;