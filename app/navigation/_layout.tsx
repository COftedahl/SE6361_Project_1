import NavScreenLayoutManager from "@/components/FigmaRendering/NavigationScreenComponents/NavScreenLayoutManager";
import { Slot } from "expo-router";


const NavigationScreenLayout = () => {
    
  return (
    <NavScreenLayoutManager>
        <Slot/>
    </NavScreenLayoutManager>
  );
}

export default NavigationScreenLayout;