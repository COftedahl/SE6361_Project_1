import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const PersonSVGIcon = (props: Props) => {

  const scaleFactor: number = 1;
  const standardSVGSize: number = 70;

  const finalProps: SVG_ICON_PROPS_DEFINED = SVG_ICON_GetIconValues(props);
  const svgAttrs = {
    width: finalProps.width * scaleFactor, 
    height: finalProps.height * scaleFactor, 
  }
  const pathAttrs = {
    stroke: finalProps.strokeColor, 
    fill: finalProps.backgroundColor, 
    strokeWidth: finalProps.strokeWidthNumber * scaleFactor, 
    strokeLinejoin: "round" as "round",
  };

  
  const headRadius: number = 10;
  const bodyWidth: number = 35;
  const bodyHeight: number = 20; 
  const headVerticalOffset: number = 10;
  const totalHeight: number = bodyHeight + headVerticalOffset + (2 * headRadius);
  const totalWidth: number = bodyWidth;

  const canvasCenterX: number = (standardSVGSize * finalProps.viewBoxScale) / 2;
  const canvasCenterY: number = canvasCenterX;

  return (
    <svg {...svgRenderingAttribute} viewBox={`0 0 ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor} ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor}`} {...svgAttrs}>
      <defs>
        <clipPath>
          <path
          />
        </clipPath>
      </defs>

      <ellipse {...pathAttrs}  //draw compass circle
        rx={`${scaleFactor * (headRadius)}`}
        ry={`${scaleFactor * (headRadius)}`}
        cx={`${scaleFactor * (canvasCenterX)}`}
        cy={`${scaleFactor * ((((standardSVGSize * finalProps.viewBoxScale) - totalHeight) / 2) + headRadius)}`}
      />

      <path {...pathAttrs} 
        d={
          `M ${scaleFactor * (canvasCenterX - bodyWidth / 2)},${scaleFactor * (((((standardSVGSize * finalProps.viewBoxScale) - totalHeight) / 2) + (2 * headRadius) + headVerticalOffset) + bodyHeight)} ` + 
          `a ${scaleFactor * (bodyWidth / 2)},${scaleFactor * (bodyHeight)}  ${0}  ${0}  ${1}  ${scaleFactor * (bodyWidth)},${0} `
        }
      />

      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default PersonSVGIcon;