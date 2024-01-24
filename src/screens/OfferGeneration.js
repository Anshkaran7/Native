import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import OffersRWACard from "../components/Card/OffersRWACard";

const OffersRWA = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} color="#557184" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Offer RWA</Text>
        <Text />
      </View>
      <View style={styles.separator} />

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <OffersRWACard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 16,
    color: "#004F84",
    fontWeight: "800",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#F5F5F5",
  },
  scrollViewContent: {
    paddingBottom: 50,
  },
});

export default OffersRWA;
