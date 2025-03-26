import RangeInput from "@/components/FigmaRendering/RangeInput";
import Select from "@/components/FigmaRendering/Select";
import StyledTextInput, { inputWidth } from "@/components/FigmaRendering/StyledTextInput";
import MicrophoneSVGIcon from "@/components/FigmaRendering/svg/Microphone";
import RabbitSVGIcon from "@/components/FigmaRendering/svg/Rabbit";
import TurtleSVGIcon from "@/components/FigmaRendering/svg/Turtle";
import TabLayoutManager from "@/components/FigmaRendering/TabComponents/TabLayoutManager";
import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import { Colors } from "@/constants/Colors";
import { BaseFontSize } from "@/constants/Font";
import { inputBorderRadius, inputPadding, standardBorderRadius } from "@/constants/Styles";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput } from 'react-native';
import ToggleSwitch from "toggle-switch-react-native";

const SettingsTab = () => {
  
  const SVGICON_DIMENSIONS: number = 50;

  const [alertEmergencyContactFirst, setAlertEmergencyContactFirst] = useState<boolean>(false);

  const handleEmergencyContactSliderChanged = (newVal: boolean) => {
    setAlertEmergencyContactFirst(newVal);
  }

  return (
    <TabLayoutManager pageTitle={""} headerOptions={{
      displayStrideLengthButton: true,
      displayCameraButton: true,
      displayReadScreenButton: true
    }}>
      <ThemedView>
        {/* Start section Display */}
        <ThemedText style={styles.sectionTitleText}>
          Display
        </ThemedText>
        {/* Start subsection Text Size */}
        <ThemedText style={styles.subsectionTitleText}>
          Text Size
        </ThemedText>
        <ThemedView style={styles.sliderSettingRowDiv}>
          <ThemedText style={{fontSize: 1 * BaseFontSize}}>
            A
          </ThemedText>
          <ThemedView style={styles.sliderDiv}>
            <RangeInput 
              min={0} 
              max={10} 
              step={1} 
              thumbShadowRadius={5} 
              thumbShadowColor={Colors.black} 
              inactiveRailShadowRadius={4} 
              inactiveRailColor={Colors.lightgrey}
              inactiveRailShadowColor={Colors.lightgrey} 
              inactiveRailShadowOffset={{width: 0, height: 2}}
              disableRange
            />
          </ThemedView>
          <ThemedText style={{fontSize: 2 * BaseFontSize}}>
            A
          </ThemedText>
        </ThemedView>

        <hr style={styles.divider}/>

        {/* Start section Audio */}
        <ThemedText style={styles.sectionTitleText}>
          Audio
        </ThemedText>
        {/* Start subsection Instruction Speed */}
        <ThemedText style={styles.subsectionTitleText}>
          Instruction Speed
        </ThemedText>
        <ThemedView style={styles.sliderSettingRowDiv}>
          <TurtleSVGIcon strokeWidth={"2"} strokeColor={Colors.white} backgroundColor={Colors.black} width={SVGICON_DIMENSIONS} height={SVGICON_DIMENSIONS}/>
          <ThemedView style={styles.sliderDiv}>
            <RangeInput 
              min={0} 
              max={10} 
              step={1} 
              thumbShadowRadius={5} 
              thumbShadowColor={Colors.black} 
              inactiveRailShadowRadius={4} 
              inactiveRailColor={Colors.lightgrey}
              inactiveRailShadowColor={Colors.lightgrey} 
              inactiveRailShadowOffset={{width: 0, height: 2}}
              disableRange
            />
          </ThemedView>
          <RabbitSVGIcon strokeWidth={"2"} strokeColor={Colors.white} backgroundColor={Colors.black} width={SVGICON_DIMENSIONS} height={SVGICON_DIMENSIONS}/>
        </ThemedView>
        {/* Start subsection Instruction Interval */}
        <ThemedText style={styles.subsectionTitleText}>
          Instruction Speed
        </ThemedText>
        <ThemedView style={styles.sliderSettingRowDiv}>
          <ThemedView style={styles.centeredColumnFlex}>
            <ThemedText>
              2
            </ThemedText>
            <ThemedText>
              seconds
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.sliderDiv}>
            <RangeInput 
              min={2} 
              max={15} 
              step={1} 
              thumbShadowRadius={5} 
              thumbShadowColor={Colors.black} 
              inactiveRailShadowRadius={4} 
              inactiveRailColor={Colors.lightgrey}
              inactiveRailShadowColor={Colors.lightgrey} 
              inactiveRailShadowOffset={{width: 0, height: 2}}
              disableRange
            />
          </ThemedView>
          <ThemedView style={styles.centeredColumnFlex}>
            <ThemedText>
              15
            </ThemedText>
            <ThemedText>
              seconds
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <hr style={styles.divider}/>

        {/* Start section Emergency */}
        <ThemedText style={styles.sectionTitleText}>
          Emergency
        </ThemedText>
        {/* Start subsection Emergency Contact */}
        <ThemedText style={styles.subsectionTitleText}>
          Emergency Contact
        </ThemedText>
        {/* Start input row "Name" */}
        <ThemedView style={styles.inputRowDiv}>
          <ThemedText style={styles.textInputLabel}>
            Name
          </ThemedText>
          <StyledTextInput placeholder={"Enter Name Here"} />
          <MicrophoneSVGIcon height={40} width={40} strokeWidth={"5"}/>
        </ThemedView>
        {/* Start input row "Phone Number" */}
        <ThemedView style={styles.inputRowDiv}>
          <ThemedText style={styles.textInputLabel}>
            Phone Number
          </ThemedText>
          <StyledTextInput placeholder={"Enter Name Here"} />
          <MicrophoneSVGIcon height={40} width={40} strokeWidth={"5"}/>
        </ThemedView>
        {/* Start input row "Address" */}
        <ThemedView style={styles.inputRowDiv}>
          <ThemedText style={styles.textInputLabel}>
            Address
          </ThemedText>
          <StyledTextInput placeholder={"Enter Name Here"} />
          <MicrophoneSVGIcon height={40} width={40} strokeWidth={"5"}/>
        </ThemedView>
        {/* Start input row "Dial Emergency Contact Instead of 911" */}
        <ThemedView style={styles.toggleRowDiv}>
          <ThemedText style={{}}>
            Dial Emergency Contact Instead of 911
          </ThemedText>
          <ToggleSwitch
            isOn={alertEmergencyContactFirst} 
            onToggle={handleEmergencyContactSliderChanged}
            onColor={Colors.blue}
            size="large"
          />
        </ThemedView>
        
        <hr style={styles.divider}/>

        {/* Start section Language */}
        <ThemedText style={styles.sectionTitleText}>
          Language
        </ThemedText>

        <ThemedView style={styles.toggleRowDiv}>
          <ThemedText style={styles.textInputLabel}>
            Language
          </ThemedText>
          <Select 
            placeholder={{label: "Select a Language", value: "", color: Colors.lightgrey}}
            onValueChange={() => {}} 
            items={
              [
                {label: "English", value: "English"},
                {label: "Spanish", value: "Spanish"},
                {label: "French", value: "French"},
                {label: "German", value: "German"}
              ]
            }
            borderRadius={inputBorderRadius}
            borderColor={Colors.lightgrey}
            width={inputWidth}
            padding={inputPadding}
          />
          <MicrophoneSVGIcon height={40} width={40} strokeWidth={"5"}/>
        </ThemedView>

        {/* Start section Account */}
        <ThemedText style={styles.sectionTitleText}>
          Account
        </ThemedText>

        <Link href={"/login"} style={[styles.button, styles.logoutButton]}>
          Logout
        </Link>
        

      </ThemedView>
    </TabLayoutManager>
  )
}

const styles = StyleSheet.create({
  sectionTitleText: {
    fontWeight: 500, 
    fontSize: 1.4 * BaseFontSize, 
    paddingVertical: 5,
  },
  subsectionTitleText: {
    fontWeight: 500, 
    paddingBottom: 0,
    paddingLeft: 10,
  },
  sliderSettingRowDiv: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    paddingHorizontal: 10,
    marginBottom: 15,
  }, 
  sliderDiv: {
    flexGrow: 1,
    paddingHorizontal: 10, 
    paddingTop: 10,
  }, 
  divider: {
    width: "90%", 
    marginTop: 15,
  }, 
  centeredColumnFlex: {
    flexDirection: "column", 
    alignItems: "center", 
  }, 
  inputRowDiv: {
    flexDirection: "row", 
    justifyContent: "flex-start",
    paddingHorizontal: 20, 
    alignItems: "center", 
    marginVertical: 3,
  },
  textInputLabel: {
    width: "30%", 
  }, 
  toggleRowDiv: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    paddingHorizontal: 20, 
    alignItems: "center", 
    marginVertical: 10,
  }, 
  button: {
    width: "60%",
    padding: inputPadding, 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    borderRadius: inputBorderRadius
  }, 
  logoutButton: {
    backgroundColor: "rgba(255,0,0,0.2)", 
    color: Colors.red,
    borderWidth: 1, 
    borderColor: Colors.red, 
    marginHorizontal: "auto", 
  }
})

export default SettingsTab;