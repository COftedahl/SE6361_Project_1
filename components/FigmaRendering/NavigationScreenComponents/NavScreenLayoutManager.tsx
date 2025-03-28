import { sectionHorizontalPadding } from "@/constants/Styles";
import Header from "../TabComponents/Header";
import TabLayoutManager, { TabLayoutManagerProps } from "../TabComponents/TabLayoutManager";
import { ThemedView } from "../ThemedView";
import { StyleSheet } from 'react-native';
import { Colors } from "@/constants/Colors";

interface NavScreenLayoutManagerProps extends TabLayoutManagerProps {
  
}

const NavScreenLayoutManager = (props: NavScreenLayoutManagerProps) => {

  return (
    <ThemedView style={styles.screenContainer}>
      <Header pageTitle={"Navigation"} displayStrideLengthButton={false} displayCameraButton={false} displayReadScreenButton={true}/>
      <ThemedView style={styles.contentDiv}>
        {props.children}
      </ThemedView>
      {/* <ThemedText>test</ThemedText> This shows up on screen*/}
    </ThemedView>  
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "flex-start", 
    height: "100%", 
  },
  contentDiv: {
    flexGrow: 1,
    borderWidth: sectionHorizontalPadding, 
    borderColor: Colors.white,
  }, 
})

export default NavScreenLayoutManager;