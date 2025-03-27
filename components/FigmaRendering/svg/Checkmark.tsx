import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const CheckmarkSVGIcon = (props: Props) => {

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

  const smallArmVerticalDistance: number = 23;
  const smallArmHorizontalDistance: number = 25;
  const longArmVerticalDistance: number = 55;
  const longArmHorizontalDistance: number = 50;

  const totalWidth = smallArmHorizontalDistance + longArmHorizontalDistance;
  const totalHeight = longArmVerticalDistance;

  const startingXCoord = ((standardSVGSize * finalProps.viewBoxScale - totalWidth) / 2) + smallArmHorizontalDistance;
  const startingYCoord = (standardSVGSize * finalProps.viewBoxScale) - ((standardSVGSize * finalProps.viewBoxScale - totalHeight) / 2);

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
           `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
           `l ${scaleFactor * (-smallArmHorizontalDistance)},${scaleFactor * (-smallArmVerticalDistance)} ` + 
           `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
           `l ${scaleFactor * (longArmHorizontalDistance)},${scaleFactor * (-longArmVerticalDistance)} `
        }
      />
      
      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default CheckmarkSVGIcon;