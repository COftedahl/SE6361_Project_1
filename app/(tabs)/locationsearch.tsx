import Searchbar from "@/components/FigmaRendering/Searchbar";
import TabLayoutManager from "@/components/FigmaRendering/TabComponents/TabLayoutManager";
import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import { Colors } from "@/constants/Colors";
import { sectionHorizontalPadding, standardBorderRadius } from "@/constants/Styles";
import { StyleSheet } from 'react-native';
import { CHOOSE_ROUTE_DESTINATION } from "@/constants/Functionality";
import LinkedLocation from "@/components/FigmaRendering/LinkedLocation";
import RNPickerSelect from 'react-native-picker-select';
import Picker from "react-native-picker-select";
import DownArrow from "@/components/FigmaRendering/svg/Arrows/DownArrow";

const LocationSearchTab = () => {
  return (
    <TabLayoutManager pageTitle={"Home"} headerOptions={{
      displayStrideLengthButton: true,
      displayCameraButton: true,
      displayReadScreenButton: true
    }}>

      <ThemedView>
        <Searchbar placeholder={"Search"} value={""} margin={sectionHorizontalPadding} sticky={true} transparentBackground={false} />
        <Picker 
          placeholder={{label: "Filter", value: "", color: Colors.lightgrey}}
          value={""}
          onValueChange={(e) => console.log(e)}
          items={[
            {label: "", value: ""},
            {label: "a", value: "a"}
          ]}
          Icon={() => null}
          style={styles.selectStyles}
        >
        </Picker>
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
  selectStyles: {
    inputIOS: {

    }, 
    inputAndroid: {

    }, 
    inputWeb: {
      alignSelf: "flex-start", 
      width: "auto",
      padding: 10,
      borderColor: Colors.lightgrey, 
      borderWidth: 1, 
      borderStyle: "solid", 
      borderRadius: standardBorderRadius, 
      backgroundColor: Colors.white,
      position: "relative", 
    }, 
    iconContainer: {
      right: 55,
      backgroundColor: Colors.white,
      color: Colors.white,
    }
  } as any,
})

export default LocationSearchTab;