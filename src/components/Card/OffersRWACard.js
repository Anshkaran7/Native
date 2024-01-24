import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LocalSvg } from "react-native-svg";

import SelectCampaignCard from "./SelectCampaignCard";
import SelectDateCard from "./SelectDateCard";
import { Styles } from "../../constants/Styles";

const OffersRWACard = () => {
  const [selectedCampaignOption, setSelectedCampaignOption] = useState(null);
  const [selectedDates, setSelectedDates] = useState([null, null, null]);
  const offerButtonColor =
    selectedCampaignOption && selectedDates.every((date) => date)
      ? "#007DD0"
      : "#557184";

  const navigation = useNavigation();

  const handleOfferClick = () => {
    if (
      selectedCampaignOption !== null &&
      selectedDates.every((date) => date !== null)
    ) {
      navigation.navigate("Offers");
    }
  };

  return (
    <View>
      <View style={styles.cardContainer}>
        <LocalSvg
          width={70}
          height={70}
          asset={require("../../../assets/offerRWA.svg")}
        />
        <View style={styles.cardContent}>
          <Text style={[Styles.mdSemiBold, styles.titleText]}>
            Asset Miguara
          </Text>
          <View style={styles.rowContainer}>
            <Text style={styles.infoText}>460 Flats</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.infoText}>3km</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardDetails}>
        <SelectCampaignCard
          setSelectedCampaignOption={setSelectedCampaignOption}
        />
        <SelectDateCard setSelectedDates={setSelectedDates} />
      </View>
      <TouchableOpacity
        style={[styles.offerButton, { backgroundColor: offerButtonColor }]}
        onPress={handleOfferClick}
        disabled={offerButtonColor === "#557184"}
      >
        <LocalSvg
          asset={require("../../../assets/Offer.svg")}
          width={20}
          height={20}
        />
        <Text style={styles.offerButtonText}>Offer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 16,
  },
  cardContent: {
    marginLeft: 8,
  },
  cardDetails: {
    marginTop: 4,
    gap: 14,
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
  offerButton: {
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  offerButtonText: {
    color: "white",
    textAlign: "center",
    marginLeft: 8,
  },
});

export default OffersRWACard;
