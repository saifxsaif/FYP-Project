import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize, Spacing } from "../GlobalStyles";

const LoginPage = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <LinearGradient
      style={styles.loginPage}
      colors={[Color.pinkGradientStart, Color.pinkGradientEnd]}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Log in</Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.navButton}>Sign up</Text>
        </Pressable>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={!passwordVisible}
          />
          <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
            <Text style={styles.showButton}>{passwordVisible ? "Hide" : "Show"}</Text>
          </Pressable>
        </View>

        <Pressable style={styles.loginButton} onPress={() => alert('Logged in!')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: FontFamily.uI16Semi,
  },
  navButton: {
    fontSize: FontSize.uI16Semi_size,
    color: Color.greenPrimary,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    backgroundColor: Color.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: Spacing.elementMarginBottom,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  showButton: {
    color: Color.greenPrimary,
    padding: 10,
  },
  loginButton: {
    height: Spacing.buttonHeight,
    backgroundColor: Color.greenPrimary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: Color.white,
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.uI16Semi,
  },
});

export default LoginPage;
