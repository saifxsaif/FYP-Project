import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HomePage = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Home");

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

    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Home</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weekly Progress</Text>
          <Text style={styles.cardText}>Calories: 1,284</Text>
          {/* Add progress circles here */}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Latest Measurements</Text>
          <Text style={styles.cardText}>Weight: 72.4 kg</Text>
          <Pressable style={styles.trackButton}>
            <Text style={styles.trackButtonText}>Track new weight</Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Calories</Text>
          <Text style={styles.cardText}>1,548 kcal</Text>
          {/* Add a bar chart or graph here */}
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  homePage: { flex: 1 },
  contentContainer: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", fontFamily: FontFamily.uI16Semi, marginBottom: 20 },
  navbar: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    padding: 10, 
    backgroundColor: Color.white, 
    borderTopWidth: 1, 
    borderColor: Color.grayLight 
  },

  scrollContainer: { padding: 20 },
  card: { backgroundColor: Color.white, padding: 20, borderRadius: 15, marginBottom: 20 },
  cardTitle: { fontSize: FontSize.uI16Semi_size, fontWeight: "bold", marginBottom: 10 },
  cardText: { fontSize: FontSize.uI14Regular_size, color: "#666" },
  trackButton: { backgroundColor: Color.purplePrimary, padding: 10, borderRadius: 20, alignItems: "center", marginTop: 10 },
  trackButtonText: { color: Color.white, fontSize: FontSize.uI14Regular_size },

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

export default HomePage;
