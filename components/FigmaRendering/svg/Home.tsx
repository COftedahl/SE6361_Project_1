import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {}

const HomeSVGIcon = (props: Props) => {

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
    strokeLinejoin: "round" as "round",
  };

  const bodyHeight: number = 50;
  const bodyWidth: number = 60;
  const roofHeight: number = 30;
  const roofOverhang: number = 10;
  
  const totalWidth: number = bodyWidth + (roofOverhang * 2);
  const totalHeight: number = bodyHeight + roofHeight;

  const startingXCoord: number = ((standardSVGSize * finalProps.viewBoxScale) / 2) - (bodyWidth / 2);
  const startingYCoord: number = (standardSVGSize * finalProps.viewBoxScale) - (standardSVGSize * finalProps.viewBoxScale - totalHeight) / 2;

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
           `v ${scaleFactor * (-bodyHeight)} ` + 
           `h ${scaleFactor * (bodyWidth)} ` + 
           `v ${scaleFactor * (bodyHeight)} ` + 
           `z`
        }
      />

      <path {...pathAttrs}
        d={
          `M ${scaleFactor * (startingXCoord)},${scaleFactor * (startingYCoord - bodyHeight)} ` + 
          `h ${scaleFactor * (-roofOverhang)} ` + 
          `l ${scaleFactor * (roofOverhang + (bodyWidth / 2))},${scaleFactor * (-roofHeight)} ` + 
          `l ${scaleFactor * (roofOverhang + (bodyWidth / 2))},${scaleFactor * (roofHeight)} ` + 
          `z`
        }
      />
      
      {/* <ellipse {...pathAttrs} fillOpacity="0" ry={`${innerCircleRadius}`} rx={`${innerCircleRadius}`} cx={`${100 / 2}`} cy={`${handleHeight + (sideHeight / 2) + ((100 - totalHeight)/2)}`} /> */}
      {/* <ZERO_ZERO_MARKER/> */}
      {/* <path {...pathAttrs} d={"M 50," + ((100 - totalHeight)/2) + " v " + totalHeight}/> */}
    </svg>
  )
}

export default HomeSVGIcon;