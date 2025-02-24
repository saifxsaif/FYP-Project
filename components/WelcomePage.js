import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const WelcomePage = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.welcomePage}
      colors={[Color.pinkGradientStart, Color.pinkGradientEnd]}
    >
      <Text style={[styles.nutrigenius, styles.signUpFlexBox]}>NUTRIGENIUS</Text>
      
      <Pressable
        style={styles.buttonprimary}
        onPress={() => navigation.navigate('LoginPage')}
      >
        <Text style={[styles.signUp, styles.signUpFlexBox]}>Enter</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  signUpFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  nutrigenius: {
    top: 375,
    left: 23,
    fontSize: 50,
    lineHeight: 62,
    fontFamily: FontFamily.juliusSansOneRegular,
    position: "absolute",
  },
  buttonprimary: {
    right: 27,
    bottom: 275,
    left: 40,
    borderRadius: 100,
    backgroundColor: Color.greenPrimary,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  welcomePage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default WelcomePage;


// Now, when you press the "Enter" button, it will navigate to the LoginPage. Let me know if you want any adjustments! 🚀
