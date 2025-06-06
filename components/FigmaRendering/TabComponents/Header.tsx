import { Pressable, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import CameraSVGIcon from "../svg/Camera";
import SpeakerSVGIcon from "../svg/Speaker";
import StrideSVGIcon from "../svg/Stride";
import { standardBorderRadius } from "@/constants/Styles";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { PreNavigateToTabs, ROUTE_DESTINATION } from "@/constants/Functionality";

interface Props {
  pageTitle: string, 
  displayStrideLengthButton: boolean, 
  displayCameraButton: boolean, 
  displayReadScreenButton: boolean, 
}

const Header = (props: Props) => {

  const router = useRouter();

  const handleStrideClicked = () => {
    PreNavigateToTabs(router);
    router.navigate("/navigation/stridelength");
  }

  const handleNavigationClicked = () => {
    PreNavigateToTabs(router);
    router.navigate("/navigation/obstaclesonly");    
  }

  return (
    <ThemedView style={styles.headerDiv}>
      <ThemedText style={styles.headerText} type="title">{props.pageTitle}</ThemedText>
      <ThemedView style={styles.headerButtonDiv}>
        {props.displayStrideLengthButton ? 
          <Pressable style={[styles.headerButton, styles.headerButton_Stride]} onPress={handleStrideClicked}>
            {/* <ThemedText>[Place Stride Icon Here]</ThemedText> */}
            <StrideSVGIcon width={50} height={50} backgroundColor={styles.headerButton_Stride.backgroundColor}/>
          </Pressable>
        : <></>}
        {props.displayCameraButton ? 
          <Pressable style={[styles.headerButton, styles.headerButton_Camera]} onPress={handleNavigationClicked}>
            {/* <ThemedText>[Place Camera Icon Here]</ThemedText> */}
            <CameraSVGIcon width={50} height={50} backgroundColor={styles.headerButton_Camera.backgroundColor} viewBoxScale={1.2}/>
          </Pressable>
        : <></>}
        {props.displayReadScreenButton ? 
          <Pressable style={[styles.headerButton, styles.headerButton_Speaker]}>
            {/* <ThemedText>[Place Speaker Icon Here]</ThemedText> */}
            <SpeakerSVGIcon width={50} height={50} backgroundColor={styles.headerButton_Speaker.backgroundColor} strokeWidth={"3"} strokeColor={"rgb(255,255,255)"} viewBoxScale={1.2}/>
          </Pressable>
        : <></>}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerDiv: {
    width: "100%",
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "flex-end",
    paddingBottom: 4,
    borderBottomColor: Colors.lightgrey,
    borderBottomWidth: 1, 
    borderStyle: "solid", 
  }, 
  headerButtonDiv: {
    flex: 1, 
    flexDirection: "row", 
    justifyContent: "flex-end", 
    gap: "2%",
    paddingRight: "2%",
  },
  headerButton: {
    borderBottomLeftRadius: standardBorderRadius, 
    borderColor: Colors.black, 
    borderWidth: 1, 
    borderStyle: "solid",
  }, 
  headerButton_Stride: {
    backgroundColor: "#34C759",
  },
  headerButton_Camera: {
    backgroundColor: "#FBBC05",
  },
  headerButton_Speaker: {
    backgroundColor: "#2C2C2C",
  },
  headerText: {
    
  }
})

export default Header;