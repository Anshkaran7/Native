import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";

import { Styles } from "../../constants/Styles";
import { selectIsLoggedIn } from "../../redux/slices/authSlices";

const InfoContainer = ({ label, value, campaignText }) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.minMaxText}>{label}</Text>
      <Text style={styles.priceText}>{value}</Text>
      <Text style={styles.campaignText}> - Campaign Type</Text>
    </View>
  );
};

const HomeCard = ({ data, onButtonPress }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={
        isLoggedIn
          ? () => navigation.navigate("OfferGeneration")
          : onButtonPress
      }
      style={styles.cardContainer}
    >
      <Text style={[Styles.mdSemiBold, styles.titleText]}>{data.title}</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.infoText}>{data.flats}</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.infoText}>{data.distance}</Text>
      </View>
      <InfoContainer label="Min  " value={data.minPrice} />
      <InfoContainer label="Max  " value={data.maxPrice} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  titleText: {
    color: "#004F84",
    fontSize: 19,
    marginBottom: 5,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    color: "#557184",
    fontSize: 14,
    marginRight: 10,
  },
  dot: {
    fontSize: 20,
    color: "#557184",
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  minMaxText: {
    fontSize: 14,
    fontWeight: "300",
    fontStyle: "italic",
  },
  priceText: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "italic",
    color: "#557184",
  },
  campaignText: {
    fontSize: 14,
    fontWeight: "300",
    fontStyle: "italic",
  },
});

export default HomeCard;
