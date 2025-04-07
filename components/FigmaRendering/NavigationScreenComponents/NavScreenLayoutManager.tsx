import { sectionHorizontalPadding } from "@/constants/Styles";
import Header from "../TabComponents/Header";
import { ThemedView } from "../ThemedView";
import { Pressable, StyleSheet } from 'react-native';
import { Colors } from "@/constants/Colors";
import XSVGIcon from "../svg/XIcon";
import { ReactNode, useState } from "react";
import CheckmarkSVGIcon from "../svg/Checkmark";
import { useRouter } from "expo-router";
import { PreNavigateToTabs } from "@/constants/Functionality";
import HelpSVGIcon from "../svg/Help";
import HelpModalScreen from "../HelpModalScreen";

interface NavScreenLayoutManagerProps {
  children?: ReactNode,
}

const NavScreenLayoutManager = (props: NavScreenLayoutManagerProps) => {

  const SVGIconDimensions = 40;

  const [showHelpScreen, setShowHelpScreen] = useState<boolean>(false);

  const handleHelpClicked = () => {
    setShowHelpScreen(true);
  }

  const handleClosePopup = () => {
    setShowHelpScreen(false);
  }

  return (
    <ThemedView style={styles.screenContainer}>
      <Header pageTitle={"Navigation"} displayStrideLengthButton={false} displayCameraButton={false} displayReadScreenButton={true}/>
      <ThemedView style={styles.contentDivNoPadding}>
        <ThemedView style={styles.contentDiv}>
          {props.children}
        </ThemedView>
        {showHelpScreen && <HelpModalScreen closePopup={handleClosePopup}/>}
      </ThemedView>
      
      <ThemedView style={styles.helpButtonDiv}>
        <Pressable onPress={handleHelpClicked}>
          <HelpSVGIcon width={SVGIconDimensions} height={SVGIconDimensions} strokeWidth={"6"}/>
        </Pressable>
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
  contentDivNoPadding: {
    flexGrow: 1,
    position: "relative", 
  }, 
  contentDiv: {
    flexGrow: 1,
    borderWidth: sectionHorizontalPadding, 
    borderColor: Colors.white,
    position: "relative", 
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