import NavScreenContentManager from "@/components/FigmaRendering/NavigationScreenComponents/NavScreenContentManager";
import NavScreenLayoutManager from "@/components/FigmaRendering/NavigationScreenComponents/NavScreenLayoutManager";
import { ThemedText } from "@/components/FigmaRendering/ThemedText";

const SelectRouteScreen = () => {
  
  return (
    <NavScreenContentManager destinationText={"ECSS 2.306"} instructions={{
      showInstructions: true,
      majorInstructions: "Walk 15 steps forward",
      minorInstructions: "Turn slight left",
    }}>
      <ThemedText>hello</ThemedText>
    </NavScreenContentManager>
  )
}

export default SelectRouteScreen;