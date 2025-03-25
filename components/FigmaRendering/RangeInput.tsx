import RnRangeSlider, { SliderProps } from "rn-range-slider";
import { DimensionValue, StyleSheet, TouchableHighlight } from 'react-native';
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";
import { useState } from "react";

// Visit https://www.npmjs.com/package/rn-range-slider for documentation

interface Props extends Partial<SliderProps> {
  min: number, 
  max: number, 
  step: number, 
  thumbColor?: string, 
  activeRailColor?: string, 
  inactiveRailColor?: string, 
  thumbPadding?: DimensionValue | number, 
  thumbBorderRadius?: DimensionValue | number, 
  activeThumbColor?: string, 
  activeRailPadding?: DimensionValue | number, 
  inactiveRailPadding?: DimensionValue | number, 
  thumbShadowColor?: string, 
  thumbShadowOffset?: {width: DimensionValue | number, height: DimensionValue | number}, 
  thumbShadowRadius?: DimensionValue | number, 
  inactiveRailShadowColor?: string, 
  inactiveRailShadowOffset?: {width: DimensionValue | number, height: DimensionValue | number}, 
  inactiveRailShadowRadius?: DimensionValue | number, 
  activeRailShadowColor?: string, 
  activeRailShadowOffset?: {width: DimensionValue | number, height: DimensionValue | number}, 
  activeRailShadowRadius?: DimensionValue | number, 
}

const RangeInput = (props: Props) => {

  const defaultActiveThumbColor: string = Colors.dullblue;

  const defaultThumbProps: ThumbProps = {
    padding: 10, 
    borderRadius: "50%", 
    backgroundColor: Colors.blue, 
    shadowColor: Colors.black, 
    shadowOffset: {width: 0, height: 0,}, 
    shadowRadius: 5,
    shadowOpacity: 1,
  }
  const defaultInactiveRailProps: RailProps = {
    padding: 1,
    width: "100%",
    backgroundColor: Colors.lightgrey, 
    shadowColor: Colors.transparent, 
    shadowOffset: {width: 0, height: 0,}, 
    shadowRadius: 0,
  }
  const defaultRailSelectedProps: RailSelectedProps = {
    padding: 2,
    backgroundColor: Colors.blue, 
    shadowColor: Colors.transparent, 
    shadowOffset: {width: 0, height: 0,}, 
    shadowRadius: 0,
  }

  const finalThumbProps: ThumbProps = {
    ...defaultThumbProps, 
    padding: (props.thumbPadding ? props.thumbPadding : defaultThumbProps.padding), 
    borderRadius: (props.thumbBorderRadius ? props.thumbBorderRadius : defaultThumbProps.borderRadius), 
    backgroundColor: (props.thumbColor ? props.thumbColor : defaultThumbProps.backgroundColor), 
    shadowColor: (props.thumbShadowColor ? props.thumbShadowColor : defaultThumbProps.shadowColor), 
    shadowOffset: (props.thumbShadowOffset ? props.thumbShadowOffset : defaultThumbProps.shadowOffset), 
    shadowRadius: (props.thumbShadowRadius ? props.thumbShadowRadius : defaultThumbProps.shadowRadius), 
  }

  const finalInactiveRailProps: RailProps = {
    ...defaultInactiveRailProps, 
    padding: (props.inactiveRailPadding ? props.inactiveRailPadding : defaultInactiveRailProps.padding), 
    backgroundColor: (props.inactiveRailColor ? props.inactiveRailColor : defaultInactiveRailProps.backgroundColor), 
    shadowColor: (props.inactiveRailShadowColor ? props.inactiveRailShadowColor : defaultInactiveRailProps.shadowColor), 
    shadowOffset: (props.inactiveRailShadowOffset ? props.inactiveRailShadowOffset : defaultInactiveRailProps.shadowOffset), 
    shadowRadius: (props.inactiveRailShadowRadius ? props.inactiveRailShadowRadius : defaultInactiveRailProps.shadowRadius), 
  }

  const finalRailSelectedProps: RailSelectedProps = {
    ...defaultRailSelectedProps, 
    padding: (props.activeRailPadding ? props.activeRailPadding : defaultRailSelectedProps.padding), 
    backgroundColor: (props.activeRailColor ? props.activeRailColor : defaultRailSelectedProps.backgroundColor), 
    shadowColor: (props.activeRailShadowColor ? props.activeRailShadowColor : defaultRailSelectedProps.shadowColor), 
    shadowOffset: (props.activeRailShadowOffset ? props.activeRailShadowOffset : defaultRailSelectedProps.shadowOffset), 
    shadowRadius: (props.activeRailShadowRadius ? props.activeRailShadowRadius : defaultRailSelectedProps.shadowRadius), 
  }

  const finalActiveThumbColor: string = (props.activeThumbColor ? props.activeThumbColor : defaultActiveThumbColor);

  const [thumbColor, setThumbColor] = useState<string>(finalThumbProps.backgroundColor);

  const handleSliderTouched = () => {
    setThumbColor(finalActiveThumbColor);
  }

  const handleSliderReleased = () => {
    setThumbColor(finalThumbProps.backgroundColor);
  }

  return (
    <RnRangeSlider 
      renderThumb={() => <Thumb {...finalThumbProps} backgroundColor={thumbColor} />} 
      renderRail={() => <Rail {...finalInactiveRailProps} />} 
      renderRailSelected={() => <RailSelected {...finalRailSelectedProps} />}
      onTouchStart={handleSliderTouched}
      onTouchEnd={handleSliderReleased}
      {...props}
    />
  )
}

interface ThumbProps {
  padding: DimensionValue | number, 
  borderRadius: DimensionValue | number, 
  backgroundColor: string, 
  shadowColor: string, 
  shadowOffset: {width: DimensionValue | number, height: DimensionValue | number,}, 
  shadowRadius: DimensionValue | number,
  shadowOpacity: DimensionValue | number,
}

const Thumb = (props: ThumbProps) => {
  return (
    <ThemedView style={{...props} as any}/>
  )
  // <TouchableHighlight style={{...props} as any} >
  //     <ThemedView></ThemedView>
  //   </TouchableHighlight> 
}

interface RailProps {
  padding: DimensionValue | number,
  width: DimensionValue | number,
  backgroundColor: string, 
  shadowColor: string, 
  shadowOffset: {width: DimensionValue | number, height: DimensionValue | number}, 
  shadowRadius: DimensionValue | number, 
}

const Rail = (props: RailProps) => {
  return (
    <ThemedView style={{...props} as any}/>
  )
}

interface RailSelectedProps {
  padding: DimensionValue | number,
  backgroundColor: string, 
  shadowColor: string, 
  shadowOffset: {width: DimensionValue | number, height: DimensionValue | number}, 
  shadowRadius: DimensionValue | number, 
}

const RailSelected = (props: RailSelectedProps) => {
  return (
    <ThemedView style={{...props} as any}/>
  )
}

export default RangeInput;