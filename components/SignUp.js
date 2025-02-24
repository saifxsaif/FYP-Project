import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize, Spacing } from "../GlobalStyles";

const SignUp = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
    } else {
      Alert.alert("Success", "Signed up successfully!", [
        { text: "OK", onPress: () => navigation.navigate('UserProfilePage') }
      ]);
    }
  };

  return (
    <LinearGradient
      style={styles.signUpPage}
      colors={[Color.pinkGradientStart, Color.pinkGradientEnd]}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
        <Pressable onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.navButton}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#999"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={!passwordVisible}
            onChangeText={setPassword}
            value={password}
          />
          <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
            <Text style={styles.showButton}>{passwordVisible ? "Hide" : "Show"}</Text>
          </Pressable>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            secureTextEntry={!confirmPasswordVisible}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
          <Pressable onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
            <Text style={styles.showButton}>{confirmPasswordVisible ? "Hide" : "Show"}</Text>
          </Pressable>
        </View>

        {password && confirmPassword && password !== confirmPassword && (
          <Text style={styles.errorText}>Passwords do not match</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
        />

        <Pressable style={styles.signUpButton} onPress={handleSignUp}> 
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  signUpPage: {
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
  errorText: {
    color: "red",
    fontSize: FontSize.uI16Semi_size,
    marginBottom: Spacing.elementMarginBottom,
  },
  signUpButton: {
    height: Spacing.buttonHeight,
    backgroundColor: Color.greenPrimary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signUpButtonText: {
    color: Color.white,
    fontSize: FontSize.uI16Semi_size,
    fontFamily: FontFamily.uI16Semi,
  },
});

export default SignUp;
