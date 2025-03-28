import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import { Colors } from '@/constants/Colors';
import TitleLink from "@/components/FigmaRendering/TitleLink";
import TabLayoutManager from "@/components/FigmaRendering/TabComponents/TabLayoutManager";
import { StyleSheet } from 'react-native';
import Searchbar from "@/components/FigmaRendering/Searchbar";
import { sectionHorizontalPadding } from "@/constants/Styles";
import LinkedLocation from "@/components/FigmaRendering/LinkedLocation";
import { ROUTE_DESTINATION } from "@/constants/Functionality";

const HomeTab = () => {
  return (
    <TabLayoutManager pageTitle={"Home"} useGestureHandler={true} headerOptions={{
      displayStrideLengthButton: true,
      displayCameraButton: true,
      displayReadScreenButton: true
    }}>

      <ThemedView>
        <Searchbar placeholder={"Search"} value={""} margin={sectionHorizontalPadding} sticky={true} transparentBackground={false} />
        <LinkedLocation name={"Recent Location"} width={"FULL"} includePlusSign={false} color={Colors.blue} textLocation={"INSIDE"} to={ROUTE_DESTINATION} />
        <br/>
        <TitleLink title={"Favorites"} destination={"./favorites"} />
        <ThemedView style={styles.centeredRow}>
          <ThemedView style={styles.favoriteLocationsDiv}>
            <LinkedLocation name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.golden} textLocation={"OUTSIDE"} to={ROUTE_DESTINATION} />
            <LinkedLocation name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.green} textLocation={"OUTSIDE"} to={ROUTE_DESTINATION} />
            <LinkedLocation name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.red} textLocation={"OUTSIDE"} to={ROUTE_DESTINATION} />
            <LinkedLocation name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.orange} textLocation={"OUTSIDE"} to={ROUTE_DESTINATION} />
            <LinkedLocation name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.green} textLocation={"OUTSIDE"} to={ROUTE_DESTINATION} />
            <LinkedLocation name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.blue} textLocation={"OUTSIDE"} to={ROUTE_DESTINATION} />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </TabLayoutManager>
  )
}

const styles = StyleSheet.create({
  favoriteLocationsDiv: {
    flexDirection: "row", 
    flexWrap: "wrap",
    justifyContent: "center", 
    
    // width: "100%",
    // alignSelf: "center",
  }, 
  centeredRow: {
    // flexDirection: "row", 
    // width: "100%", 
    // maxWidth: "100%", 
    // minWidth: "100%", 
    // flex: 1,

  }
})

export default HomeTab;