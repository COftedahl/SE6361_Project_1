/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const AvailableLocationColorNames = [
  "blue", 
  "dullblue",
  "darkgreen", 
  "green", 
  "golden", 
  "black",
  "red", 
  "orange",
]

export const BlackWhite_Contrasting_AvailableLocationColorNames = [
  "black", 
  "black", 
  "black", 
  "black", 
  "black", 
  "white", 
  "black", 
  "black", 
]

export const Contrasting_AvailableLocationColorNames = [
  "black", 
  "black", 
  "black", 
  "black", 
  "black", 
  "golden", 
  "black", 
  "black", 
]

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  }, 
  blue: "#32ADE6", 
  dullblue: "#167695",
  darkgreen: "#1FAF4A", 
  green: "#34C759", 
  golden: "#FBBC05", 
  black: "#2C2C2C",
  red: "#FF3B30", 
  orange: "#FF9500",
  darkgrey: "#555555",
  grey: "#757575",
  mediumgrey: "#BBBBBB",
  lightgrey: "#DDDDDD",
  white: "#FFFFFF", 
  palegrey: "#F5F5F5",
  transparent: "#00000000",
  transparentgrey: "#00000040"
};
