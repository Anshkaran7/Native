import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CloseIcon from "../../assets/SVG/closeIcon";
import ImageUpload from "../components/imageUpload";
import { COLOURS } from "../constants";

export default function AgentRegScreen({ onImageUpload }) {
  const [text, onChangeText] = useState();
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleSave = () => {
    console.log("Save button clicked!");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.topContainer}>
        <View style={styles.CloseIcon}>
          <Pressable onPress={handleGoBack}>
            <CloseIcon />
          </Pressable>
        </View>
      </View>
      <View style={styles.agentInfo}>
        <View>
          <Text style={styles.agentHeading}>My Name</Text>

          <TextInput
            style={styles.agentName}
            onChangeText={(value) => onChangeText(value)}
            value={text}
            placeholder="Enter your name"
          />
          <ImageUpload title="+ My photo" onImageUpload={() => onImageUpload} />
        </View>
      </View>
      <View style={styles.SaveButton}>
        <TouchableOpacity style={styles.Btn} onPress={handleSave}>
          <View style={styles.TertiaryBtn}>
            <View style={styles.SaveBtnText}>
              <Text style={styles.save}>Save</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    paddingTop: 4,
    paddingBottom: 8,
    height: 82,
    justifyContent: "center",
  },
  CloseIcon: {
    paddingLeft: 24,
  },
  agentInfo: {
    flexDirection: "column",
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 16,
    paddingRight: 16,
    height: 500,
    justifyContent: "center",
  },
  agentHeading: {
    paddingLeft: 24,
    color: "#557184",
  },
  agentName: {
    height: 54,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: COLOURS.tertiary,
    color: "#557184",
    fontStyle: "italic",
  },
  SecondaryBtn: {
    height: 70,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 16,
    paddingBottom: 0,
  },
  BtnText: {
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: COLOURS.primary,
    borderWidth: 1,
    backgroundColor: COLOURS.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  logoText: {
    fontWeight: "600",
    color: COLOURS.primary,
  },
  footerParent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
  },
  text1: {
    fontSize: 12,
    color: COLOURS.tertiary,
  },
  text2: {
    fontSize: 12,
    fontWeight: "700",
    color: COLOURS.primary,
  },
  SaveButton: {
    height: 150,
    justifyContent: "center",
  },

  TertiaryBtn: {
    paddingLeft: 26,
    paddingRight: 26,
  },
  SaveBtnText: {
    backgroundColor: COLOURS.tertiary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  save: {
    fontWeight: "600",
    color: COLOURS.white,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
});
