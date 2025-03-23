import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const CalendarSVGIcon = (props: Props) => {

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

  const cornerRadius: number = 5;//distance along each edge in where the curve begins -> 5 radius means 5 units off horizontal and 5 units off vertical spent on curve
  const sideHeight: number = 60;
  const sideWidth: number = 80;
  const distanceFromTopForHeader: number = 15;
  const verticalBarHeight: number = 15;
  const distanceBetweenVerticalBars: number = 25;
  
  const totalWidth: number = sideWidth;
  const totalHeight: number = sideHeight + (0.5 * verticalBarHeight);

  const startingXCoord: number = ((standardSVGSize * finalProps.viewBoxScale) - totalWidth) / 2;
  const startingYCoord: number = (((standardSVGSize * finalProps.viewBoxScale) - ((standardSVGSize * finalProps.viewBoxScale) - totalHeight) / 2) - cornerRadius);

  return (
    <svg {...svgRenderingAttribute} viewBox={`0 0 ${standardSVGSize * finalProps.viewBoxScale * scaleFactor} ${standardSVGSize * finalProps.viewBoxScale * scaleFactor}`} {...svgAttrs}>
      <defs>
        <clipPath id="calendar-body-clip-path">
          <path d={
            `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
            `v ${scaleFactor * -(sideHeight - (cornerRadius) - distanceFromTopForHeader)} ` +
            `h ${scaleFactor * (sideWidth)} ` + 
            `v ${scaleFactor * (sideHeight - (cornerRadius) - distanceFromTopForHeader)} ` + 
            `q ${0},${scaleFactor * (cornerRadius)}  ${scaleFactor * (-cornerRadius)},${scaleFactor * (cornerRadius)} ` + 
            `h ${scaleFactor * -(sideWidth - (2 * cornerRadius))} ` +
            `q ${scaleFactor * (-cornerRadius)},${0}  ${scaleFactor * (-cornerRadius)},${scaleFactor * (-cornerRadius)} ` + 
            `z` 
            }
          />
        </clipPath>
      </defs>

      <path {...pathAttrs} fillOpacity={1} clipPath="url(#calendar-body-clip-path)"
        d={//create the calendar body fill effect
          `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
           `v ${scaleFactor * -(sideHeight - (2 * cornerRadius))} ` +
           `q ${0},${scaleFactor * (-cornerRadius)}  ${scaleFactor * (cornerRadius)},${scaleFactor * (-cornerRadius)} ` + 
           `h ${scaleFactor * (sideWidth - (2 * cornerRadius))} ` + 
           `q ${scaleFactor * (cornerRadius)},${0}  ${scaleFactor * (cornerRadius)},${scaleFactor * (cornerRadius)} ` + 
           `v ${scaleFactor * (sideHeight - (2 * cornerRadius))} ` + 
           `q ${0},${scaleFactor * (cornerRadius)}  ${scaleFactor * (-cornerRadius)},${scaleFactor * (cornerRadius)} ` + 
           `h ${scaleFactor * -(sideWidth - (2 * cornerRadius))} ` +
           `q ${scaleFactor * (-cornerRadius)},${0}  ${scaleFactor * (-cornerRadius)},${scaleFactor * (-cornerRadius)} ` + 
           `z`
        }
      />

      <path {...pathAttrs} fillOpacity={0}
        d={`` + //create the calendar rectangle
           `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
           `v ${scaleFactor * -(sideHeight - (2 * cornerRadius))} ` +
           `q ${0},${scaleFactor * (-cornerRadius)}  ${scaleFactor * (cornerRadius)},${scaleFactor * (-cornerRadius)} ` + 
           `h ${scaleFactor * (sideWidth - (2 * cornerRadius))} ` + 
           `q ${scaleFactor * (cornerRadius)},${0}  ${scaleFactor * (cornerRadius)},${scaleFactor * (cornerRadius)} ` + 
           `v ${scaleFactor * (sideHeight - (2 * cornerRadius))} ` + 
           `q ${0},${scaleFactor * (cornerRadius)}  ${scaleFactor * (-cornerRadius)},${scaleFactor * (cornerRadius)} ` + 
           `h ${scaleFactor * -(sideWidth - (2 * cornerRadius))} ` +
           `q ${scaleFactor * (-cornerRadius)},${0}  ${scaleFactor * (-cornerRadius)},${scaleFactor * (-cornerRadius)} ` + 
           `z`
        }
      />

      <path {...pathAttrs}
        d={`` + //create the header bar rectangle
           `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord - (sideHeight - (cornerRadius)) + distanceFromTopForHeader)} ` + 
           `h ${scaleFactor * (sideWidth)} `
        }
      />

      <path {...pathAttrs}
        d={`` + //create the vcertical rectangles at the top
           `M ${scaleFactor * (((standardSVGSize * finalProps.viewBoxScale) / 2) - ((distanceBetweenVerticalBars) / 2))},${scaleFactor * (startingYCoord - (sideHeight - (cornerRadius)) - (verticalBarHeight / 2))} ` + 
           `v ${scaleFactor * (verticalBarHeight)} ` + 
           `m ${scaleFactor * (distanceBetweenVerticalBars)},${scaleFactor * (-verticalBarHeight)} ` + 
           `v ${scaleFactor * (verticalBarHeight)} `
        }
      />
      
      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default CalendarSVGIcon;