import { BaseFontSize, BaseFontWeight } from "@/constants/Font";
import SpeakerSVGIcon from "./svg/Speaker";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { DimensionValue, Pressable, StyleSheet } from 'react-native';
import { sectionHorizontalPadding, standardBorderRadius } from "@/constants/Styles";
import { Colors } from "@/constants/Colors";
import PlusSVGIcon from "./svg/Plus";
import { useRouter } from "expo-router";

export interface LocationProps {
  name: string, 
  width: "FULL" | DimensionValue, 
  height?: DimensionValue | undefined, 
  includePlusSign: boolean, 
  color: string, 
  textLocation: "INSIDE" | "OUTSIDE", 
  displaySpeaker?: boolean, 
}

const DEFAULT_BORDER_RADIUS = standardBorderRadius;
const DEFAULT_MARGIN = sectionHorizontalPadding;
const DEFAULT_PADDING = 10;

const Location = (props: LocationProps) => {

  const DEFAULT_HEIGHT = (((props.textLocation === "INSIDE") && props.includePlusSign) ? 110 : 80);
  const PLUS_SIGN_LINK_DESTINATION = "./addroute";
  const router = useRouter();
  const INNER_TEXT_STYLE = {
    fontSize: 2 * BaseFontSize,
    fontWeight: 600 as any, 
    letterSpacing: 0.5,//adds on letter spacing
    flexBasis: "65%",
    lineHeight: 30,
  }
  
  const OUTER_TEXT_STYLE = {
    fontSize: 1.3 * BaseFontSize,
    fontWeight: 500 as any, 
    letterSpacing: 0.5,//adds on letter spacing
    flexBasis: "0",
    lineHeight: 20,
  }

  const handlePlusSignClicked = (e: any) => {
    console.log("Plus sign clicked");
    e.preventDefault();
    e.stopPropagation();
    router.navigate(PLUS_SIGN_LINK_DESTINATION);
  }

  return (
    <ThemedView style={
      [
        styles.wrapperStyle, 
        {
          width: ( props.width == "FULL" ? "100%" : props.width), 
          boxSizing: ( props.textLocation === "INSIDE" ? "border-box" : "content-box" ),
        }
      ]}>
      <InnerLocationContent {...props}/>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  wrapperStyle: {
    padding: DEFAULT_MARGIN, 
    backgroundColor: Colors.transparent,
  },
  viewStyles: {
    borderRadius: DEFAULT_BORDER_RADIUS,
    padding: DEFAULT_PADDING,
    paddingTop: DEFAULT_PADDING - 1,
    boxSizing: "border-box",
    flexDirection: "row",
  }, 
  textStyles: {

  }, 
  rightDivStyles: {
    flexGrow: 1,
    flexDirection: "column", 
    alignItems: "flex-end",
    backgroundColor: "none",
  }, 
  outerDivStyles: {
    
  }
})

export default Location;

export const InnerLocationContent = (props: LocationProps) => {

  const DEFAULT_HEIGHT = (((props.textLocation === "INSIDE") && props.includePlusSign) ? 110 : 80);
  const PLUS_SIGN_LINK_DESTINATION = "/addroute";
  const router = useRouter();
  const INNER_TEXT_STYLE = {
    fontSize: 2 * BaseFontSize,
    fontWeight: 600 as any, 
    letterSpacing: 0.5,//adds on letter spacing
    flexBasis: "65%",
    lineHeight: 30,
  }
  
  const OUTER_TEXT_STYLE = {
    fontSize: 1.3 * BaseFontSize,
    fontWeight: 500 as any, 
    letterSpacing: 0.5,//adds on letter spacing
    flexBasis: "0",
    lineHeight: 20,
  }

  const handlePlusSignClicked = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    router.navigate(PLUS_SIGN_LINK_DESTINATION);
  }

  return (
    <>
    <ThemedView
        style={
          [
            styles.viewStyles, 
            {
              height: props.height ?? DEFAULT_HEIGHT,
              width: ( props.width == "FULL" ? "100%" : props.width), 
              backgroundColor: props.color, 

            }, 
            
          ]
        }
      >
        {props.textLocation === "INSIDE" 
        ?
          <>
            <ThemedText 
              style={
                [
                  styles.textStyles, 
                  (props.textLocation == "INSIDE" ? {...INNER_TEXT_STYLE} : {})
                ]
              }
            >
              {props.name}
            </ThemedText>
            <ThemedView 
              style={
                [
                  styles.rightDivStyles, 
                  {
                    justifyContent: (props.includePlusSign ? "space-between" : "flex-end"),
                  }
                ]
              }
            >
              {props.includePlusSign 
              ? 
              <Pressable onPress={handlePlusSignClicked}>
                <PlusSVGIcon width={40} height={40} strokeWidth={"8"}/>
              </Pressable>
              :
                <></>
              }
              {props.displaySpeaker === undefined || props.displaySpeaker === true ? 
                <SpeakerSVGIcon width={40} height={40} viewBoxScale={0.8}/>
                :
                <></>
              }
            </ThemedView>
          </>
        :
          <></>
        }
      </ThemedView>
      {props.textLocation === "OUTSIDE" 
      ?
        <>
          <ThemedView style={styles.outerDivStyles}>
            {props.displaySpeaker === undefined || props.displaySpeaker === true ? 
              <SpeakerSVGIcon width={50} height={40} viewBoxScale={0.8}/>
              :
              <></>
            }
            <ThemedText 
              style={
                [
                  styles.textStyles, 
                  (props.textLocation == "OUTSIDE" ? {...OUTER_TEXT_STYLE} : {})
                ]
              }
            >
              {props.name}
            </ThemedText>
          </ThemedView>
        </>
      :
        <></>
      }
    </>
  )
}

// <ThemedView
//         style={
//           [
//             styles.viewStyles, 
//             {
//               height: props.height ?? DEFAULT_HEIGHT,
//               width: ( props.width == "FULL" ? "100%" : props.width), 
//               backgroundColor: props.color, 

//             }, 
            
//           ]
//         }
//       >
//         {props.textLocation === "INSIDE" 
//         ?
//           <>
//             <ThemedText 
//               style={
//                 [
//                   styles.textStyles, 
//                   (props.textLocation == "INSIDE" ? {...INNER_TEXT_STYLE} : {})
//                 ]
//               }
//             >
//               {props.name}
//             </ThemedText>
//             <ThemedView 
//               style={
//                 [
//                   styles.rightDivStyles, 
//                   {
//                     justifyContent: (props.includePlusSign ? "space-between" : "flex-end"),
//                   }
//                 ]
//               }
//             >
//               {props.includePlusSign 
//               ? 
//               <Pressable onPress={handlePlusSignClicked}>
//                 <PlusSVGIcon width={40} height={40} strokeWidth={"8"}/>
//               </Pressable>
//               :
//                 <></>
//               }
//               {props.displaySpeaker === undefined || props.displaySpeaker === true ? <SpeakerSVGIcon width={40} height={40} viewBoxScale={0.8}/> : <></>}
//             </ThemedView>
//           </>
//         :
//           <></>
//         }
//       </ThemedView>
//       {props.textLocation === "OUTSIDE" 
//       ?
//         <>
//           <ThemedView style={styles.outerDivStyles}>
//             {props.displaySpeaker === undefined || props.displaySpeaker === true ? <SpeakerSVGIcon width={50} height={40} viewBoxScale={0.8}/> : <></>}
//             <ThemedText 
//               style={
//                 [
//                   styles.textStyles, 
//                   (props.textLocation == "OUTSIDE" ? {...OUTER_TEXT_STYLE} : {})
//                 ]
//               }
//             >
//               {props.name}
//             </ThemedText>
//           </ThemedView>
//         </>
//       :
//         <></>
//       }