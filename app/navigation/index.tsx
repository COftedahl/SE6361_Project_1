import LinkedLocation from "@/components/FigmaRendering/LinkedLocation";
import NavScreenLayoutManager from "@/components/FigmaRendering/NavigationScreenComponents/NavScreenLayoutManager";
import { Colors } from "@/constants/Colors";

const NavigationScreen = () => {

  return (
    <LinkedLocation to={"./"} name={"Hi"} width={50} includePlusSign={true} color={Colors.green} textLocation={"INSIDE"}>
    </LinkedLocation>
  )
}

export default NavigationScreen;