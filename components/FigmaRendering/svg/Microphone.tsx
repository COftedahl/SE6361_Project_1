import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const MicrophoneSVGIcon = (props: Props) => {

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
    fillOpacity: 0,
  };

  const micHeight: number = 40;
  const micWidth: number = 20;
  const micContainerScale: number = 1.75;
  const standHeight: number = 10;
  const standWidth: number = 15;
  
  const totalWidth: number = Math.max(standWidth, micContainerScale * micWidth);
  const totalHeight: number = standHeight + (micContainerScale * micWidth / 2) + (micHeight - (micWidth / 2));

  const startingXCoord: number = ((standardSVGSize * finalProps.viewBoxScale) / 2) - (micWidth / 2);
  const startingYCoord: number = (((standardSVGSize * finalProps.viewBoxScale) - totalHeight) / 2) + (micHeight - (micWidth / 2));

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
          //draw the mic
          `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord)} ` + 
          `v ${scaleFactor * -(micHeight - micWidth)} ` + 
          `a ${scaleFactor * (micWidth / 2)},${scaleFactor * (micWidth / 2)}  ${0}  ${0}  ${1}  ${scaleFactor * (micWidth)},${0} ` + 
          `v ${scaleFactor * (micHeight - micWidth)} ` + 
          `a ${scaleFactor * (micWidth / 2)},${scaleFactor * (micWidth / 2)}  ${0}  ${0}  ${1}  ${scaleFactor * (-micWidth)},${0} `
        }
      />

      <path {...pathAttrs}
        d={
          //draw the curved mic container
          `M ${scaleFactor * (startingXCoord - ((micContainerScale * micWidth / 2) - (micWidth / 2)))},${scaleFactor * (startingYCoord)} ` + 
          `a ${scaleFactor * (micWidth * micContainerScale / 2)},${scaleFactor * (micWidth * micContainerScale/ 2)}  ${0}  ${0}  ${0}  ${scaleFactor * (micWidth * micContainerScale)},${0} `
        }
      />

      <path {...pathAttrs}
        d={
          `M ${scaleFactor * (startingXCoord + (micWidth/ 2))},${scaleFactor * (startingYCoord + micWidth * micContainerScale / 2)} ` + 
          `v ${scaleFactor * (standHeight)} ` + 
          `M ${scaleFactor * (startingXCoord + (micWidth/ 2) - (standWidth / 2))},${scaleFactor * (startingYCoord + (micWidth * micContainerScale / 2) + standHeight)} ` + 
          `h ${scaleFactor * (standWidth)} `
        } 
      />

      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default MicrophoneSVGIcon;