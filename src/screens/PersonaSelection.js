import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CloseIcon from "../../assets/SVG/closeIcon";

const PersonaScreen = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleBrandPress = () => {
    navigation.navigate("BrandReg");
  };

  const handleAgentPress = () => {
    navigation.navigate("AgentReg");
  };

  return (
    <SafeAreaView>
      <View style={styles.topContainer}>
        <View style={styles.CloseIcon}>
          <TouchableOpacity onPress={handleGoBack}>
            <CloseIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.images}>
        <Pressable onPress={handleBrandPress}>
          <Image
            style={styles.Brand}
            source={require("../../assets/BrandImage.png")}
          />
        </Pressable>

        <Pressable onPress={handleAgentPress}>
          <Image
            style={styles.Agent}
            source={require("../../assets/AgentImage.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    justifyContent: "center",
    height: 50,
  },
  CloseIcon: {
    paddingLeft: 34,
  },
  images: {
    paddingTop: 20,
    alignItems: "center",
    flexDirection: "column",
  },
  Brand: {
    height: 310,
    width: 310,
    borderRadius: 12,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(85, 113, 132, 0.16)",
  },
  Agent: {
    height: 310,
    width: 310,
    borderRadius: 12,
    marginTop: 16,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(85, 113, 132, 0.16)",
  },
});

export default PersonaScreen;
