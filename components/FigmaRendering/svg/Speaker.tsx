import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const SpeakerSVGIcon = (props: Props) => {

  const scaleFactor: number = 1;
  const standardSVGSize: number = 60;

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
    strokeLinejoin: "round" as "round",
  };

  const cornerRadius: number = 1;//distance along each edge in where the curve begins -> 5 radius means 5 units off horizontal and 5 units off vertical spent on curve
  const leftSideHeight: number = 15;
  const horizontalSpeakerSideLength: number = 10;
  const speakerBevelVerticalLength: number = 10;
  const speakerBevelHorizontalLength: number = 10;
  const soundArc1_horizontalOffset: number = 10;
  const soundArc1_verticalLength: number = 15;
  const soundArc1_horizontalLength: number = 3;
  const soundArc2_horizontalOffset: number = 5;
  const soundArc2_scale: number = 2;
  
  const totalWidth: number = horizontalSpeakerSideLength + speakerBevelHorizontalLength + soundArc1_horizontalOffset + soundArc2_horizontalOffset + (soundArc1_horizontalLength * soundArc2_scale);
  const totalHeight: number = Math.max(leftSideHeight + (2 * speakerBevelVerticalLength), soundArc1_verticalLength * soundArc2_scale);

  const startingXCoord: number = ((standardSVGSize * finalProps.viewBoxScale) - totalWidth) / 2;
  const startingYCoord: number = (((standardSVGSize * finalProps.viewBoxScale) / 2) + ((leftSideHeight - 2 * cornerRadius) / 2));

  return (
    <svg {...svgRenderingAttribute} viewBox={`0 0 ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor} ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor}`} {...svgAttrs}>
      <defs>
        <clipPath>
          <path d={
              ``
            }
          />
        </clipPath>
      </defs>

      <path {...pathAttrs} fillOpacity={0}
        d={//draw the speaker itself
          `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
          `v ${scaleFactor * -(leftSideHeight - 2 * cornerRadius)} ` + 
          `q ${0},${scaleFactor * (-cornerRadius)}  ${scaleFactor * (cornerRadius)},${scaleFactor * (-cornerRadius)} ` + 
          `h ${scaleFactor * (horizontalSpeakerSideLength - cornerRadius)} ` + 
          `l ${scaleFactor * (speakerBevelHorizontalLength)},${scaleFactor * (-speakerBevelVerticalLength)} ` + 
          `v ${scaleFactor * (leftSideHeight + (2 * speakerBevelVerticalLength))} ` + 
          `l ${scaleFactor * (-speakerBevelHorizontalLength)},${scaleFactor * (-speakerBevelVerticalLength)} ` + 
          `h ${scaleFactor * (-(horizontalSpeakerSideLength - cornerRadius))} ` + 
          `q ${scaleFactor * (-cornerRadius)},${0}  ${scaleFactor * (-cornerRadius)},${scaleFactor * (-cornerRadius)} `
        }
      />

      <path {...pathAttrs} fillOpacity={0}
        d={//draw sound arc 1
          `M ${scaleFactor * (startingXCoord + (horizontalSpeakerSideLength - cornerRadius) + speakerBevelHorizontalLength + soundArc1_horizontalOffset)},${scaleFactor * (((standardSVGSize * finalProps.viewBoxScale) / 2) - (soundArc1_verticalLength / 2))} ` + 
          //elliptical arc version...not great
          // `a ${scaleFactor * (soundArc1_horizontalLength)},${scaleFactor * (soundArc1_verticalLength)}  ${0}  ${0}  ${1}  ${0},${scaleFactor * (soundArc1_verticalLength)} `
          //quadratic Bezier curve version
          `q ${scaleFactor * (2.5 * soundArc1_horizontalLength)},${scaleFactor * (soundArc1_verticalLength / 2)}  ${0},${scaleFactor * (soundArc1_verticalLength)} `
        }
      />

      <path {...pathAttrs} fillOpacity={0}
        d={//draw sound arc 2
          `M ${scaleFactor * (startingXCoord + (horizontalSpeakerSideLength - cornerRadius) + speakerBevelHorizontalLength + soundArc1_horizontalOffset + soundArc2_horizontalOffset)},${scaleFactor * (((standardSVGSize * finalProps.viewBoxScale) / 2) - (soundArc1_verticalLength * soundArc2_scale / 2))} ` + 
          //elliptical arc version...not great
          // `a ${scaleFactor * (soundArc1_horizontalLength)},${scaleFactor * (soundArc1_verticalLength)}  ${0}  ${0}  ${1}  ${0},${scaleFactor * (soundArc1_verticalLength)} `
          //quadratic Bezier curve version
          `q ${scaleFactor * (2.5 * soundArc1_horizontalLength * soundArc2_scale)},${scaleFactor * (soundArc1_verticalLength * soundArc2_scale / 2)}  ${0},${scaleFactor * (soundArc1_verticalLength * soundArc2_scale)} `
        }
      />
      
      
      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default SpeakerSVGIcon;