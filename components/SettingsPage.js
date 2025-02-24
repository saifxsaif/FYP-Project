import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SettingsPage = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Settings");

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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Settings</Text>
          {/* Add your profile content here */}
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

export default SettingsPage;
