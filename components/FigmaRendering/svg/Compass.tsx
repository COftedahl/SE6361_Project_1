import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const CompassSVGIcon = (props: Props) => {

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
    strokeLinejoin: "round" as "round",
  };

  
  const compassRadius: number = 40;
  const totalWidth: number = compassRadius * 2;
  const needleWidth: number = 7; //how wide the needle is at its widest point
  const needleLength: number = 25; //radius of the needle
  const needleHorizontalSkew: number = 12;//adjusts how turned the needle is
  const needleVerticalSkew: number = -Math.sqrt(Math.pow(needleLength, 2) - Math.pow(needleHorizontalSkew, 2));
  const needleSlope: number = ((needleHorizontalSkew != 0) ? (needleVerticalSkew / needleHorizontalSkew): 0);
  const needleInverseSlope: number = ((needleVerticalSkew != 0) ? (-needleHorizontalSkew / needleVerticalSkew): 0);
  const totalHeight: number = totalWidth;

  const startingXCoord: number = ((standardSVGSize * finalProps.viewBoxScale) / 2);
  const startingYCoord: number = ((standardSVGSize * finalProps.viewBoxScale) / 2);

  return (
    <svg {...svgRenderingAttribute} viewBox={`0 0 ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor} ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor}`} {...svgAttrs}>
      <defs>
        <clipPath>
          <path
          />
        </clipPath>
      </defs>

      <ellipse {...pathAttrs} fillOpacity={0} //draw compass circle
        rx={`${scaleFactor * (compassRadius)}`}
        ry={`${scaleFactor * (compassRadius)}`}
        cx={`${scaleFactor * (startingXCoord)}`}
        cy={`${scaleFactor * (startingYCoord)}`}
      />

      {/* <path {...pathAttrs} fillOpacity={0}
        d={//draw needle - single line
            // `M ${scaleFactor * (startingXCoord + (needleInverseSlope * needleWidth))},${scaleFactor * (startingYCoord + (needleSlope * needleWidth))} ` + 
            `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
            `l ${scaleFactor * (needleHorizontalSkew)},${scaleFactor * (needleVerticalSkew)}` + 
            `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
            `l ${scaleFactor * -(needleHorizontalSkew)},${scaleFactor * -(needleVerticalSkew)}`
        }
      /> */}

    <path {...pathAttrs} fillOpacity={1}
        d={//draw needle
            `M ${scaleFactor * (startingXCoord + ((needleVerticalSkew / needleLength) * needleWidth))},${scaleFactor * (startingYCoord - ((needleHorizontalSkew / needleLength) * needleWidth))} ` + 
            `l ${scaleFactor * (-((needleVerticalSkew / needleLength) * needleWidth) + needleHorizontalSkew)},${scaleFactor * (((needleHorizontalSkew / needleLength) * needleWidth) + needleVerticalSkew)} ` + 
            `l ${scaleFactor * -(((needleVerticalSkew / needleLength) * needleWidth) + needleHorizontalSkew)},${scaleFactor * (((needleHorizontalSkew / needleLength) * needleWidth) - needleVerticalSkew)} ` + 
            `l ${scaleFactor * -(-((needleVerticalSkew / needleLength) * needleWidth) + needleHorizontalSkew)},${scaleFactor * -(((needleHorizontalSkew / needleLength) * needleWidth) + needleVerticalSkew)} ` +
            `z`
        }
      />
      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default CompassSVGIcon;