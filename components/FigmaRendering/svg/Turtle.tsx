import { SVG_ICON_GetIconValues, SVG_ICON_PROPS, SVG_ICON_PROPS_DEFINED, svgRenderingAttribute } from "./SVG_CONSTANTS";

interface Props extends SVG_ICON_PROPS {

}

const TurtleSVGIcon = (props: Props) => {

  const scaleFactor: number = 1

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

  //<!-- source site: https://www.svgrepo.com/svg/307448/turtle-slow-slowly -->
  //<!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->

  return (
    <>
      <svg fill="#000000" {...svgAttrs} version="1.2" baseProfile="tiny" id="_x31_" xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 256 175"} transform="matrix(-1, 0, 0, 1, 0, 0)">
      {/* <g id="SVGRepo_bgCarrier" stroke-width="0"/> */}
      {/* <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/> */}
      <path {...pathAttrs} d="M185,29.7v0.2l15-12.6c-11.4-6.1-23.9-9.5-37.5-9.5s-26.2,3.4-37.1,9.3l15,12.6L185,29.7L185,29.7z M105.1,93.2 c-24.7,0-45,20.3-45,45v4.5l0,0c0.2,9.5,7.9,17,17.4,17s17.2-7.5,17.4-17l0,0v-4.5c0-5.7,4.5-10.1,10.1-10.1 c9.7,0,17.6-7.9,17.6-17.6S114.8,93.2,105.1,93.2z M221.9,92.8c-9.7,0-17.6,7.9-17.6,17.6v32.4l0,0c0.4,9.3,7.9,16.8,17.4,16.8 s17-7.5,17.4-16.8l0,0v-32.7C239.3,100.5,231.4,92.8,221.9,92.8z M252.7,101.9c0-4.3-1.4-8.5-3.4-12c-2.2,1.6-4.7,2.6-7.7,2.6 c4.1,4.9,6.5,11,6.5,17.6v5.5C251.3,111.8,252.7,107,252.7,101.9z M131.7,110.6c0,5.7-1.8,10.7-4.7,15c11.6,2.6,23.5,4.1,35.7,4.1 c11.4,0,22.1-1.2,32.7-3.4v-16c0-6.5,2.4-12.6,6.3-17h-76.5C129,98,131.7,103.9,131.7,110.6z M125,93.4L125,93.4c0.2,0,0-0.2,0-0.2 V93.4z M245.8,79.6c0-2.4-2-4.7-4.5-4.7h-0.6c-3.4-21.7-15.4-40.6-32.7-52.5l-17.6,14.8c9.7,11.4,16.4,24.1,20.3,37.9h-9.5 c-4.3-13-11.4-25.6-21.5-35.9h-32.9c-10.1,10.5-17,22.7-21.5,35.9h-9.5c3.9-13.4,10.3-26,19.9-36.9l-18.5-15.6 c-17,12.2-29.4,30.8-32.7,52.5h-1.2c-2.4,0-4.5,2-4.5,4.5c0,2.4,2,4.5,4.5,4.5h157.8C243.8,84.1,245.8,82,245.8,79.6z M81.6,89.5 c-4.9-0.6-8.9-4.7-8.9-9.9v-8.9c0-18.7-15-33.9-33.9-33.9c-18.7,0-33.9,15-33.9,33.9v8.9c0,4.9,4.1,8.9,8.9,8.9h24.5 c2.2,11.4,8.5,20.7,17.6,27.4C61.1,104.3,70.2,95.2,81.6,89.5z M24.2,64.4c-3,0-5.7-2.4-5.7-5.7c0-3,2.4-5.7,5.7-5.7 s5.7,2.4,5.7,5.7C29.8,61.9,27.4,64.4,24.2,64.4z"/> 
      </svg>
    </>
  )
}

export default TurtleSVGIcon;