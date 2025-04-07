import { ReactNode } from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { inputBorderRadius, inputPadding } from "@/constants/Styles";
import { Colors } from "@/constants/Colors";
import { Pressable, StyleSheet } from 'react-native';
import { BaseFontSize } from "@/constants/Font";
import XSVGIcon from "../svg/XIcon";
import { useRouter } from "expo-router";
import { PreNavigateToTabs } from "@/constants/Functionality";

interface Props {
  destinationText: string, 
    instructions: {
      showInstructions?: boolean, 
      majorInstructions?: string, 
      minorInstructions?: string, 
    }
    children?: ReactNode,
    topButtons?: ReactNode,
}

const NavScreenContentManager = (props: Props) => {

  const router = useRouter();
  const SVGIconDimensions = 40;

  const handleXClicked = () => {
    PreNavigateToTabs(router);
    router.navigate("/");
  }

  return (
    <ThemedView style={styles.contentScreenWrapper}>
      <ThemedView style={styles.topButtonsDiv}>
        <Pressable onPress={handleXClicked}>
          <XSVGIcon width={SVGIconDimensions} height={SVGIconDimensions} strokeWidth={"10"}/>
        </Pressable>
        <ThemedView style={styles.topButtonsDiv_Right}>
          {props.topButtons}
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.destinationTitleDiv}>
        <ThemedText style={styles.destinationTitle_Text}>
          {props.destinationText}
        </ThemedText>
      </ThemedView>
      {(props.instructions && props.instructions.showInstructions && props.instructions.showInstructions === true) && 
        <ThemedView style={styles.instructionsDiv}>
          <ThemedText style={styles.instructions_majorText}>
            {(props.instructions.majorInstructions && props.instructions.majorInstructions.length > 0) ? props.instructions.majorInstructions : ""}
          </ThemedText>
          {props.instructions.minorInstructions && props.instructions.minorInstructions.length > 0 && 
            <ThemedText style={styles.instructions_minorText}>
              {props.instructions.minorInstructions}
            </ThemedText>
          }
        </ThemedView>
      }
      <ThemedView style={styles.mapDiv}>
        {props.children}
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  contentScreenWrapper: {
    width: "100%", 
    height: "100%", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
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
  destinationTitleDiv: {
    // height: 55,
    marginBottom: 25,
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "flex-start", 
    alignItems: "center", 
    width: "60%",
  }, 
  destinationTitle_Text: {
    fontWeight: 700, 
    fontSize: 2 * BaseFontSize, 
    margin: 8,
    textAlign: "center", 
  }, 
  instructionsDiv: {
    display: "flex", 
    flexDirection: "column", 
    paddingVertical: inputPadding, 
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: inputBorderRadius, 
    backgroundColor: Colors.lightgrey, 
    width: "100%", 
  }, 
  instructions_majorText: {
    fontWeight: 600, 
    fontSize: 1.2 * BaseFontSize, 
    margin: 2,
  }, 
  instructions_minorText: {
    fontSize: BaseFontSize, 
    color: Colors.darkgrey,
  }, 
  mapDiv: {
    flexGrow: 1, 
    borderRadius: inputBorderRadius, 
    borderWidth: 1, 
    borderColor: Colors.black, 
    marginTop: 10,
    backgroundColor: Colors.palegrey,
    width: "100%", 
  }, 
})

export default NavScreenContentManager;