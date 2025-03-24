import { ExternalPathString, Link, RelativePathString } from "expo-router";
import Location, { LocationProps } from "./Location";

interface Props extends LocationProps {
  to: RelativePathString | ExternalPathString, 
}

const LinkedLocation = (props: Props) => {
  return (
    <Link href={props.to}>
      <Location {...props}/>
    </Link>
  )
}

export default LinkedLocation;