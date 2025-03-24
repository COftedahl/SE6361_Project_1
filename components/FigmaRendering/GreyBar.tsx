import { DimensionValue } from "react-native";
import { ThemedView } from "./ThemedView"
import { StyleSheet } from 'react-native';
import { sectionHorizontalPadding, standardBorderRadius } from "@/constants/Styles";
import { Colors } from "@/constants/Colors";

interface Props {
  children?: React.ReactElement,
  transparentBackground?: boolean, 
  sticky?: boolean, 
  horizontalMargin?: DimensionValue | number, 
  margin?: DimensionValue | number, 
  marginTop?: DimensionValue | number, 
  height?: DimensionValue | number, 
  style?: StyleSheet.NamedStyles<any>, 
}

const GreyBar = (props: Props) => {

  return (
    <ThemedView 
      style={
        [
          styles.containerStyle, 
          {
            padding: props.margin ?? 9,
            paddingHorizontal: props.horizontalMargin ?? sectionHorizontalPadding, 
            paddingTop: props.marginTop ?? 0, 
            position: (props.sticky !== undefined ? ( props.sticky ? "sticky" : "static" ) : "static" ),
            height: props.height ?? 30, 
            backgroundColor: (props.transparentBackground ? Colors.transparent : Colors.white),
          }, 
        ]
      }
    >
      <ThemedView style={[styles.greyBarStyle, {...props.style}]}>
        {props.children}
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    boxSizing: "content-box",
  }, 
  greyBarStyle: {
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
  }
})

export default GreyBar;