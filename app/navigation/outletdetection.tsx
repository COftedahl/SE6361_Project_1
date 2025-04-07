import NavScreenContentManager from "@/components/FigmaRendering/NavigationScreenComponents/NavScreenContentManager";
import { ThemedText } from "@/components/FigmaRendering/ThemedText";

const OutletDetectionScreen = () => {

  return (
    <NavScreenContentManager 
    destinationText={"Outlet Detection"} instructions={{
      showInstructions: true,
      majorInstructions: "Walk 15 steps forward",
      minorInstructions: "Turn slight left",
    }}>
      <ThemedText>hello</ThemedText>
    </NavScreenContentManager>
  )
}

export default OutletDetectionScreen;