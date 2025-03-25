import RangeInput from "@/components/FigmaRendering/RangeInput";
import TabLayoutManager from "@/components/FigmaRendering/TabComponents/TabLayoutManager";
import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import { Colors } from "@/constants/Colors";


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
        <RangeInput 
          min={0} 
          max={10} 
          step={1} 
          thumbShadowRadius={5} 
          thumbShadowColor={Colors.black} 
          inactiveRailShadowRadius={4} 
          inactiveRailColor={Colors.lightgrey}
          inactiveRailShadowColor={Colors.lightgrey} 
          inactiveRailShadowOffset={{width: 0, height: 2}}
          disableRange
        />
      </ThemedView>
    </TabLayoutManager>
  )
}

export default SettingsTab;