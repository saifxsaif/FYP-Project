import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, Image, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ProfileDisplay = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [showPassword, setShowPassword] = useState(false);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'Home':
        navigation.navigate('HomePage');
        break;
      case 'Plans':
        navigation.navigate('PlansPage');
        break;
      case 'Logs':
        navigation.navigate('LogsPage');
        break;
      case 'Profile':
        navigation.navigate('ProfileDisplay');
        break;
      case 'Settings':
        navigation.navigate('SettingsPage');
        break;
      default:
        break;
    }
  };

  return (
    <LinearGradient
      style={styles.homePage}
      colors={[Color.pinkGradientStart, Color.pinkGradientEnd]}
    >
      <View style={styles.container}>
        <Pressable style={styles.editButton} onPress={() => console.log("Edit Profile")}> 
          <Text style={styles.editButtonText}>Edit</Text>
        </Pressable>
        
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.profileHeader}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/150' }} 
              style={styles.profileImage}
            />
            <Text style={styles.name}>Victoria Robertson</Text>
            <Text style={styles.mantra}>A mantra goes here</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Username</Text>
            <TextInput
              style={styles.infoText}
              value="victoria.robertson"
              editable={false}
            />
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Email</Text>
            <TextInput
              style={styles.infoText}
              value="victoria@email.com"
              editable={false}
            />
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.infoText}
                value="mysecretpassword"
                secureTextEntry={!showPassword}
                editable={false}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Text style={styles.showHideButton}>{showPassword ? "Hide" : "Show"}</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>

        <View style={styles.navbar}>
          {['Home', 'Plans', 'Logs', 'Profile', 'Settings'].map((tab) => (
            <Pressable 
              key={tab} 
              style={[styles.navButton, activeTab === tab && styles.activeNavButton]}
              onPress={() => handleTabPress(tab)}
            >
              <Text style={[styles.navButtonText, activeTab === tab && styles.activeNavButtonText]}>
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  homePage: { flex: 1 },
  container: { flex: 1, justifyContent: "space-between" },
  scrollContainer: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", fontFamily: FontFamily.uI16Semi, marginBottom: 20 },
  profileHeader: { alignItems: 'center', marginBottom: 30 },
  profileImage: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: Color.white },
  name: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  mantra: { fontSize: 14, color: Color.grayDark, marginBottom: 20 },
  infoCard: { backgroundColor: Color.white, padding: 15, borderRadius: 10, marginBottom: 15 },
  infoLabel: { fontSize: 16, fontWeight: 'bold' },
  infoText: { fontSize: 16, color: Color.grayDark, marginTop: 5 },
  passwordContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  showHideButton: { color: Color.purplePrimary, fontWeight: 'bold' },
  editButton: { position: 'absolute', top: 20, right: 20 },
  editButtonText: { color: Color.grayDark, fontSize: 16, fontWeight: 'bold' },
  navbar: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    padding: 10, 
    backgroundColor: Color.white, 
    borderTopWidth: 1, 
    borderColor: Color.grayLight 
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  navButtonText: {
    fontSize: FontSize.uI16Semi_size,
    color: Color.grayDark,
  },
  activeNavButton: {
    backgroundColor: Color.greenPrimary,
  },
  activeNavButtonText: {
    color: Color.white,
    fontWeight: "bold",
  },
});

export default ProfileDisplay;
