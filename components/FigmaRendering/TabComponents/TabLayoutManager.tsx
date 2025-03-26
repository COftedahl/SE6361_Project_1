import { StyleSheet, View } from "react-native";
// import Header from "./Header";
import { Colors } from "@/constants/Colors";
import GestureRecognizer from "react-native-swipe-gestures";
import { TabLayoutArray } from "@/app/(tabs)/_layout";
import { RelativePathString, useRouter } from "expo-router";

interface Props {
  pageTitle: string, 
  headerOptions: {
    displayStrideLengthButton: boolean, 
    displayCameraButton: boolean, 
    displayReadScreenButton: boolean, 
  }, 
  children?: React.ReactElement, 
  
}

const TabLayoutManager = (props: Props) => {

  const router = useRouter();

  const gestureRecognizerConfig = {
    velocityThreshold: 0.2,
    directionalOffsetThreshold: 40
  };

  const handleSwipeLeft = (state: any) => {
    // console.log(state);
    let newTabIndex: number = TabLayoutArray.findIndex((tab: {tabName: string, pathname: string, route: RelativePathString}) => window.location.pathname === tab.pathname);
    newTabIndex = (newTabIndex + 1 >= TabLayoutArray.length ? TabLayoutArray.length - 1 : newTabIndex + 1);
    const newURL: RelativePathString = "." + TabLayoutArray[newTabIndex].pathname as RelativePathString;
    // console.log(newURL);
    router.navigate(newURL);
  }

  const handleSwipeRight = (state: any) => {
    // console.log(state);
    let newTabIndex: number = TabLayoutArray.findIndex((tab: {tabName: string, pathname: string, route: RelativePathString}) => window.location.pathname === tab.pathname);
    newTabIndex = (newTabIndex - 1 < 0 ? 0 : newTabIndex - 1);
    const newURL: RelativePathString = "." + TabLayoutArray[newTabIndex].pathname as RelativePathString;
    // console.log(newURL);
    router.navigate(newURL);
  }

  return (
    <View style={styles.appContainer}>
      <GestureRecognizer
        onSwipeLeft={(state) => handleSwipeLeft(state)}
        onSwipeRight={(state) => handleSwipeRight(state)}
        config={gestureRecognizerConfig}
        style={{
          flex: 1,
        }}
      >
      {/* <Header pageTitle={'Home'} displayStrideLengthButton={true} displayCameraButton={true} displayReadScreenButton={true}/> */}
        <View style={styles.allTabScreensContainerStyle}>
          {/* <View style={styles.allTabScreensStyle}> */}
            {props.children}
          {/* </View> */}
        </View>
      </GestureRecognizer>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    justifyContent: "flex-start",
    position: "absolute",
    top: 0, 
    bottom: 38,
    width: "100%",
  },
  allTabScreensContainerStyle: {
    backgroundColor: Colors.white, 
    // padding: 10,
    borderWidth: 10, 
    borderColor: Colors.white, 

    height: "100%",
    overflowY: "scroll",
    overflowX: "hidden",
  }, 
  allTabScreensStyle: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});

export default TabLayoutManager;