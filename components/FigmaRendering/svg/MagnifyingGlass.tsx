import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const MagnifyingGlassSVGIcon = (props: Props) => {

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
    strokeLinecap: "round" as "round",
  };

  
  const glassRadius: number = 20;
  const handleLength: number = 20;
  const handleHorizontalSkew: number = 13;
  const handleVerticalSkew: number = Math.sqrt(Math.pow(handleLength, 2) - Math.pow(handleHorizontalSkew, 2));
  const handleStartingXOffsetFromCenter: number = ((glassRadius / handleLength) * handleHorizontalSkew);
  const handleStartingYOffsetFromCenter: number = ((glassRadius / handleLength) * handleVerticalSkew);
  const totalWidth: number = (((handleHorizontalSkew + handleStartingXOffsetFromCenter) > glassRadius) ? (glassRadius + handleHorizontalSkew + handleStartingXOffsetFromCenter) : (2 * glassRadius));
  const totalHeight: number = (((handleVerticalSkew + handleStartingYOffsetFromCenter) > glassRadius) ? (glassRadius + handleVerticalSkew + handleStartingYOffsetFromCenter) : (2 * glassRadius));;

  const startingXCoord: number = (((standardSVGSize * finalProps.viewBoxScale) - totalWidth) / 2) + glassRadius;
  const startingYCoord: number = (((standardSVGSize * finalProps.viewBoxScale) - totalHeight) / 2) + glassRadius;

  return (
    <svg {...svgRenderingAttribute} viewBox={`0 0 ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor} ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor}`} {...svgAttrs}>
      <defs>
        <clipPath>
          <path 
            d={
              ``
            }
          />
        </clipPath>
      </defs>

      <ellipse {...pathAttrs} fillOpacity={0} 
      // draw the circular glass
        cx={`${scaleFactor * (startingXCoord)}`}
        cy={`${scaleFactor * (startingYCoord)}`}
        rx={`${scaleFactor * (glassRadius)}`}
        ry={`${scaleFactor * (glassRadius)}`}
      />

      <path {...pathAttrs} 
        d={//draw the handle
          `M ${scaleFactor * (startingXCoord + handleStartingXOffsetFromCenter)},${scaleFactor * (startingYCoord + handleStartingYOffsetFromCenter)} ` + 
          `l ${scaleFactor * (handleHorizontalSkew)},${scaleFactor * (handleVerticalSkew)} `
        }
      />

      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default MagnifyingGlassSVGIcon;