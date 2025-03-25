import Searchbar from "@/components/FigmaRendering/Searchbar";
import TabLayoutManager from "@/components/FigmaRendering/TabComponents/TabLayoutManager";
import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import { Colors } from "@/constants/Colors";
import { sectionHorizontalPadding, standardBorderRadius } from "@/constants/Styles";
import { StyleSheet } from 'react-native';
import { ROUTE_DESTINATION } from "@/constants/Functionality";
import LinkedLocation from "@/components/FigmaRendering/LinkedLocation";
import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import GreyBar from "@/components/FigmaRendering/GreyBar";
import PlusSVGIcon from "@/components/FigmaRendering/svg/Plus";
import { Link } from "expo-router";

const FavoritesTab = () => {
  return (
    <TabLayoutManager pageTitle={""} headerOptions={{
      displayStrideLengthButton: true,
      displayCameraButton: true,
      displayReadScreenButton: true
    }}>
      <ThemedView>
        <Searchbar placeholder={"Search"} value={""} margin={sectionHorizontalPadding} sticky={true} transparentBackground={false} />
        <GreyBar marginTop={12} style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", } as any}>
          <>
            <ThemedText>
              Add New Route
            </ThemedText>
            <Link href={ROUTE_DESTINATION}>
              <PlusSVGIcon width={20} height={20} strokeWidth={"8"}/>
            </Link>
          </>
        </GreyBar>
        <LinkedLocation name={"Favorite Name"} width={"FULL"} includePlusSign={false} color={Colors.blue} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Favorite Name"} width={"FULL"} includePlusSign={false} color={Colors.orange} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Favorite Name"} width={"FULL"} includePlusSign={false} color={Colors.golden} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Favorite Name"} width={"FULL"} includePlusSign={false} color={Colors.green} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Favorite Name"} width={"FULL"} includePlusSign={false} color={Colors.red} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Favorite Name"} width={"FULL"} includePlusSign={false} color={Colors.golden} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Favorite Name"} width={"FULL"} includePlusSign={false} color={Colors.orange} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Favorite Name"} width={"FULL"} includePlusSign={false} color={Colors.blue} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Favorite Name"} width={"FULL"} includePlusSign={false} color={Colors.lightgrey} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Favorite Name"} width={"FULL"} includePlusSign={false} color={Colors.green} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
      </ThemedView>
    </TabLayoutManager>
  )
}

const styles = StyleSheet.create({
  addRouteDivStyle: {
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

export default FavoritesTab;