import { Colors } from "@/constants/Colors";
import { ThemedView } from "./ThemedView";
import { Pressable, StyleSheet } from "react-native";
import { inputBorderRadius, inputPadding, sectionHorizontalPadding } from "@/constants/Styles";
import { ThemedText } from "./ThemedText";
import { BaseFontSize } from "@/constants/Font";

interface Props {
  closePopup: () => void, 
}

const HelpModalScreen = (props: Props) => {

  const handleCardPressed = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <Pressable onPress={props.closePopup} style={styles.screenPressable}>
      <ThemedView style={styles.modalScreen}>
        <Pressable onPress={handleCardPressed} style={styles.cardPressable}>
          <ThemedView style={styles.contentCard}>
            <ThemedText style={styles.cardTitle}>
              Navigation Legend
            </ThemedText>
            <ThemedView style={styles.cardContentDiv}>
              <ThemedText style={styles.cardContent_Text}>
                Text 1
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </Pressable>
      </ThemedView>
    </Pressable>
    
  )
}

const cardDimensionScale = "80%";

const styles = StyleSheet.create({
  screenPressable: {
    zIndex: 2, 
    position: "absolute", 
    width: "100%", 
    height: "100%", 
  }, 
  modalScreen: {
    width: "100%", 
    height: "100%", 
    zIndex: 2, 
    backgroundColor: Colors.transparentgrey, 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
  }, 
  cardPressable: {
    width: cardDimensionScale, 
    height: cardDimensionScale, 
  }, 
  contentCard: {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    width: "100%", 
    height: "100%", 
    padding: inputPadding, 
    backgroundColor: Colors.white, 
    borderRadius: inputBorderRadius, 
  }, 
  cardTitle: {
    fontWeight: 700, 
    fontSize: 2 * BaseFontSize, 
    marginBottom: 8,
    textAlign: "center", 
    lineHeight: 2 * BaseFontSize,
  }, 
  cardContentDiv: {
    flexGrow: 1, 
    width: "100%", 
  }, 
  cardContent_Text: {
    paddingTop: 2 * inputPadding, 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "flex-start", 
  }, 
})

export default HelpModalScreen;