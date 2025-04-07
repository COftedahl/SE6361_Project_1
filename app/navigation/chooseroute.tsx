import NavScreenContentManager from "@/components/FigmaRendering/NavigationScreenComponents/NavScreenContentManager";
import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import { Colors } from "@/constants/Colors";
import { PreNavigateToTabs } from "@/constants/Functionality";
import { inputBorderRadius, inputPadding } from "@/constants/Styles";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

const ChooseRouteScreen = () => {

  const router = useRouter();

  const handleRouteOptionClicked = () => {
    PreNavigateToTabs(router);
    router.navigate("./");
  }

  return (
    <NavScreenContentManager destinationText={"ECSS 2.306"} instructions={{
      showInstructions: true,
      majorInstructions: "Choose a route",
    }}>
      <ThemedView style={styles.mapDiv}>
        <Pressable onPress={handleRouteOptionClicked}>
          <ThemedView style={[styles.routeOptionDiv, {backgroundColor: Colors.golden,}]} >
            <ThemedText>Fastest Route - 8 minutes</ThemedText>
          </ThemedView>
        </Pressable>
        <Pressable onPress={handleRouteOptionClicked}>
          <ThemedView style={[styles.routeOptionDiv, {backgroundColor: Colors.blue,}]} >
            <ThemedText>Fewest Turns - 10 minutes</ThemedText>
          </ThemedView>
        </Pressable>
      </ThemedView>
    </NavScreenContentManager>
  )
}

const styles = StyleSheet.create({
  mapDiv: {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: Colors.transparent, 
    width: "100%", 
    height: "100%", 
  }, 
  pressable: {
    width: "50%", 
  }, 
  routeOptionDiv: {
    borderRadius: inputBorderRadius, 
    padding: inputPadding, 
    margin: 10,
    width: "100%", 
    borderWidth: 2, 
    borderColor: Colors.darkgrey, 
  }, 
})

export default ChooseRouteScreen;