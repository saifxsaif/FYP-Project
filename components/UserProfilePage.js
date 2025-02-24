//old userprofilepage

import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Color, FontFamily, FontSize, Spacing } from "../GlobalStyles";

const UserProfilePage = ({ navigation }) => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [showAdditionalFields2, setShowAdditionalFields2] = useState(false);
  const [showAdditionalFields3, setShowAdditionalFields3] = useState(false);
  const [showAdditionalFields4, setShowAdditionalFields4] = useState(false);
  const [ShowAdditionalFields5, setShowAdditionalFields5] = useState(false);
//  const [ShowAdditionalFields6, setShowAdditionalFields6] = useState(false);

  const [gender, setGender] = useState("Male");
  const [familyDiabetes, setFamilyDiabetes] = useState("Yes");

  return (
    <LinearGradient
      style={styles.userProfilePage}
      colors={[Color.pinkGradientStart, Color.pinkGradientEnd]}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>User Profile</Text>

        <Text style={styles.label}>Age</Text>
        <TextInput style={styles.input} placeholder="Enter your age" placeholderTextColor="#999" />

        <Text style={styles.label}>Gender</Text>
        <View style={styles.toggleContainer}>
          <Pressable onPress={() => setGender("Male")}
            style={[styles.toggleButton, gender === "Male" && styles.selectedButton]}>
            <Text style={[styles.toggleText, gender === "Male" && styles.selectedText]}>Male</Text>
          </Pressable>
          <Pressable onPress={() => setGender("Female")}
            style={[styles.toggleButton, gender === "Female" && styles.selectedButton]}>
            <Text style={[styles.toggleText, gender === "Female" && styles.selectedText]}>Female</Text>
          </Pressable>
        </View>

        {!showAdditionalFields ? (
          <Pressable style={styles.nextButton} onPress={() => setShowAdditionalFields(true)}>
            <Text style={styles.nextButtonText}>Next</Text>
          </Pressable>
        ) : (
          <>
            <Text style={styles.label}>Religious Constraints?</Text>
            <TextInput style={styles.input} placeholder="Enter any constraints" placeholderTextColor="#999" />

            <Text style={styles.label}>Family history of diabetes?</Text>
            <View style={styles.toggleContainer}>
              <Pressable onPress={() => setFamilyDiabetes("Yes")}
                style={[styles.toggleButton, familyDiabetes === "Yes" && styles.selectedButton]}>
                <Text style={[styles.toggleText, familyDiabetes === "Yes" && styles.selectedText]}>Yes</Text>
              </Pressable>
              <Pressable onPress={() => setFamilyDiabetes("No")}
                style={[styles.toggleButton, familyDiabetes === "No" && styles.selectedButton]}>
                <Text style={[styles.toggleText, familyDiabetes === "No" && styles.selectedText]}>No</Text>
              </Pressable>
            </View> 

        {!showAdditionalFields2 ? (
          <Pressable style={styles.nextButton2} onPress={() => setShowAdditionalFields2(true)}>
            <Text style={styles.nextButton2Text}>Next</Text>
          </Pressable>
        ) : (
          <>
            <View>
            <Text style={styles.label}>Any ingredient allergies?</Text>
            <Text style={styles.subText}>To offer you the best tailored diet experience, we need to know more about you</Text>
            <View style={styles.allergyGrid}>
              {[...Array(8)].map((_, index) => (
                <TextInput key={index} style={styles.smallInput} placeholder="Allergy" placeholderTextColor="#999" />
              ))}
            </View>
          </View>
            

        {!showAdditionalFields3 ? (
          <Pressable style={styles.nextButton3} onPress={() => setShowAdditionalFields3(true)}>
            <Text style={styles.nextButton3Text}>Next</Text>
          </Pressable>
        ) : (
          <>
            <View>
            <Text style={styles.label}>Any Diseases?</Text>
            <Text style={styles.subText}>To offer you the best tailored diet experience, we need to know more about you</Text>
            <View style={styles.allergyGrid}>
              {[...Array(8)].map((_, index) => (
                <TextInput key={index} style={styles.smallInput} placeholder="Disease" placeholderTextColor="#999" />
              ))}
            </View>
          </View>
            

        {!showAdditionalFields4 ? (
          <Pressable style={styles.nextButton4} onPress={() => setShowAdditionalFields4(true)}>
            <Text style={styles.nextButton4Text}>Next</Text>
          </Pressable>
        ) : (
          <>
            <View>
            <Text style={styles.label}>Do you follow any diets?</Text>
            <Text style={styles.subText}>To offer you the best tailored diet experience, we need to know more about you</Text>
            <View style={styles.allergyGrid}>
              {[...Array(8)].map((_, index) => (
                <TextInput key={index} style={styles.smallInput} placeholder="Diets" placeholderTextColor="#999" />
              ))}
            </View>
          </View>


          {!ShowAdditionalFields5 ? (
          <Pressable style={styles.nextButton5} onPress={() => setShowAdditionalFields5(true)}>
            <Text style={styles.nextButton5Text}>Next</Text>
          </Pressable>
        ) : (
          <>
            <View>
            <Text style={styles.label}>Do you have any fitness goals?</Text>
            <Text style={styles.subText}>To offer you the best tailored diet experience, we need to know more about you</Text>
            <View style={styles.allergyGrid}>
              {[...Array(8)].map((_, index) => (
                <TextInput key={index} style={styles.smallInput} placeholder="Diets" placeholderTextColor="#999" />
              ))}
            </View>
          </View>

        <View>
            <Pressable style={styles.nextButton6} onPress={() => navigation.navigate('HomePage')}>
            <Text style={styles.nextButton6Text}>Done</Text>
            </Pressable>
        </View>

          </>
/*show additionalfields5*/     )}      


          </>
/*show additionalfields4*/       )}      


          </>
/*show additionalfields3*/        )}        



          </>
/*show additionalfields2*/        )}

        </>
/*show additionalfields*/    )}     

        </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  userProfilePage: { flex: 1 },
  scrollContainer: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", fontFamily: FontFamily.uI16Semi, marginBottom: 20 },
  label: { fontSize: FontSize.uI16Semi_size, fontWeight: "bold", marginBottom: 10 },
  input: { height: 50, backgroundColor: Color.white, borderRadius: 10, paddingHorizontal: 15, marginBottom: 20 },
  toggleContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  toggleButton: { flex: 1, padding: 15, alignItems: "center", borderRadius: 10 },
  selectedButton: { backgroundColor: Color.white, borderWidth: 1, borderColor: Color.greenPrimary },
  toggleText: { color: Color.greenPrimary },
  selectedText: { fontWeight: "bold" },

  nextButton: { height: 50, backgroundColor: Color.greenPrimary, borderRadius: 25, justifyContent: "center", alignItems: "center" },
  nextButtonText: { color: Color.white, fontSize: FontSize.uI16Semi_size, fontFamily: FontFamily.uI16Semi },
  nextButton2: { height: 50, backgroundColor: Color.greenPrimary, borderRadius: 25, justifyContent: "center", alignItems: "center" },
  nextButton2Text: { color: Color.white, fontSize: FontSize.uI16Semi_size, fontFamily: FontFamily.uI16Semi },
  nextButton3: { height: 50, backgroundColor: Color.greenPrimary, borderRadius: 25, justifyContent: "center", alignItems: "center" },
  nextButton3Text: { color: Color.white, fontSize: FontSize.uI16Semi_size, fontFamily: FontFamily.uI16Semi },
  nextButton4: { height: 50, backgroundColor: Color.greenPrimary, borderRadius: 25, justifyContent: "center", alignItems: "center" },
  nextButton4Text: { color: Color.white, fontSize: FontSize.uI16Semi_size, fontFamily: FontFamily.uI16Semi },
  nextButton5: { height: 50, backgroundColor: Color.greenPrimary, borderRadius: 25, justifyContent: "center", alignItems: "center" },
  nextButton5Text: { color: Color.white, fontSize: FontSize.uI16Semi_size, fontFamily: FontFamily.uI16Semi },
  nextButton6: { height: 50, backgroundColor: Color.greenPrimary, borderRadius: 25, justifyContent: "center", alignItems: "center" },
  nextButton6Text: { color: Color.white, fontSize: FontSize.uI16Semi_size, fontFamily: FontFamily.uI16Semi },
  
  smallInput: { width: '30%', height: 50, backgroundColor: Color.white, borderRadius: 10, paddingHorizontal: 10, margin: 5 },
  allergyGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }
});

export default UserProfilePage;
