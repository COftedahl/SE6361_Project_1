import LinkedLocation from "@/components/FigmaRendering/LinkedLocation";
import NavScreenContentManager from "@/components/FigmaRendering/NavigationScreenComponents/NavScreenContentManager";
import NavScreenLayoutManager from "@/components/FigmaRendering/NavigationScreenComponents/NavScreenLayoutManager";
import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import { Colors } from "@/constants/Colors";

const ObstaclesOnlyScreen = () => {

  return (
    <NavScreenContentManager destinationText={"Obstacle Avoidance"} instructions={{
      showInstructions: true,
      majorInstructions: "Table 15 steps ahead",
    }}>
      <ThemedText>hello</ThemedText>
    </NavScreenContentManager>
  )
}

export default ObstaclesOnlyScreen;