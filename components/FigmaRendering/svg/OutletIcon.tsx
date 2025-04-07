import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const OutletSVGIcon = (props: Props) => {

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
    fillOpacity: 0,
  };

  const rectangleHeight: number = 40;
  const rectangleWidth: number = 70;
  const rightBarHorizontalOffset: number = 15;
  const rightBarHeight: number = 10;
  const borderRadius: number = 5;
  
  const totalWidth: number = rectangleWidth + rightBarHorizontalOffset;
  const totalHeight: number = rectangleHeight;

  const startingXCoord: number = ((standardSVGSize * finalProps.viewBoxScale) / 2) - (totalWidth / 2);
  const startingYCoord: number = ((standardSVGSize * finalProps.viewBoxScale) / 2) + 2 * borderRadius;

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

      <path {...pathAttrs} 
        d={
          //draw the screen with bar
          `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
          `v ${scaleFactor * -(rectangleHeight - 2 * borderRadius)} ` + 
          `q ${0},${scaleFactor * -(borderRadius)} ${scaleFactor * (borderRadius)},${scaleFactor * -(borderRadius)} ` + 
          `h ${scaleFactor * (rectangleWidth - 2 * borderRadius)} ` + 
          `q ${scaleFactor * (borderRadius)},${0} ${scaleFactor * (borderRadius)},${scaleFactor * (borderRadius)} ` + 
          `v ${scaleFactor * (rectangleHeight - 2 * borderRadius)} ` + 
          `q ${0},${scaleFactor * (borderRadius)} ${scaleFactor * -(borderRadius)},${scaleFactor * (borderRadius)} ` + 
          `h ${scaleFactor * -(rectangleWidth - 2 * borderRadius)} ` + 
          `q ${scaleFactor * -(borderRadius)},${0} ${scaleFactor * -(borderRadius)},${scaleFactor * -(borderRadius)} ` + 
          `M ${scaleFactor * (startingXCoord + rectangleWidth + rightBarHorizontalOffset)},${scaleFactor * (startingYCoord - ((rectangleHeight / 2) - borderRadius) - (rightBarHeight / 2))} ` + 
          `v ${scaleFactor * (rightBarHeight)} `
        }
      />

      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default OutletSVGIcon;