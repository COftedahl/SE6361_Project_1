import { Colors } from "@/constants/Colors";
import { standardBorderRadius } from "@/constants/Styles";
import { TextInput, TextInputProps, StyleSheet, DimensionValue } from "react-native";
import { ThemedView } from "./ThemedView";
import MagnifyingGlassSVGIcon from "./svg/MagnifyingGlass";
import MicrophoneSVGIcon from "./svg/Microphone";

interface Props extends TextInputProps {
  margin?: DimensionValue | number,
  sticky: boolean, 
  transparentBackground: boolean, 
}

const Searchbar = (props: Props) => {

  return (
    <ThemedView 
      style={
        {
          paddingHorizontal: props.margin ?? 0, 
          position: (props.sticky ? "sticky" : "static"),
          top: 0, 
          zIndex: 1,
          backgroundColor: (props.transparentBackground ? Colors.transparent : Colors.white),
        }
      }
    >
      <ThemedView 
        style={
          [
            styles.gapHiderDivStyle, 
            {
              borderColor: (props.transparentBackground ? Colors.transparent : Colors.white),
            }
          ]
        } />
      <ThemedView style={styles.inputBarStyle}>
        <MagnifyingGlassSVGIcon width={20} height={20}/>
        <MicrophoneSVGIcon width={20} height={20}/>
        <TextInput {...props} style={styles.textInputStyle} placeholderTextColor={Colors.lightgrey}/>
      </ThemedView>
    </ThemedView>
  )
}

const TOP_BACKGROUND_OBSCURING_ZONE_SIZE = 5;

const styles = StyleSheet.create({
  gapHiderDivStyle: {
    width: "100%",
    borderWidth: 0,
    borderTopWidth: TOP_BACKGROUND_OBSCURING_ZONE_SIZE,
    top: -TOP_BACKGROUND_OBSCURING_ZONE_SIZE,
    boxSizing: "content-box", 
    position: "absolute", 
  },
  inputBarStyle: {
    width: "100%",
    padding: 5,
    borderColor: Colors.black, 
    borderWidth: 0, 
    borderStyle: "solid", 
    shadowColor: Colors.lightgrey, 
    marginBottom: 0,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 6,
    borderRadius: standardBorderRadius, 
    backgroundColor: Colors.palegrey,
    display: "flex", 
    flexDirection: "row",
  }, 
  textInputStyle: {
    width: "100%", 
  }
})

export default Searchbar;