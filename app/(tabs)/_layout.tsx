import { Tabs } from 'expo-router';
// import { TabList, Tabs, TabSlot, TabTrigger } from 'expo-router/ui';
import Header from '../../components/FigmaRendering/TabComponents/Header';
import HomeSVGIcon from '@/components/FigmaRendering/svg/Home';
import CompassSVGIcon from '@/components/FigmaRendering/svg/Compass';
import HeartSVGIcon from '@/components/FigmaRendering/svg/Heart';
import CalendarSVGIcon from '@/components/FigmaRendering/svg/Calendar';
import PersonSVGIcon from '@/components/FigmaRendering/svg/Person';
import { ThemedView } from '@/components/FigmaRendering/ThemedView';
import { StyleSheet, View, Text } from 'react-native';
import { RelativePathString, Stack } from 'expo-router';
// import { useIsFocused } from '@react-navigation/native';
import { standardBorderRadius } from '@/constants/Styles';


const baseTabHref: RelativePathString = "./(tabs)/";

export const TabLayoutArray: {tabName: string, pathname: string, route: RelativePathString}[] = [
  {
    tabName: "Home",
    pathname: "/",
    route: baseTabHref,
  }, 
  {
    tabName: "Location Search",
    pathname: "/locationsearch",
    route: baseTabHref + "locationsearch" as RelativePathString,
  }, 
  {
    tabName: "Favorites",
    pathname: "/favorites",
    route: baseTabHref + "favorites" as RelativePathString,
  }, 
  {
    tabName: "Recents",
    pathname: "/recents",
    route: baseTabHref + "recents" as RelativePathString,
  }, {
    tabName: "Settings",
    pathname: "/settings",
    route: baseTabHref + "settings" as RelativePathString,
  }, 
]

const TabLayout = () => {

  // const isFocused = useIsFocused();
  
  const activeTabBackground: string = "rgb(0,0,0)";
  const inactiveTabBackground: string = "rgba(255,255,255,0)";
  const activeStroke: string = "rgb(0,0,0)";
  const inactiveStroke: string = "rgb(115,122,130)";

  const GetSVGIconProps = ({color, focused}: {color: string, focused: boolean}) => {
  // const GetSVGIconProps = (focused: boolean) => {
    return {
      backgroundColor: (focused ? activeTabBackground : inactiveTabBackground ),
      strokeColor: (focused ? activeStroke : inactiveStroke), 
      width: 30, 
      height: 30,
    }
  }

  return (
    // <View style={styles.allTabScreenStyles}>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'fixed', 
          bottom: 0,
        },
      }}>
        <Tabs.Screen 
          name='index' 
          options={{ 
            header: () => <Header pageTitle={TabLayoutArray[0].tabName} displayStrideLengthButton={true} displayCameraButton={true} displayReadScreenButton={true}/>, 
            tabBarIcon: ({color, focused}) => <HomeSVGIcon {...GetSVGIconProps({color, focused})} />, 
            animation: 'shift',
          }} 
        />
        <Tabs.Screen 
          name='locationsearch' 
          options={{ 
            header: () => <Header pageTitle={TabLayoutArray[1].tabName} displayStrideLengthButton={false} displayCameraButton={false} displayReadScreenButton={true}/>, 
            tabBarIcon: ({color, focused}) => <CompassSVGIcon {...GetSVGIconProps({color, focused})} />, 
            animation: 'shift',
          }} 
        />
        <Tabs.Screen 
          name='favorites' 
          options={{ 
            header: () => <Header pageTitle={TabLayoutArray[2].tabName} displayStrideLengthButton={false} displayCameraButton={false} displayReadScreenButton={true}/>, 
            tabBarIcon: ({color, focused}) => <HeartSVGIcon {...GetSVGIconProps({color, focused})} />, 
            animation: 'shift',
          }} 
        />
        <Tabs.Screen 
          name='recents' 
          options={{ 
            header: () => <Header pageTitle={TabLayoutArray[3].tabName}  displayStrideLengthButton={false} displayCameraButton={false} displayReadScreenButton={true}/>,
            tabBarIcon: ({color, focused}) => <CalendarSVGIcon {...GetSVGIconProps({color, focused})} />, 
            animation: 'shift',
          }} 
        />
        <Tabs.Screen 
          name='settings' 
          options={{ 
            header: () => <Header pageTitle={TabLayoutArray[4].tabName}  displayStrideLengthButton={false} displayCameraButton={false} displayReadScreenButton={true}/>, 
            tabBarIcon: ({color, focused}) => <PersonSVGIcon {...GetSVGIconProps({color, focused})} />, 
            animation: 'shift',
          }} 
        />
      </Tabs>
    // </View>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "fixed", 
    bottom: 0, 
    height: 38, 
    width: "100%", 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-evenly",
    backgroundColor: "rgb(255,255,255)",
  }
})

export default TabLayout;



  // using custom tabs
  // <Tabs>
  //     {/* style all content rendered in the tabs here "TabSlot"*/}
  //     <TabSlot/>
  //     {/* provide list of tabs to include in "TabList" */}
  //     <TabList style={styles.tabBarStyle}>
  //       <TabTrigger name="Home" href={baseTabHref}>
  //         <HomeSVGIcon {...GetSVGIconProps(false)} />
  //       </TabTrigger>
        
  //       <TabTrigger name="Favorites" href="./(tabs)/favorites" ><Text>Favorites</Text></TabTrigger>
  //       <TabTrigger name="Locations" href="./(tabs)/locationsearch" ><Text>Locations</Text></TabTrigger>
  //       <TabTrigger name="Recents" href="./(tabs)/recents" ><Text>Recents</Text></TabTrigger>
  //       <TabTrigger name="Settings" href="./(tabs)/settings" ><Text>Settings</Text></TabTrigger>
  //     </TabList>
  //   </Tabs>