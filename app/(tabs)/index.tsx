import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import Location from "@/components/FigmaRendering/Location";
import { Colors } from '../../constants/Colors';
import TitleLink from "@/components/FigmaRendering/TitleLink";
import TabLayoutManager from "@/components/FigmaRendering/TabComponents/TabLayoutManager";
import { StyleSheet } from 'react-native';
import SampleHorizontalScroller from "@/components/FigmaRendering/SampleHorizontalScroller";

const HomeTab = () => {
  return (
    <TabLayoutManager pageTitle={"Home"} headerOptions={{
      displayStrideLengthButton: true,
      displayCameraButton: true,
      displayReadScreenButton: true
    }}>

      <ThemedView>
        <ThemedText>You found the home screen! </ThemedText>
        <Location name={"Recent Location"} width={"FULL"} includePlusSign={false} color={Colors.blue} textLocation={"INSIDE"}/>
        <TitleLink title={"Favorites"} destination={"./favorites"} />
        <ThemedView style={styles.centeredRow}>
          <ThemedView style={styles.favoriteLocationsDiv}>
            <Location name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.golden} textLocation={"OUTSIDE"} />
            <Location name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.green} textLocation={"OUTSIDE"} />
            <Location name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.red} textLocation={"OUTSIDE"} />
            <Location name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.orange} textLocation={"OUTSIDE"} />
            <Location name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.green} textLocation={"OUTSIDE"} />
            <Location name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.blue} textLocation={"OUTSIDE"} />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </TabLayoutManager>
  )
}

const styles = StyleSheet.create({
  favoriteLocationsDiv: {
    flexDirection: "row", 
    flexWrap: "wrap",
    justifyContent: "center", 
    
    // width: "100%",
    // alignSelf: "center",
  }, 
  centeredRow: {
    // flexDirection: "row", 
    // width: "100%", 
    // maxWidth: "100%", 
    // minWidth: "100%", 
    // flex: 1,

  }
})

export default HomeTab;