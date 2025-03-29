import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const HelpSVGIcon = (props: Props) => {

  const scaleFactor: number = 1;
  const standardSVGSize: number = 100;

  const finalProps: SVG_ICON_PROPS_DEFINED = SVG_ICON_GetIconValues(props);
  const svgAttrs = {
    width: finalProps.width * scaleFactor, 
    height: finalProps.height * scaleFactor, 
  }
  const pathAttrs = {
    stroke: finalProps.strokeColor, 
    fill: finalProps.backgroundColor, 
    strokeWidth: finalProps.strokeWidthNumber * scaleFactor, 
    strokeLinecap: "round" as "round",
    // strokeLinejoin: "round" as "round",
  };

  const questionMarkArcPercent = 0.7;
  const questionMarkRadius = 15;
  const questionMarkVerticalBarLength = 10;
  const questionMarkDotOffset = 10;
  const outerCircleSizeAsPercentOfTotal = 0.95;
  const totalWidth: number = questionMarkRadius * 2;
  const totalHeight: number = 2 * questionMarkRadius + questionMarkVerticalBarLength + questionMarkDotOffset + pathAttrs.strokeWidth;

  const startingXCoord: number = ((standardSVGSize * finalProps.viewBoxScale) / 2);
  const startingYCoord: number = (((standardSVGSize * finalProps.viewBoxScale) - totalHeight) / 2);

  return (
    <svg {...svgRenderingAttribute} viewBox={`0 0 ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor} ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor}`} {...svgAttrs}>
      <defs>
        <clipPath>
        </clipPath>
      </defs>
      
    <g>

      <ellipse
        {...pathAttrs}
        rx={`${scaleFactor * ((outerCircleSizeAsPercentOfTotal / 2) * (standardSVGSize * finalProps.viewBoxScale))}`}
        ry={`${scaleFactor * ((outerCircleSizeAsPercentOfTotal / 2) * (standardSVGSize * finalProps.viewBoxScale))}`}
        cx={`${scaleFactor * (startingXCoord)}`}
        cy={`${scaleFactor * ((standardSVGSize * finalProps.viewBoxScale) / 2)}`}
      />

      <path //draw the curve of the question mark
        {...pathAttrs}
        d={
          `M ${scaleFactor * (startingXCoord + (Math.sin((questionMarkArcPercent / 0.5) * Math.PI) * questionMarkRadius))},${scaleFactor * (startingYCoord + questionMarkRadius + (Math.cos((questionMarkArcPercent / 0.5) * Math.PI) * questionMarkRadius))} ` + 
          `a ${scaleFactor * (questionMarkRadius)},${scaleFactor * (questionMarkRadius)}  ${0}  ${(questionMarkArcPercent > 0.5) ? 1 : 0}  ${1}  ${scaleFactor * -(Math.sin((questionMarkArcPercent / 0.5) * Math.PI) * questionMarkRadius)},${scaleFactor * (questionMarkRadius -(Math.cos((questionMarkArcPercent / 0.5) * Math.PI) * questionMarkRadius))}`
        }
      />

      <path {...pathAttrs}
        d={//draw the vetical bar of the question mark
          `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord + 2 * questionMarkRadius)} ` + 
          `v ${scaleFactor * (questionMarkVerticalBarLength)} `
        }
      />

      <ellipse //draw the dot at the bottom
        strokeWidth={pathAttrs.strokeWidth}
        fillOpacity={1}
        fill={pathAttrs.stroke}
        rx={`${scaleFactor * (pathAttrs.strokeWidth / 1.8)}`}
        ry={`${scaleFactor * (pathAttrs.strokeWidth / 1.8)}`}
        cx={`${scaleFactor * (startingXCoord)}`}
        cy={`${scaleFactor * (startingYCoord + (2 * questionMarkRadius) + questionMarkVerticalBarLength + questionMarkDotOffset)}`}
      />
</g>
      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default HelpSVGIcon;