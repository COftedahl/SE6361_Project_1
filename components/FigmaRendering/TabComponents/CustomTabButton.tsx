import { TabTriggerSlotProps } from "expo-router/ui";

interface Props extends React.PropsWithChildren, TabTriggerSlotProps {
  icon: React.FunctionComponent, 
  iconProps: any, 
}

const CustomTabButton = (props: Props) => {
  return (
    props.icon({...props.iconProps, focused: props.isFocused})
    // <></>
  )
}

export default CustomTabButton;