// import { ThemedView } from "@/components/FigmaRendering/ThemedView";
// import { Colors } from '@/constants/Colors';
// import TitleLink from "@/components/FigmaRendering/TitleLink";
// import TabLayoutManager from "@/components/FigmaRendering/TabComponents/TabLayoutManager";
// import { StyleSheet } from 'react-native';
// import Searchbar from "@/components/FigmaRendering/Searchbar";
// import { sectionHorizontalPadding } from "@/constants/Styles";
// import LinkedLocation from "@/components/FigmaRendering/LinkedLocation";
// import { ROUTE_DESTINATION } from "@/constants/Functionality";

// const HomeTab = () => {
//   return (
//     <TabLayoutManager pageTitle={"Home"} useGestureHandler={true} headerOptions={{
//       displayStrideLengthButton: true,
//       displayCameraButton: true,
//       displayReadScreenButton: true
//     }}>

//       <ThemedView>
//         <Searchbar placeholder={"Search"} value={""} margin={sectionHorizontalPadding} sticky={true} transparentBackground={false} />
//         <LinkedLocation name={"Recent Location"} width={"FULL"} includePlusSign={false} color={Colors.blue} textLocation={"INSIDE"} to={ROUTE_DESTINATION} />
//         <br/>
//         <TitleLink title={"Favorites"} destination={"./favorites"} />
//         <ThemedView style={styles.centeredRow}>
//           <ThemedView style={styles.favoriteLocationsDiv}>
//             <LinkedLocation name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.golden} textLocation={"OUTSIDE"} to={ROUTE_DESTINATION} />
//             <LinkedLocation name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.green} textLocation={"OUTSIDE"} to={ROUTE_DESTINATION} />
//             <LinkedLocation name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.red} textLocation={"OUTSIDE"} to={ROUTE_DESTINATION} />
//             <LinkedLocation name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.orange} textLocation={"OUTSIDE"} to={ROUTE_DESTINATION} />
//             <LinkedLocation name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.green} textLocation={"OUTSIDE"} to={ROUTE_DESTINATION} />
//             <LinkedLocation name={"Location Name"} width={150} height={150} includePlusSign={false} color={Colors.blue} textLocation={"OUTSIDE"} to={ROUTE_DESTINATION} />
//           </ThemedView>
//         </ThemedView>
//       </ThemedView>
//     </TabLayoutManager>
//   )
// }

// const styles = StyleSheet.create({
//   favoriteLocationsDiv: {
//     flexDirection: "row", 
//     flexWrap: "wrap",
//     justifyContent: "center", 
    
//     // width: "100%",
//     // alignSelf: "center",
//   }, 
//   centeredRow: {
//     // flexDirection: "row", 
//     // width: "100%", 
//     // maxWidth: "100%", 
//     // minWidth: "100%", 
//     // flex: 1,

//   }
// })

// export default HomeTab;

import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import { Colors } from '@/constants/Colors';
import { StyleSheet, View, Pressable } from 'react-native';
import Searchbar from "@/components/FigmaRendering/Searchbar";
import { sectionHorizontalPadding } from "@/constants/Styles";
import LinkedLocation from "@/components/FigmaRendering/LinkedLocation";
import TabLayoutManager from "@/components/FigmaRendering/TabComponents/TabLayoutManager";
import { PreNavigateToTabs, ROUTE_DESTINATION } from "@/constants/Functionality";
import { useRouter } from "expo-router";
import CameraSVGIcon from "../../components/FigmaRendering/svg/Camera";
import SpeakerSVGIcon from "../../components/FigmaRendering/svg/Speaker";
import StrideSVGIcon from "../../components/FigmaRendering/svg/Stride";
import OutletSVGIcon from "../../components/FigmaRendering/svg/OutletIcon";

const HomeTab = () => {
  const router = useRouter();

  const handleStrideLength = () => {
    PreNavigateToTabs(router);
    router.navigate("/navigation/stridelength");
  };

  const handleNavigationClicked = () => {
    PreNavigateToTabs(router);
    router.navigate("/navigation/obstaclesonly"); 
  };

  const handleNewAction = () => {
    PreNavigateToTabs(router);
    router.navigate("/navigation/outletdetection"); 
  };

  return (
    <TabLayoutManager pageTitle={""} useGestureHandler={true} headerOptions={{
      displayStrideLengthButton: true,
      displayCameraButton: true,
      displayReadScreenButton: true
    }}>
      <>
      <Searchbar
        placeholder={"Search"}
        value={""}
        margin={sectionHorizontalPadding}
        sticky={true}
        transparentBackground={false}
      />

      {/* 2x2 Button Grid */}
      <View style={styles.buttonGrid}>
        <Pressable onPress={handleStrideLength}>
          <StrideSVGIcon width={150} height={150} backgroundColor={"#34C759"}/>
        </Pressable>
        <Pressable onPress={handleNavigationClicked}>
          <CameraSVGIcon width={150} height={150} backgroundColor={"#FBBC05"} viewBoxScale={1.2}/>
        </Pressable>
        <Pressable>
          <SpeakerSVGIcon width={150} height={150} backgroundColor={"#2C2C2C"} strokeWidth={"3"} strokeColor={"rgb(255,255,255)"} viewBoxScale={1.2}/>
        </Pressable>
        <Pressable onPress={handleNewAction}>
          <OutletSVGIcon width={150} height={150} backgroundColor={"#2C2C2C"} strokeWidth={"5"} strokeColor={Colors.red} viewBoxScale={1.2}/>
        </Pressable>
      </View>
      </>
    </TabLayoutManager>
  );
};

const styles = StyleSheet.create({
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 20,
    gap: 10, // Note: 'gap' works in React Native 0.71+, otherwise use margin
  },
});

export default HomeTab;
