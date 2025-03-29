import { sectionHorizontalPadding } from "@/constants/Styles";
import Header from "../TabComponents/Header";
import { ThemedView } from "../ThemedView";
import { StyleSheet } from 'react-native';
import { Colors } from "@/constants/Colors";
import XSVGIcon from "../svg/XIcon";
import { ReactNode } from "react";
import CheckmarkSVGIcon from "../svg/Checkmark";

interface NavScreenLayoutManagerProps {
  topButtons?: ReactNode,
  children?: ReactNode,
}

const NavScreenLayoutManager = (props: NavScreenLayoutManagerProps) => {

  const SVGIconDimensions = 40;

  return (
    <ThemedView style={styles.screenContainer}>
      <Header pageTitle={"Navigation"} displayStrideLengthButton={false} displayCameraButton={false} displayReadScreenButton={true}/>
      <ThemedView style={styles.contentDiv}>
        <ThemedView style={styles.topButtonsDiv}>
          <XSVGIcon width={SVGIconDimensions} height={SVGIconDimensions} strokeWidth={"10"}/>
          <ThemedView style={styles.topButtonsDiv_Right}>
            {props.topButtons}
          </ThemedView>
        </ThemedView>
        {props.children}
      </ThemedView>
      <ThemedView style={styles.helpButtonDiv}>
        <CheckmarkSVGIcon width={SVGIconDimensions} height={SVGIconDimensions}/>
      </ThemedView>
    </ThemedView>  
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "flex-start", 
    height: "100%", 
  },
  contentDiv: {
    flexGrow: 1,
    borderWidth: sectionHorizontalPadding, 
    borderColor: Colors.white,
    position: "relative", 
  }, 
  topButtonsDiv: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between",
    width: "100%", 
    marginBottom: 18,
    position: "absolute", 
    top: 0, 
    zIndex: 1,
    backgroundColor: Colors.transparent, 
  }, 
  topButtonsDiv_Right: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "flex-end", 
  }, 
  helpButtonDiv: {
    position: "absolute", 
    bottom: 0, 
    left: 0, 
    borderRadius: "50%", 
    zIndex: 1, 
    padding: 5, 
  }
})

export default NavScreenLayoutManager;