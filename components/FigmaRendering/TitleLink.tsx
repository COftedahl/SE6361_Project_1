import { BaseFontSize } from "@/constants/Font";
import { ExternalPathString, Link, RelativePathString } from "expo-router";
import { StyleSheet } from 'react-native';
import RightArrow from "./svg/Arrows/RightArrow";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";

interface Props {
  title: string, 
  destination: ExternalPathString | RelativePathString, 
}

const TitleLink = (props: Props) => {
  return (
    <Link href={props.destination} style={styles.linkStyle}>
        <ThemedText style={styles.titleStyle}>
          {props.title}
        </ThemedText>
        <ThemedView style={styles.arrowIconStyle}>
          <RightArrow/>
        </ThemedView>
    </Link>
  );
}

const styles = StyleSheet.create({
  linkStyle: {
    display: "flex",
    alignItems: "flex-end",
    gap: 8,
  }, 
  titleStyle: {
    fontWeight: 700,
    fontSize: 2 * BaseFontSize, 
    lineHeight: 30,
  }, 
  arrowIconStyle: {
    backgroundImage: "radial-gradient(" + Colors.lightgrey + ", rgba(0,0,0,0) 80%)",
    borderRadius: "50%",
  }
})

export default TitleLink;