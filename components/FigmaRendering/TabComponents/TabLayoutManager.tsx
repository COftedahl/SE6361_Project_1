import { StyleSheet, View } from "react-native";
import Header from "./Header";
import { Colors } from "@/constants/Colors";

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

  return (
    <View style={styles.appContainer}>
      {/* <Header pageTitle={'Home'} displayStrideLengthButton={true} displayCameraButton={true} displayReadScreenButton={true}/> */}
      <View style={styles.allTabScreensContainerStyle}>
        {/* <View style={styles.allTabScreensStyle}> */}
          {props.children}
        {/* </View> */}
      </View>
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