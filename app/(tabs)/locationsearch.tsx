import Searchbar from "@/components/FigmaRendering/Searchbar";
import TabLayoutManager from "@/components/FigmaRendering/TabComponents/TabLayoutManager";
import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import { Colors } from "@/constants/Colors";
import { sectionHorizontalPadding } from "@/constants/Styles";
import { StyleSheet } from 'react-native';
import { CHOOSE_ROUTE_DESTINATION } from "@/constants/Functionality";
import LinkedLocation from "@/components/FigmaRendering/LinkedLocation";

const LocationSearchTab = () => {
  return (
    <TabLayoutManager pageTitle={"Home"} headerOptions={{
      displayStrideLengthButton: true,
      displayCameraButton: true,
      displayReadScreenButton: true
    }}>

      <ThemedView>
        <Searchbar placeholder={"Search"} value={""} margin={sectionHorizontalPadding} sticky={true} transparentBackground={false} />
        <LinkedLocation name={"Location Name"} width={"FULL"} includePlusSign={false} color={Colors.blue} textLocation={"INSIDE"} to={CHOOSE_ROUTE_DESTINATION}/>
        <LinkedLocation name={"Location Name"} width={"FULL"} includePlusSign={false} color={Colors.orange} textLocation={"INSIDE"} to={CHOOSE_ROUTE_DESTINATION}/>
        <LinkedLocation name={"Location Name"} width={"FULL"} includePlusSign={false} color={Colors.golden} textLocation={"INSIDE"} to={CHOOSE_ROUTE_DESTINATION}/>
        <LinkedLocation name={"Location Name"} width={"FULL"} includePlusSign={false} color={Colors.green} textLocation={"INSIDE"} to={CHOOSE_ROUTE_DESTINATION}/>
        <LinkedLocation name={"Location Name"} width={"FULL"} includePlusSign={false} color={Colors.red} textLocation={"INSIDE"} to={CHOOSE_ROUTE_DESTINATION}/>
        <LinkedLocation name={"Location Name"} width={"FULL"} includePlusSign={false} color={Colors.golden} textLocation={"INSIDE"} to={CHOOSE_ROUTE_DESTINATION}/>
        <LinkedLocation name={"Location Name"} width={"FULL"} includePlusSign={false} color={Colors.orange} textLocation={"INSIDE"} to={CHOOSE_ROUTE_DESTINATION}/>
        <LinkedLocation name={"Location Name"} width={"FULL"} includePlusSign={false} color={Colors.blue} textLocation={"INSIDE"} to={CHOOSE_ROUTE_DESTINATION}/>
        <LinkedLocation name={"Location Name"} width={"FULL"} includePlusSign={false} color={Colors.lightgrey} textLocation={"INSIDE"} to={CHOOSE_ROUTE_DESTINATION}/>
        <LinkedLocation name={"Location Name"} width={"FULL"} includePlusSign={false} color={Colors.green} textLocation={"INSIDE"} to={CHOOSE_ROUTE_DESTINATION}/>
      </ThemedView>
    </TabLayoutManager>
  )
}

const styles=StyleSheet.create({

})

export default LocationSearchTab;