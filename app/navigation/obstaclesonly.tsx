import NavScreenContentManager from "@/components/FigmaRendering/NavigationScreenComponents/NavScreenContentManager";
import OutletSVGIcon from "@/components/FigmaRendering/svg/OutletIcon";
import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import { Colors } from "@/constants/Colors";
import { PreNavigateToTabs } from "@/constants/Functionality";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

const ObstaclesOnlyScreen = () => {

  const router = useRouter();
  const SVGIconDimensions = 1.6*40;

  const handleOutletDetectionClicked = () => {
    PreNavigateToTabs(router);
    router.navigate("../navigation/outletdetection");
  }

  return (
    <NavScreenContentManager 
    topButtons={
      <>
        <Pressable onPress={handleOutletDetectionClicked} style={styles.outletIcon}>
          <OutletSVGIcon width={SVGIconDimensions} height={SVGIconDimensions} strokeWidth={"10"} strokeColor={Colors.red}/>
        </Pressable>
      </>
    } 
    destinationText={"Obstacle Avoidance"} instructions={{
      showInstructions: true,
      majorInstructions: "Table 15 steps ahead",
    }}>
      <ThemedText>hello</ThemedText>
    </NavScreenContentManager>
  )
}

const styles = StyleSheet.create({
  outletIcon: {
    marginTop: -10,
  }
})

export default ObstaclesOnlyScreen;