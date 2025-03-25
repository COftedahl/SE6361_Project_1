import Searchbar from "@/components/FigmaRendering/Searchbar";
import TabLayoutManager from "@/components/FigmaRendering/TabComponents/TabLayoutManager";
import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import { Colors } from "@/constants/Colors";
import { sectionHorizontalPadding, standardBorderRadius } from "@/constants/Styles";
import { StyleSheet } from 'react-native';
import { CHOOSE_ROUTE_DESTINATION } from "@/constants/Functionality";
import LinkedLocation from "@/components/FigmaRendering/LinkedLocation";
import RNPickerSelect from 'react-native-picker-select';
// import { Picker } from '@react-native-picker/picker';
import DownArrow from "@/components/FigmaRendering/svg/Arrows/DownArrow";
import Picker from "react-native-picker-select";
import Select from "@/components/FigmaRendering/Select";

const LocationSearchTab = () => {
  return (
    <TabLayoutManager pageTitle={"Home"} headerOptions={{
      displayStrideLengthButton: true,
      displayCameraButton: true,
      displayReadScreenButton: true
    }}>

      <ThemedView>
        <Searchbar placeholder={"Search"} value={""} margin={sectionHorizontalPadding} sticky={true} transparentBackground={false} />
        <ThemedView style={styles.sectionStyle}>
          <Select 
            onValueChange={(e) =>{console.log(e)} } 
            placeholder={{value: "", label: "Filter", color: Colors.lightgrey}}
            value={""}
            items={
              [
                {label: "First item", value: "1"},
                {label: "Second item", value: "2"},
              ]
            }
            margin={5}
          />
          <Select 
            onValueChange={(e) =>{console.log(e)} } 
            placeholder={{value: "", label: "Sort", color: Colors.lightgrey}}
            value={""}
            items={
              [
                {label: "First item", value: "1"},
                {label: "Second item", value: "2"},
              ]
            }
            margin={5}
          />
        </ThemedView>
        
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
  sectionStyle: {
    paddingTop: sectionHorizontalPadding + 12,
    padding: sectionHorizontalPadding,
    paddingBottom: sectionHorizontalPadding / 2,
    flexDirection: "row", 
    justifyContent: "flex-start", 
  }
})

export default LocationSearchTab;