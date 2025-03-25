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

const LocationSearchTab = () => {
  return (
    <TabLayoutManager pageTitle={"Home"} headerOptions={{
      displayStrideLengthButton: true,
      displayCameraButton: true,
      displayReadScreenButton: true
    }}>

      <ThemedView>
        <Searchbar placeholder={"Search"} value={""} margin={sectionHorizontalPadding} sticky={true} transparentBackground={false} />
        <ThemedView style={{position: "relative", width: "fit-content" as any }}>
          <Picker 
            placeholder={{label: "Filter", value: "", color: Colors.lightgrey}}
            value={""}
            onValueChange={(e) => console.log(e)}
            items={[
              {label: "", value: ""},
              {label: "a", value: "a"}
            ]}
            Icon={() => <DownArrow/>}
            style={styles.selectStyles}
          >
          </Picker>
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
      // position: "relative", 
      // backgroundImage: "none",
      MozAppearance: "none",
      WebkitAppearance: "none",
      appearance: "none",
      paddingRight: 50,
    }, 
    iconContainer: {
      right: 0,
      top: "10%",
      // backgroundColor: Colors.white,
      // color: Colors.white,
    }
  } as any,
})

export default LocationSearchTab;