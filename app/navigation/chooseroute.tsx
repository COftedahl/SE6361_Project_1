import LinkedLocation from "@/components/FigmaRendering/LinkedLocation";
import NavScreenContentManager from "@/components/FigmaRendering/NavigationScreenComponents/NavScreenContentManager";
import NavScreenLayoutManager from "@/components/FigmaRendering/NavigationScreenComponents/NavScreenLayoutManager";
import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import { Colors } from "@/constants/Colors";

const ChooseRouteScreen = () => {

  return (
    <NavScreenContentManager destinationText={"ECSS 2.306"} instructions={{
      showInstructions: true,
      majorInstructions: "Choose a route",
    }}>
      <ThemedText>hello</ThemedText>
    </NavScreenContentManager>
  )
}

export default ChooseRouteScreen;