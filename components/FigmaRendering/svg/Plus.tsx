import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const PlusSVGIcon = (props: Props) => {

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

  const lineLength: number = standardSVGSize * finalProps.viewBoxScale * 0.9;

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
           `M ${scaleFactor * (((standardSVGSize * finalProps.viewBoxScale) / 2) - (lineLength / 2))},${scaleFactor * ((standardSVGSize * finalProps.viewBoxScale) / 2)} ` + 
           `h ${scaleFactor * (lineLength)} ` + 
           `M ${scaleFactor * ((standardSVGSize * finalProps.viewBoxScale) / 2)},${scaleFactor * (((standardSVGSize * finalProps.viewBoxScale) / 2) - (lineLength / 2))} ` + 
           `v ${scaleFactor * (lineLength)} `
        }
      />
      
      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default PlusSVGIcon;