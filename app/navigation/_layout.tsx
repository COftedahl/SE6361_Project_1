import NavScreenLayoutManager from "@/components/FigmaRendering/NavigationScreenComponents/NavScreenLayoutManager";
import Header from "@/components/FigmaRendering/TabComponents/Header";
import { Slot } from "expo-router";

const NavigationScreenLayout = () => {
    
  return (
    // <Stack>
    <>
      <NavScreenLayoutManager pageTitle={"Navigation"} useGestureHandler={false} headerOptions={{
        displayStrideLengthButton: false,
        displayCameraButton: false,
        displayReadScreenButton: true
      }}>
        
        <>
        
          <Slot/>
        </>
      </NavScreenLayoutManager>
      </>
    // </Stack>
  );
}

export default NavigationScreenLayout;