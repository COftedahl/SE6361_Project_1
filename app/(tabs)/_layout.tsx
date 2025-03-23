import { Tabs } from 'expo-router';
import Header from '../../components/FigmaRendering/TabComponents/Header';
import HomeSVGIcon from '@/components/FigmaRendering/svg/Home';
import CompassSVGIcon from '@/components/FigmaRendering/svg/Compass';
import HeartSVGIcon from '@/components/FigmaRendering/svg/Heart';
import CalendarSVGIcon from '@/components/FigmaRendering/svg/Calendar';
import PersonSVGIcon from '@/components/FigmaRendering/svg/Person';

const TabLayout = () => {
  
  const activeTabBackground: string = "rgb(0,0,0)";
  const inactiveTabBackground: string = "rgba(255,255,255,0)";

  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
    }}>
      <Tabs.Screen 
        name='index' 
        options={{ 
          headerTitle: () => <Header pageTitle={"Home"} displayStrideLengthButton={true} displayCameraButton={true} displayReadScreenButton={true}/>, 
          tabBarIcon: ({color, focused}) => <HomeSVGIcon backgroundColor={focused ? activeTabBackground : inactiveTabBackground }/>, 
        }} 
      />
      <Tabs.Screen 
        name='locationsearch' 
        options={{ 
          headerTitle: () => <Header pageTitle={"Locations"} displayStrideLengthButton={false} displayCameraButton={false} displayReadScreenButton={true}/>, 
          tabBarIcon: ({color, focused}) => <CompassSVGIcon backgroundColor={focused ? activeTabBackground : inactiveTabBackground }/>, 
        }} 
      />
      <Tabs.Screen 
        name='favorites' 
        options={{ 
          headerTitle: () => <Header pageTitle={"Favorites"} displayStrideLengthButton={false} displayCameraButton={false} displayReadScreenButton={true}/>, 
          tabBarIcon: ({color, focused}) => <HeartSVGIcon backgroundColor={focused ? activeTabBackground : inactiveTabBackground }/>, 
        }} 
      />
      <Tabs.Screen 
        name='recents' 
        options={{ 
          headerTitle: () => <Header pageTitle={"Recents"}  displayStrideLengthButton={false} displayCameraButton={false} displayReadScreenButton={true}/>,
          tabBarIcon: ({color, focused}) => <CalendarSVGIcon backgroundColor={focused ? activeTabBackground : inactiveTabBackground }/>, 
        }} 
      />
      <Tabs.Screen 
        name='settings' 
        options={{ 
          headerTitle: () => <Header pageTitle={"Settings"}  displayStrideLengthButton={false} displayCameraButton={false} displayReadScreenButton={true}/>, 
          tabBarIcon: ({color, focused}) => <PersonSVGIcon backgroundColor={focused ? activeTabBackground : inactiveTabBackground }/>, 
        }} 
      />
    </Tabs>
  )
}

export default TabLayout;