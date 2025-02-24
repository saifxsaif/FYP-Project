import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, Image, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ProfileDisplay = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Plans");
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
        
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Plans</Text>
          <View style={styles.profileHeader}>
          </View>

          <Text style={styles.recommendTitle}>Your recommended ingredients are:</Text>
          <View style={styles.ingredientGrid}>
            {["Avocado", "Blueberries", "Almonds", "Quinoa", "Salmon", "Spinach", "Sweet Potatoes", "Chia Seeds", "Greek Yogurt"].map((item, index) => (
              <View key={index} style={styles.ingredientBox}>
                <Text style={styles.ingredientText}>{item}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={styles.navbar}>
          {["Home", "Plans", "Logs", "Profile", "Settings"].map((tab) => (
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
  recommendTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 20 },
  ingredientGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  ingredientBox: { width: '30%', padding: 10, backgroundColor: Color.white, borderRadius: 10, marginBottom: 10 },
  ingredientText: { textAlign: 'center', fontSize: 14, color: Color.grayDark }
});

export default ProfileDisplay;
