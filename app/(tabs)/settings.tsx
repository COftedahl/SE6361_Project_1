import RangeInput from "@/components/FigmaRendering/RangeInput";
import TabLayoutManager from "@/components/FigmaRendering/TabComponents/TabLayoutManager";
import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import { ThemedView } from "@/components/FigmaRendering/ThemedView";


const SettingsTab = () => {
  return (
    <TabLayoutManager pageTitle={""} headerOptions={{
      displayStrideLengthButton: true,
      displayCameraButton: true,
      displayReadScreenButton: true
    }}>
      <ThemedView>
        <ThemedText>
          abcd
        </ThemedText>
        <RangeInput min={0} max={10} step={1} disableRange/>
      </ThemedView>
    </TabLayoutManager>
  )
}

export default SettingsTab;