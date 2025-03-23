import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const HeartSVGIcon = (props: Props) => {

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

  
  const upperCurveHeight: number = 20;
  const lowerCurveHeight: number = 60
  const totalWidth: number = 80;
  const totalHeight: number = upperCurveHeight + lowerCurveHeight;

  const startingXCoord: number = ((standardSVGSize * finalProps.viewBoxScale) / 2);
  const startingYCoord: number = (((standardSVGSize * finalProps.viewBoxScale) - totalHeight) / 2) + upperCurveHeight;

  return (
    <svg {...svgRenderingAttribute} viewBox={`0 0 ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor} ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor}`} {...svgAttrs}>
      <defs>
        <clipPath id="heart-clip-path">
          <path 
            d={
              `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
              `a ${scaleFactor * (totalWidth * 0.25)},${scaleFactor * (upperCurveHeight)} 0,0,1 ${scaleFactor * (totalWidth * 0.5)},${0} ` + 
              `q ${0},${scaleFactor * ((totalHeight - upperCurveHeight) / 2)}  ${scaleFactor * (totalWidth * -0.5)},${scaleFactor * (totalHeight - upperCurveHeight)} ` + 
              `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
              `a ${scaleFactor * (totalWidth * -0.25)},${scaleFactor * (upperCurveHeight)} 0,0,0 ${scaleFactor * (totalWidth * -0.5)},${0} ` + 
              `q ${0},${scaleFactor * ((totalHeight - upperCurveHeight) / 2)}  ${scaleFactor * (totalWidth * 0.5)},${scaleFactor * (totalHeight - upperCurveHeight)}`
            }
          />
        </clipPath>
      </defs>

      <path {...pathAttrs} fillOpacity={1} fill={finalProps.backgroundColor} clipPath="url(#heart-clip-path)"
        d={
          `M 0,0 ` + 
          `h ${scaleFactor * ((standardSVGSize * finalProps.viewBoxScale))} ` +
          `v ${scaleFactor * ((standardSVGSize * finalProps.viewBoxScale))} ` + 
          `h ${scaleFactor * (-(standardSVGSize * finalProps.viewBoxScale))} ` + 
          `z`
        }
      />

      <path {...pathAttrs} fillOpacity={0}
        d={//draw heart
            `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
            `a ${scaleFactor * (totalWidth * 0.25)},${scaleFactor * (upperCurveHeight)} 0,0,1 ${scaleFactor * (totalWidth * 0.5)},${0} ` + 
            `q ${0},${scaleFactor * ((totalHeight - upperCurveHeight) / 2)}  ${scaleFactor * (totalWidth * -0.5)},${scaleFactor * (totalHeight - upperCurveHeight)} ` + 
            `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
            `a ${scaleFactor * (totalWidth * -0.25)},${scaleFactor * (upperCurveHeight)} 0,0,0 ${scaleFactor * (totalWidth * -0.5)},${0} ` + 
            `q ${0},${scaleFactor * ((totalHeight - upperCurveHeight) / 2)}  ${scaleFactor * (totalWidth * 0.5)},${scaleFactor * (totalHeight - upperCurveHeight)}`
        }
      />

      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default HeartSVGIcon;