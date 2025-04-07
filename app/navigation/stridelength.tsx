import NavScreenContentManager from "@/components/FigmaRendering/NavigationScreenComponents/NavScreenContentManager";
import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import { Colors } from "@/constants/Colors";

const ChooseRouteScreen = () => {

  return (
    <NavScreenContentManager destinationText={"Stride Length Calibration"} instructions={{
      showInstructions: true,
      majorInstructions: "Walk 10 steps forward",
    }}>
      <ThemedText>hello</ThemedText>
    </NavScreenContentManager>
  )
}

export default ChooseRouteScreen;