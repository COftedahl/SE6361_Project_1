import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import { Stack } from "expo-router";


const NotFoundScreen = () => {


  return (
    <ThemedView>
      <Stack.Screen options={{title: "Page Not Found"}}/>
      <ThemedText>
        You encountered an error. 
      </ThemedText>
    </ThemedView>
  )
}

export default NotFoundScreen;