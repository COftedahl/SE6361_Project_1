import StyledTextInput from "@/components/FigmaRendering/StyledTextInput";
import AppleLogoSVGIcon from "@/components/FigmaRendering/svg/AppleLogo";
import GoogleLogoSVGIcon from "@/components/FigmaRendering/svg/GoogleLogo";
import { ThemedText } from "@/components/FigmaRendering/ThemedText";
import { ThemedView } from "@/components/FigmaRendering/ThemedView";
import { Colors } from "@/constants/Colors";
import { BaseFontSize } from "@/constants/Font";
import { PreNavigateToTabs } from "@/constants/Functionality";
import { inputBorderRadius, inputPadding, sectionHorizontalPadding, standardBorderRadius } from "@/constants/Styles";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput } from 'react-native';

const LoginScreen = () => {

  const buttonLogoSize = 25;

  const [email, setEmail] = useState<string>("");
  let router = useRouter();

  const handleContinuePressed = () => {
    if (email == "") {
      router.navigate("/join");
    }
    else {
      PreNavigateToTabs(router);
      router.navigate("/(tabs)");
    }
  }

  return (
    <ThemedView style={[styles.screenContainer, styles.centeredColumnFlexbox]}>
      <ThemedText style={styles.titleText}>Seeing iDog</ThemedText>
      <ThemedView style={[styles.loginContentDiv, styles.centeredColumnFlexbox]}>
        <ThemedView style={styles.centeredColumnFlexbox}>
          {/* Login area */}
          <ThemedText style={styles.headingText}>Login</ThemedText>
          <ThemedText>
            Enter your email to login
          </ThemedText>
        </ThemedView>
        <StyledTextInput placeholder={"email@domain.com"} style={{width: standardWidth}} placeholderTextColor={Colors.lightgrey} onChangeText={(e) => setEmail(e)}/>
        <Pressable style={[styles.button, styles.continueButton]} onPress={handleContinuePressed}>
          <ThemedText style={styles.textInherit}>Continue</ThemedText>
        </Pressable>
        {/* divider */}
        <ThemedView style={styles.dividerContainer}>
          <hr style={styles.dividerHalf}/>
          <ThemedText style={[styles.textInherit, styles.dividerText]}>or</ThemedText>
          <hr style={styles.dividerHalf}/>
        </ThemedView>
        {/* Other login methods */}
        <Link style={[styles.button, styles.continueWithButton]} href={"/"}>
          <GoogleLogoSVGIcon width={buttonLogoSize} height={buttonLogoSize}/>
          <ThemedText style={styles.textInherit}>Continue with Google</ThemedText>
        </Link>
        <Link style={[styles.button, styles.continueWithButton]} href={"/"}>
          <AppleLogoSVGIcon width={buttonLogoSize} height={buttonLogoSize}/>
          <ThemedText style={styles.textInherit}>Continue with Apple</ThemedText>
        </Link>
        {/* fine print */}
        <ThemedText style={styles.finePrint}>
          By clicking continue, you agree to our 
          <Link href={"/"} style={styles.link}> Terms of Service </Link>
          and 
          <Link href={"/"} style={styles.link}> Privacy Policy </Link>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.emptyBottomDiv}/>
    </ThemedView>
  )
}

const standardWidth = "90%";

const styles = StyleSheet.create({
  screenContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.white, 
    padding: sectionHorizontalPadding, 
  }, 
  titleText: {
    fontWeight: 700, 
    fontSize: 1.7 * BaseFontSize, 
  }, 
  headingText: {
    fontWeight: 700, 
    fontSize: 1.2 * BaseFontSize,
  },
  loginContentDiv: {
    marginTop: "20%",
    width: "100%", 
    gap: 25, 
  }, 
  emptyBottomDiv: {
    flexGrow: 0.3,
  }, 
  button: {
    width: standardWidth, 
    borderRadius: inputBorderRadius, 
    padding: inputPadding, 
    textAlign: "center", 
    display: "flex", 
  }, 
  continueButton: {
    color: Colors.white, 
    backgroundColor: Colors.black, 
    flexDirection: "column", 
  }, 
  continueWithButton: {
    flexDirection: "row", 
    justifyContent: "center",
    backgroundColor: Colors.palegrey, 
    gap: 10,
  }, 
  centeredColumnFlexbox: {
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center", 
  }, 
  textInherit: {
    color: "inherit", 
    textAlign: "inherit" as any,
    alignSelf: "center", 
  },
  dividerContainer: {
    width: standardWidth, 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
  }, 
  dividerHalf: {
    flexGrow: 1, 
  }, 
  dividerText: {
    paddingHorizontal: 10,
    color: Colors.grey,
  }, 
  finePrint: {
    color: Colors.lightgrey, 
    fontSize: 0.8 * BaseFontSize, 
    width: standardWidth, 
    textAlign: "center", 
  }, 
  link: {
    color: Colors.black, 
  }, 
})

export default LoginScreen;