import { Colors } from "@/constants/Colors";
import { ThemedView } from "./ThemedView";
import { Pressable } from "react-native";
import Location from "./Location";
import { StyleSheet } from "react-native";
import { inputBorderRadius, standardBorderRadius } from "@/constants/Styles";

interface Props {
  overlayActive: boolean, 
  handleBlockClicked: () => void, 
  overlayColor?: string, 
  blockColor: string, 
  key?: number, 
}

const OverlaidColorBlock = (props: Props) => {

  const defaultOverlayColor = Colors.black;
  // console.log(props.overlayColor);

  const finalProps: Props = {
    ...props, 
    overlayColor: ((props.overlayColor !== undefined) && (props.overlayColor.length > 1)) ? props.overlayColor : defaultOverlayColor,
  }

  return (
    <ThemedView key={0} style={styles.colorBox}>
      <Pressable onPress={() => finalProps.handleBlockClicked()}>
        <Location name={""} width={150} height={150} displaySpeaker={false} includePlusSign={false} color={props.blockColor} textLocation={"OUTSIDE"}/>
        {props.overlayActive && 
          <ThemedView style={[styles.overlayDiv, {borderColor: finalProps.overlayColor}]} >
            <ThemedView style={[styles.overlayDiv_cornerDiv, 
              {borderLeftColor: finalProps.overlayColor}
              ]}/>
          </ThemedView>
        }
      </Pressable>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  colorBox: {
    boxSizing: "content-box",
    margin: "auto", 
  }, 
  overlayDiv: {
    borderWidth: 3, 
    position: "absolute", 
    top: 10, 
    bottom: 10, 
    left: 10, 
    right: 10, 
    backgroundColor: Colors.transparent, 
    borderRadius: standardBorderRadius, 
    // paddingTop: 5, 
    // paddingLeft: 5, 
  }, 
  overlayDiv_cornerDiv: {
  //   position: "absolute",
  //   width: 10, 
  //   height: 10, 
  //   borderBottomRightRadius: "100%",
  borderLeftWidth: 30, 
  borderBottomWidth: 30, 
  borderBottomColor: Colors.transparent, 
  height: 0,
  width: 0,
  position: "absolute",
  left: -1,
  top: -1, 
  backgroundColor: Colors.transparent, 
  }, 
})

export default OverlaidColorBlock;