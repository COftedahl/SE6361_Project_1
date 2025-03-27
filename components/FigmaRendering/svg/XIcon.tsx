import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const XSVGIcon = (props: Props) => {

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
  };

  const parallelLineLength: number = standardSVGSize * 0.8;

  return (
    <svg {...svgRenderingAttribute} viewBox={`0 0 ${standardSVGSize * finalProps.viewBoxScale * scaleFactor} ${standardSVGSize * finalProps.viewBoxScale * scaleFactor}`} {...svgAttrs}>
      <defs>
        <clipPath>
          <path d={
              `` 
            }
          />
        </clipPath>
      </defs>

      <path {...pathAttrs}
        d={`` + //create the body rectangle
           `M ${scaleFactor * ((((standardSVGSize * finalProps.viewBoxScale) - parallelLineLength) / 2))},${scaleFactor * (((standardSVGSize * finalProps.viewBoxScale) - parallelLineLength) / 2)} ` + 
           `l ${scaleFactor * (parallelLineLength)},${scaleFactor * (parallelLineLength)} ` + 
           `M ${scaleFactor * ((standardSVGSize * finalProps.viewBoxScale) - (((standardSVGSize * finalProps.viewBoxScale) - parallelLineLength) / 2))},${scaleFactor * (((standardSVGSize * finalProps.viewBoxScale) - parallelLineLength) / 2)} ` + 
           `l ${scaleFactor * (-parallelLineLength)},${scaleFactor * (parallelLineLength)} `
        }
      />
      
      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default XSVGIcon;