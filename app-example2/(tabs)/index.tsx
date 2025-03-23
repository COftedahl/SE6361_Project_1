import { Link } from "expo-router";
import { Text, View, StyleSheet  } from "react-native";
import ImageViewer from "@/components/ProvidedComponents/ImageViewer";

const PlaceholderImage = require('@/assets/images/Eastern-Gray-Squirrel-Image.jpg');

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about" style={styles.button}>
        About
      </Link>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#25292e',
    backgroundImage: 'radial-gradient(rgb(40,75,150), rgb(146, 164, 255))',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    borderRadius: '1rem', 
    backgroundColor: 'rgb(30,100,200)',
    borderWidth: 0.1, 
    borderStyle: 'dashed',
    borderColor: 'black',
    padding: 20, 
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})