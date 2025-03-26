import { Colors } from "@/constants/Colors";
import { inputBorderRadius, inputPadding, standardBorderRadius } from "@/constants/Styles";
import { TextInputProps, StyleSheet, TextInput } from "react-native";

interface Props extends TextInputProps
{

}

const StyledTextInput = (props: Props) => {

  const defaultPlaceholderTextColor = Colors.lightgrey;
  const finalPlaceholderTextColor = (props.placeholderTextColor ? props.placeholderTextColor : defaultPlaceholderTextColor);

  return (
    <TextInput {...props} style={{...styles.textInput, width: (props.style && (props.style as any).width ? (props.style as any).width : inputWidth)}} placeholderTextColor={finalPlaceholderTextColor}/>
  )
}

export const inputWidth = "60%";

const styles = StyleSheet.create({
  textInput: {
    borderRadius: inputBorderRadius, 
    borderWidth: 1, 
    borderColor: Colors.lightgrey, 
    padding: inputPadding, 
    // paddingVertical: 12,
    // width: inputWidth, 
  }, 
})

export default StyledTextInput;