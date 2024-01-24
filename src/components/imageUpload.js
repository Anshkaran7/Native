import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Text,
} from "react-native";

import { COLOURS } from "../constants";
const ImageUploadAgent = ({ onImageUpload, title }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Request permission to access the device's gallery
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("To proceed grant permission to access your photo gallery");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        onImageUpload();
      }
    } catch (error) {
      console.error("Error picking an image", error);
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.uploadedImage} />
      ) : (
        <TouchableOpacity onPress={pickImage} style={styles.SecondaryBtn}>
          <View style={styles.BtnText}>
            <Text style={styles.logoText}>{title}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
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

  uploadedImage: {
    marginLeft: 12,
    width: 338,
    height: 300,
    borderRadius: 12,
  },
});
export default ImageUploadAgent;
