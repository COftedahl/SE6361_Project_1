import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";


const About = () => {
  return (
    <View>
      <Text>Hello there, </Text>
      <ThemedText style={styles.text}>this is some styled text</ThemedText>
      <Link href={"/" as any} style={styles.button}>
        Go to home screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

export default About;