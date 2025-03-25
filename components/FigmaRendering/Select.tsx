import Picker, { PickerSelectProps } from "react-native-picker-select";
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";
import DownArrow from "./svg/Arrows/DownArrow";
import { standardBorderRadius } from "@/constants/Styles";
import { DimensionValue, StyleSheet } from 'react-native';

interface Props extends PickerSelectProps{
  margin?: DimensionValue | number, 
  padding?: DimensionValue | number, 
  width?: DimensionValue | number, 
  height?: DimensionValue | number,
}

const Select = (props: Props) => {

  return (
    <ThemedView 
      style={
        {
          position: "relative", 
          width: (props.width ? props.width : "fit-content") as any, 
          height: (props.height ? props.height : "auto") as any, 
          margin: (props.margin ? props.margin : 0),
        }
      }
    >
      <Picker 
        {...props}
        Icon={() => <DownArrow strokeColor={Colors.grey} strokeWidthNumber={0}/>}
        style={
          {
            ...styles.selectStyles, 
            padding: (props.padding ? props.padding : 0),
          }
        }
      >
      </Picker>
    </ThemedView>
  )
}

const styles=StyleSheet.create({
  selectStyles: {
    inputIOS: {

    }, 
    inputAndroid: {

    }, 
    inputWeb: {
      alignSelf: "flex-start", 
      width: "auto",
      padding: 10,
      borderColor: Colors.lightgrey, 
      borderWidth: 1, 
      borderStyle: "solid", 
      borderRadius: standardBorderRadius, 
      backgroundColor: Colors.transparent,
      zIndex: 1,
      // position: "relative", 
      // backgroundImage: "none",
      MozAppearance: "none",
      WebkitAppearance: "none",
      appearance: "none",
      paddingRight: 50,
    }, 
    iconContainer: {
      right: 0,
      top: 7,
      zIndex: 0,
      // backgroundColor: Colors.white,
      // color: Colors.white,
    }
  } as any,
})

export default Select;