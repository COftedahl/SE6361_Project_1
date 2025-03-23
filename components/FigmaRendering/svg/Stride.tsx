import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const StrideSVGIcon = (props: Props) => {

  const scaleFactor: number = 1;
  const standardSVGSize: number = 64;

  const finalProps: SVG_ICON_PROPS_DEFINED = SVG_ICON_GetIconValues(props);
  const svgAttrs = {
    width: finalProps.width * scaleFactor, 
    height: finalProps.height * scaleFactor, 
  }
  const pathAttrs = {
    stroke: finalProps.strokeColor, 
    fill: finalProps.backgroundColor, 
    strokeWidth: finalProps.strokeWidthNumber * scaleFactor, 
    // strokeLinecap: "round" as "round",
    // strokeLinejoin: "round" as "round",
  };

  //torso info
  const torsoHeight: number = 20;
  const torsoWidth: number = 5;
  const torsoHorizontalSkew: number = 4;
  const torsoSlope: number = torsoHeight / torsoHorizontalSkew;
  const invertedTorsoSlope: number = ((torsoSlope != 0) ? (-1 / torsoSlope) : 0);
  //head info
  const headOffset: number = 10;
  const headRadius: number = 4;
  //leg info
  const backLegLength: number = 18;
  const legWidth: number = 1;
  const frontLegVerticalSkew: number = 3;
  const frontLegUpperLength: number = 3;
  const frontLegSlope: number = frontLegVerticalSkew / frontLegUpperLength;
  const invertedLegSlope: number = ((frontLegSlope != 0) ? (-1 / frontLegSlope) : 0);
  //arm info
  const upperArmLength: number = 10;
  const forearmLength: number = 10;
  const backArmVerticalSkew: number = 3;
  const frontArmHorizontalSkew: number = 3;
  const armWidth: number = legWidth;

  const totalWidth: number = upperArmLength + torsoWidth + frontArmHorizontalSkew + forearmLength;
  const totalHeight: number = headRadius * 2 + headOffset + torsoHeight + backLegLength + (invertedTorsoSlope * -torsoWidth);

  const startingXCoord: number = ((standardSVGSize * finalProps.viewBoxScale) - totalWidth) / 2 + upperArmLength;
  const startingYCoord: number = ((standardSVGSize * finalProps.viewBoxScale) - totalHeight) / 2 + headRadius * 2 + headOffset;

  return (
    <svg {...svgRenderingAttribute} viewBox={`0 0 ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor} ${(standardSVGSize * finalProps.viewBoxScale) * scaleFactor}`} {...svgAttrs}>
      <defs>
        <clipPath id="feet-ground-clip-rectangle">
          <path d={//rectangle to clip the bottom of the feet flat horizontally
              `M 0,0 ` + 
              `v ${scaleFactor * (startingYCoord + torsoHeight + backLegLength + (invertedTorsoSlope * -legWidth))} ` + 
              `h ${scaleFactor * standardSVGSize * finalProps.viewBoxScale} ` + 
              `v ${scaleFactor * -(startingYCoord + torsoHeight + backLegLength - (invertedTorsoSlope * -legWidth))} ` + 
              `z`
            }
          />
        </clipPath>
      </defs>

      <ellipse //draw the person's head
        {...pathAttrs} fill={finalProps.strokeColor}
        rx={`${scaleFactor * (headRadius)}`}
        ry={`${scaleFactor * (headRadius)}`}
        cx={`${scaleFactor * (startingXCoord - (invertedTorsoSlope * headOffset) + (torsoWidth / 2))}`}
        cy={`${scaleFactor * (startingYCoord - headOffset)}`}
      />

      <path {...pathAttrs} fill={finalProps.strokeColor}
        d={//draw the person's body
          `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
          `l ${scaleFactor * (torsoWidth)},${scaleFactor * (invertedTorsoSlope * -torsoWidth)} ` + 
          `l ${scaleFactor * (-torsoHorizontalSkew)},${scaleFactor * (torsoHeight)} ` + 
          `l ${scaleFactor * (-torsoWidth)},${scaleFactor * (invertedTorsoSlope * torsoWidth)} ` + 
          `z `
        }
      />

      <path {...pathAttrs} clipPath="url(#feet-ground-clip-rectangle)"
        d={//draw the back leg
          `M ${scaleFactor * (startingXCoord - torsoHorizontalSkew)},${scaleFactor * (startingYCoord + torsoHeight)} ` + 
          `l ${scaleFactor * (invertedTorsoSlope * backLegLength)},${scaleFactor * (backLegLength)} ` + 
          `l ${scaleFactor * (legWidth)},${scaleFactor * (invertedTorsoSlope * -legWidth)} ` + 
          `l ${scaleFactor * (invertedTorsoSlope * -backLegLength)},${scaleFactor * (-backLegLength)} ` + 
          `z`
        }
      />

      <path {...pathAttrs} 
        d={//draw the front leg
          `M ${scaleFactor * (startingXCoord - torsoHorizontalSkew + torsoWidth)},${scaleFactor * (startingYCoord + torsoHeight + (invertedTorsoSlope * -torsoWidth))} ` + 
          `l ${scaleFactor * (frontLegUpperLength)},${scaleFactor * (frontLegVerticalSkew)} ` + 
          `l ${scaleFactor * (-legWidth * invertedLegSlope)},${scaleFactor * (legWidth)} ` + 
            `v ${scaleFactor * (backLegLength - frontLegVerticalSkew - 2* legWidth - (invertedTorsoSlope * -torsoWidth))} ` +  
            `h ${scaleFactor * (legWidth)} ` +  
            `v ${scaleFactor * -(backLegLength - frontLegVerticalSkew - (invertedTorsoSlope * -torsoWidth))} ` +  
          `l ${scaleFactor * (-frontLegUpperLength)},${scaleFactor * (-frontLegVerticalSkew)} ` + 
          `z`
        }
      />

      <path {...pathAttrs}
        d={//draw the back arm
          `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
          `l ${scaleFactor * (-upperArmLength)},${scaleFactor * (backArmVerticalSkew)} ` + 
            `v ${scaleFactor * (forearmLength)} ` + 
            `h ${scaleFactor * (armWidth)} ` + 
            `v ${scaleFactor * (-forearmLength)}` + 
          `l ${scaleFactor * (upperArmLength)},${scaleFactor * (-backArmVerticalSkew)} ` + 
          `z`
        }
      />

      <path {...pathAttrs}
        d={//draw the front arm
          `M ${scaleFactor * (startingXCoord + torsoWidth)},${scaleFactor * (startingYCoord + (invertedTorsoSlope * -torsoWidth))} ` + 
          `l ${scaleFactor * (frontArmHorizontalSkew)},${scaleFactor * (upperArmLength)} ` + 
            `h ${scaleFactor * (forearmLength)} ` + 
            `v ${scaleFactor * (armWidth)} ` + 
            `h ${scaleFactor * (-forearmLength)}` + 
          `l ${scaleFactor * (-frontArmHorizontalSkew)},${scaleFactor * (-upperArmLength)} ` + 
          `z`
        }
      />

      
      
      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default StrideSVGIcon;