import { ExternalPathString, Link, RelativePathString } from "expo-router";
import Location, { InnerLocationContent, LocationProps } from "./Location";
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";
import { StyleSheet } from 'react-native';
import { sectionHorizontalPadding } from "@/constants/Styles";

interface Props extends LocationProps {
  to: RelativePathString | ExternalPathString, 
}

const LinkedLocation = (props: Props) => {
  

  return (
    <ThemedView style={
      [
        styles.wrapperStyle, 
        {
          width: ( props.width == "FULL" ? "100%" : props.width), 
          boxSizing: ( props.textLocation === "INSIDE" ? "border-box" : "content-box" ),
        }
      ]}
    >
      <Link href={props.to}>
        {/* <Location {...props}/> */}
        <InnerLocationContent {...props}/>
      </Link>
    </ThemedView>
  )
}

const DEFAULT_MARGIN = sectionHorizontalPadding;

const styles = StyleSheet.create({
  wrapperStyle: {
    padding: DEFAULT_MARGIN, 
    backgroundColor: Colors.transparent,
  },
})

export default LinkedLocation;