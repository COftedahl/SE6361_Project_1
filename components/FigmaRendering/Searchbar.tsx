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
          top: 0,
          position: (props.sticky ? "sticky" : "static"),
          zIndex: 1,
          backgroundColor: (props.transparentBackground ? Colors.transparent : Colors.white),
        }
      }
    >
      <ThemedView style={styles.inputBarStyle}>
        <MagnifyingGlassSVGIcon width={20} height={20}/>
        <MicrophoneSVGIcon width={20} height={20}/>
        <TextInput {...props} style={styles.textInputStyle} />
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
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
    
  }
})

export default Searchbar;