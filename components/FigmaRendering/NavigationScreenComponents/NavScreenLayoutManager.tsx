import TabLayoutManager, { TabLayoutManagerProps } from "../TabComponents/TabLayoutManager";
import { ThemedText } from "../ThemedText";

interface NavScreenLayoutManagerProps extends TabLayoutManagerProps {
  
}

const NavScreenLayoutManager = (props: NavScreenLayoutManagerProps) => {

  return (
    <>
      {/* <ThemedText>test</ThemedText> This shows up on screen*/}
      <TabLayoutManager {...props}>
      </TabLayoutManager>
    </>
  )
}

export default NavScreenLayoutManager;