import CheckmarkSVGIcon from "@/components/FigmaRendering/svg/Checkmark";
import SpeakerSVGIcon from "@/components/FigmaRendering/svg/Speaker";
import XSVGIcon from "@/components/FigmaRendering/svg/XIcon";
import Header from "@/components/FigmaRendering/TabComponents/Header";
import TabLayoutManager from "@/components/FigmaRendering/TabComponents/TabLayoutManager";
import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import { AvailableLocationColorNames, Colors } from "@/constants/Colors";
import { BaseFontSize } from "@/constants/Font";
import Location from "@/components/FigmaRendering/Location";
import { inputBorderRadius, inputPadding, sectionHorizontalPadding } from "@/constants/Styles";
import { Pressable, StyleSheet, TextInput } from "react-native";
import { Link, useRouter } from "expo-router";
import { PreNavigateToTabs } from "@/constants/Functionality";

const AddRouteScreen = () => {

  const iconDimensions = 40;
  const iconStrokeWidth = "8";

  const router = useRouter();

  const handleClosePressed = () => {
    PreNavigateToTabs(router);
  }

  const handleConfirmPressed = () => {
    PreNavigateToTabs(router);
  }

  return (
    <>
      <Header pageTitle={"Add Route"} displayStrideLengthButton={false} displayCameraButton={false} displayReadScreenButton={true}/>
      <ThemedView style={{width: "100%", height: "100%"}}>
      <TabLayoutManager pageTitle={"Add Route"} useGestureHandler={false} headerOptions={{
          displayStrideLengthButton: false,
          displayCameraButton: false,
          displayReadScreenButton: true
        }}>
        <ThemedView style={styles.screenDiv}>
          <ThemedView style={styles.topIconsDiv}>
            <Pressable onPress={handleClosePressed}>
              <XSVGIcon width={iconDimensions} height={iconDimensions} strokeWidth={iconStrokeWidth} />
            </Pressable>
            <Pressable onPress={handleConfirmPressed}>
              <CheckmarkSVGIcon width={iconDimensions} height={iconDimensions} viewBoxScale={0.87} strokeWidth={iconStrokeWidth} />
            </Pressable>
          </ThemedView>
          <ThemedText style={styles.sectionTitleText}>
            Route Name
          </ThemedText>
          <ThemedView style={styles.inputContainerDiv}>
            <SpeakerSVGIcon width={iconDimensions} height={iconDimensions}/>
            <TextInput placeholder={"Route Name"} style={styles.textInput} placeholderTextColor={Colors.lightgrey}/>
          </ThemedView>
          <ThemedText style={styles.sectionTitleText}>
            Color
          </ThemedText>
          <ThemedView style={styles.colorAreaDiv}>
            {AvailableLocationColorNames.map((colorName: string) => {
              return (
                <Pressable key={colorName} style={styles.colorBox}>
                  <Location name={""} width={150} height={150} displaySpeaker={false} includePlusSign={false} color={(Colors as any)[colorName]} textLocation={"OUTSIDE"}/>
                </Pressable>
              )
            })}
          </ThemedView>
        </ThemedView>
      </TabLayoutManager>
      </ThemedView>
    </>
  )
}

const styles = StyleSheet.create({
  screenDiv: {
    width: "100%", 
    height: "100%", 
    flexDirection: "column", 
    justifyContent: "flex-start",
  }, 
  topIconsDiv: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    width: "100%", 
    marginBottom: 15,
  },
  sectionTitleText: {
    fontWeight: 700,
    fontSize: 2 * BaseFontSize, 
    lineHeight: 30,
    marginTop: 30, 
  }, 
  inputContainerDiv: {
    display: "flex", 
    flexDirection: "row", 
    width: "100%", 
    alignItems: "center", 
    borderWidth: 1, 
    borderColor: Colors.lightgrey,
    borderRadius: inputBorderRadius, 
    paddingLeft: inputPadding, 
    marginVertical: inputPadding, 
  },
  textInput: {
    padding: inputPadding, 
    borderRadius: inputBorderRadius, 
    flexGrow: 1, 
    fontSize: 1.5 * BaseFontSize, 
  }, 
  colorAreaDiv: {
    width: "100%", 
    flexDirection: "row", 
    flexWrap: "wrap",
    justifyContent: "center", 
  },
  colorBox: {
    boxSizing: "content-box",
    margin: "auto",  
  }
})

export default AddRouteScreen;