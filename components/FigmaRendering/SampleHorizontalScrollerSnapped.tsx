import { StyleSheet, ScrollView } from 'react-native';
import { ThemedView } from './ThemedView';
import { Colors } from '@/constants/Colors';
import Location from "@/components/FigmaRendering/Location";

const SampleHorizontalScrollerSnapped = () => {

  return (
    <ThemedView style={styles.centeredRow}>
      {/* <ScrollView style={styles.favoriteLocationsDiv}  */}
      <ThemedView style={styles.favoriteLocationsDiv}
        // horizontal
        // snapToInterval={80}
        // snapToAlignment="center"
        // decelerationRate="fast"
      > 
        <Location name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.golden} textLocation={"OUTSIDE"} />
        <Location name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.green} textLocation={"OUTSIDE"} />
        <Location name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.red} textLocation={"OUTSIDE"} />
        <Location name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.orange} textLocation={"OUTSIDE"} />
        <Location name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.green} textLocation={"OUTSIDE"} />
        <Location name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.blue} textLocation={"OUTSIDE"} />
      {/* </ScrollView> */}
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  favoriteLocationsDiv: {
    // flexDirection: "row", 
    // flexWrap: "wrap",
    // justifyContent: "flex-start", 
    // width: "auto",
    width: 300, 
    // maxWidth: 100, 
    // minWidth: 100, 
    // padding: 0, 
  }, 
  centeredRow: {
    // flexDirection: "row", 
    width: "100%", 
    maxWidth: "100%", 
    minWidth: "100%", 
    // overflow: "scroll",
    // flex: 1, 
  }
})

export default SampleHorizontalScrollerSnapped;