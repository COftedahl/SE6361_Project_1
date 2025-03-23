import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const BackpackSVGIcon = (props: Props) => {

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
    // strokeWidth: finalProps.strokeWidth, 
    strokeWidth: finalProps.strokeWidthNumber * scaleFactor, 
  };

  const topCornerRadius: number = 15;//distance along each edge in where the curve begins -> 5 radius means 5 units off horizontal and 5 units off vertical spent on curve
  const bottomCornerRadius: number = 5;
  const sideHeight: number = 60;
  const sideWidth: number = 90;
  //handle info
  const handleBaseLength: number = 25;
  const handleHeight: number = 15;
  const ellipticalHandle_VerticalOffset: number = -4;
  const ellipticalHandle_HorizontalOffset: number = 0;
  //inner line - bottom info
  const innerLine_Bottom_Width: number = sideWidth - 25;
  const innerLine_Bottom_Height: number = sideHeight * 0.3;
  const innerLine_Bottom_BorderRadius: number = 5;
  //inner line - top info
  const innerLine_Top_Width: number = sideWidth - 10;
  const innerLine_Top_Height: number = sideHeight * 0.5;
  const innerLine_Top_BorderRadius: number = 8;
  //latch rectangle info
  const latch_Width: number = 10;
  const latch_Height: number = 4;
  const latch_BorderRadius: number = 1;
  
  const totalWidth: number = sideWidth;
  const totalHeight: number = sideHeight + handleHeight;

  const startingXCoord: number = ((standardSVGSize * finalProps.viewBoxScale) - totalWidth) / 2;
  const startingYCoord: number = (((standardSVGSize * finalProps.viewBoxScale) - ((standardSVGSize * finalProps.viewBoxScale) - totalHeight) / 2) - bottomCornerRadius);

  return (
    <svg {...svgRenderingAttribute} viewBox={`0 0 ${standardSVGSize * finalProps.viewBoxScale * scaleFactor} ${standardSVGSize * finalProps.viewBoxScale * scaleFactor}`} {...svgAttrs}>
      <defs>
        <clipPath id="cut-off-around-backpack">
          <path d={
              `` + //create the backpack rectangle
              `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord - 0.5 * finalProps.strokeWidthNumber)} ` + 
              `v ${scaleFactor * (-(sideHeight - (topCornerRadius + bottomCornerRadius)))} ` + 
              `q ${0},${scaleFactor * (-topCornerRadius)}  ${scaleFactor * (topCornerRadius)},${scaleFactor * (-topCornerRadius)} ` + 
              `h ${scaleFactor * (sideWidth - 2 * topCornerRadius)} ` + 
              `q ${scaleFactor * (topCornerRadius)},${0}  ${scaleFactor * (topCornerRadius)},${scaleFactor * (topCornerRadius)} ` + 
              `v ${scaleFactor * (sideHeight - (bottomCornerRadius + topCornerRadius))} ` + 
              `q ${0},${scaleFactor * (bottomCornerRadius)}  ${scaleFactor * (-bottomCornerRadius)},${scaleFactor * (bottomCornerRadius)} ` + 
              `h ${scaleFactor * (-sideWidth + 2 * bottomCornerRadius)} ` + 
              `q ${scaleFactor * (-bottomCornerRadius)},${0}  ${scaleFactor * (-bottomCornerRadius)},${scaleFactor * (-bottomCornerRadius)} `
            }
          />
        </clipPath>
      </defs>

      <path {...pathAttrs} fillOpacity={0}
        d={`` + // create the handle
           `M ${scaleFactor * (startingXCoord + ((sideWidth - handleBaseLength) / 2))},${scaleFactor * (startingYCoord + (-(sideHeight - bottomCornerRadius)))} ` + 
            //quadratic bezier curve version
           //`q ${handleBaseLength / 2},${-2 * handleHeight}   ${handleBaseLength},${0} ` + 
        
            //elliptical curve version
           `a ${scaleFactor * ((handleBaseLength / 2) + ellipticalHandle_HorizontalOffset)},${scaleFactor * (handleHeight + ellipticalHandle_VerticalOffset)}  ${0}  ${0}  ${1}  ${scaleFactor * (handleBaseLength)},${0} ` 
        }
      />
      <path {...pathAttrs} fill={pathAttrs.stroke}
        d={`` + //create the backpack rectangle
           `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
           `v ${scaleFactor * (-(sideHeight - (topCornerRadius + bottomCornerRadius)))} ` + 
           `q ${0},${scaleFactor * (-topCornerRadius)}  ${scaleFactor * (topCornerRadius)},${scaleFactor * (-topCornerRadius)} ` + 
           `h ${scaleFactor * (sideWidth - 2 * topCornerRadius)} ` + 
           `q ${scaleFactor * (topCornerRadius)},${0}  ${scaleFactor * (topCornerRadius)},${scaleFactor * (topCornerRadius)} ` + 
           `v ${scaleFactor * (sideHeight - (bottomCornerRadius + topCornerRadius))} ` + 
           `q ${0},${scaleFactor * (bottomCornerRadius)}  ${scaleFactor * (-bottomCornerRadius)},${scaleFactor * (bottomCornerRadius)} ` + 
           `h ${scaleFactor * (-sideWidth + 2 * bottomCornerRadius)} ` + 
           `q ${scaleFactor * (-bottomCornerRadius)},${0}  ${scaleFactor * (-bottomCornerRadius)},${scaleFactor * (-bottomCornerRadius)} ` 
        }
      />

      <path {...pathAttrs} fillOpacity={0} stroke={pathAttrs.fill}
        d={`` + //create the bottom inner rectangle
           `M ${scaleFactor * (startingXCoord + ((sideWidth - innerLine_Bottom_Width) / 2))},${scaleFactor * (startingYCoord + bottomCornerRadius + 0.5 * finalProps.strokeWidthNumber)} ` + 
           `v ${scaleFactor * (-(innerLine_Bottom_Height - innerLine_Bottom_BorderRadius))} ` + 
           `q ${0},${scaleFactor * (-innerLine_Bottom_BorderRadius)}  ${scaleFactor * (innerLine_Bottom_BorderRadius)},${scaleFactor * (-innerLine_Bottom_BorderRadius)} ` + 
           `h ${scaleFactor * (innerLine_Bottom_Width - 2 * innerLine_Bottom_BorderRadius)} ` + 
           `q ${scaleFactor * (innerLine_Bottom_BorderRadius)},${0}  ${scaleFactor * (innerLine_Bottom_BorderRadius)},${scaleFactor * (innerLine_Bottom_BorderRadius)} ` + 
           `v ${scaleFactor * (innerLine_Bottom_Height - innerLine_Bottom_BorderRadius)} `
        }
      />

      <path {...pathAttrs} fillOpacity={0} stroke={pathAttrs.fill} clipPath="url(#cut-off-around-backpack)"
        d={`` + //create the top inner rectangle
           `M ${scaleFactor * (startingXCoord + ((sideWidth - innerLine_Top_Width) / 2))},${scaleFactor * (startingYCoord - sideHeight + bottomCornerRadius - finalProps.strokeWidthNumber)} ` + 
           `v ${scaleFactor * (innerLine_Top_Height - innerLine_Top_BorderRadius)} ` + 
           `q ${0},${scaleFactor * (innerLine_Top_BorderRadius)}  ${scaleFactor * (innerLine_Top_BorderRadius)},${scaleFactor * (innerLine_Top_BorderRadius)} ` + 
           `h ${scaleFactor * (innerLine_Top_Width - 2 * innerLine_Top_BorderRadius)} ` + 
           `q ${scaleFactor * (innerLine_Top_BorderRadius)},${0}  ${scaleFactor * (innerLine_Top_BorderRadius)},${scaleFactor * (-innerLine_Top_BorderRadius)} ` + 
           `v ${scaleFactor * (-(innerLine_Top_Height - innerLine_Top_BorderRadius))} `
        }
      />

      <path {...pathAttrs} stroke={finalProps.backgroundColor}
        d={`` + //create the latch rectangle
           `M ${scaleFactor * (startingXCoord + ((sideWidth - latch_Width) / 2))},${scaleFactor * (startingYCoord - (sideHeight - innerLine_Top_Height - finalProps.strokeWidthNumber / 2))} ` + 
           `v ${scaleFactor * (-(latch_Height - (latch_BorderRadius + latch_BorderRadius)))} ` + 
           `q ${0},${scaleFactor * (-latch_BorderRadius)}  ${scaleFactor * (latch_BorderRadius)},${scaleFactor * (-latch_BorderRadius)} ` + 
           `h ${scaleFactor * (latch_Width - 2 * latch_BorderRadius)} ` + 
           `q ${scaleFactor * (latch_BorderRadius)},${0}  ${scaleFactor * (latch_BorderRadius)},${scaleFactor * (latch_BorderRadius)} ` + 
           `v ${scaleFactor * (latch_Height - (latch_BorderRadius + latch_BorderRadius))} ` + 
           `q ${0},${scaleFactor * (latch_BorderRadius)}  ${scaleFactor * (-latch_BorderRadius)},${scaleFactor * (latch_BorderRadius)} ` + 
           `h ${scaleFactor * (-latch_Width + 2 * latch_BorderRadius)} ` + 
           `q ${scaleFactor * (-latch_BorderRadius)},${0}  ${scaleFactor * (-latch_BorderRadius)},${scaleFactor * (-latch_BorderRadius)} ` 
        }
      />
      
      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default BackpackSVGIcon;