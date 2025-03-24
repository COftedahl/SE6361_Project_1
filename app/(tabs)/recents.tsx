import LinkedLocation from "@/components/FigmaRendering/LinkedLocation";
import Searchbar from "@/components/FigmaRendering/Searchbar";
import TabLayoutManager from "@/components/FigmaRendering/TabComponents/TabLayoutManager";
import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import { Colors } from "@/constants/Colors";
import { ROUTE_DESTINATION } from "@/constants/Functionality";
import { sectionHorizontalPadding } from "@/constants/Styles";


const RecentsTab = () => {
  return (
    <TabLayoutManager pageTitle={"Home"} headerOptions={{
      displayStrideLengthButton: true,
      displayCameraButton: true,
      displayReadScreenButton: true
    }}>

      <ThemedView>
        <Searchbar placeholder={"Search"} value={""} margin={sectionHorizontalPadding} sticky={true} transparentBackground={false} />
        <LinkedLocation name={"Recent Name"} width={"FULL"} includePlusSign={true} color={Colors.blue} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Recent Name"} width={"FULL"} includePlusSign={true} color={Colors.orange} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Recent Name"} width={"FULL"} includePlusSign={true} color={Colors.golden} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Recent Name"} width={"FULL"} includePlusSign={true} color={Colors.green} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Recent Name"} width={"FULL"} includePlusSign={true} color={Colors.red} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Recent Name"} width={"FULL"} includePlusSign={true} color={Colors.golden} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Recent Name"} width={"FULL"} includePlusSign={true} color={Colors.orange} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Recent Name"} width={"FULL"} includePlusSign={true} color={Colors.blue} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Recent Name"} width={"FULL"} includePlusSign={true} color={Colors.lightgrey} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
        <LinkedLocation name={"Recent Name"} width={"FULL"} includePlusSign={true} color={Colors.green} textLocation={"INSIDE"} to={ROUTE_DESTINATION}/>
      </ThemedView>
    </TabLayoutManager>
  )
}

export default RecentsTab;