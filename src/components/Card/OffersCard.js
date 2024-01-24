import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Styles } from "../../constants/Styles";

const OffersCard = ({ data }) => {
  const textStyle = Styles.mdSemiBold;
  const acceptedTextStyle = StyleSheet.compose(styles.acceptedText);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <Text style={[textStyle, styles.titleText]}>{data.title}</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>{data.info}</Text>
          <Text
            style={
              data.status !== "Accepted"
                ? StyleSheet.compose(acceptedTextStyle, {
                    backgroundColor: "#FFF0E8",
                    color: "#CF703B",
                  })
                : acceptedTextStyle
            }
          >
            {data.status}
          </Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.priceRow}>
          <View style={styles.priceColumn}>
            <Text style={styles.ruppeSymbol}>₹</Text>
            <Text style={styles.price}>{data.price}</Text>
          </View>
          <View style={styles.offeredDatesColumn}>
            <Text style={styles.offeredDatesLabel}>Offered Dates</Text>
            <View style={styles.offeredDatesContainer}>
              {data.offeredDates.map((date, index) => (
                <Text key={index} style={styles.offeredDates}>
                  {date}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.separator} />
      {data.status !== "Pending Acceptance" && (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book the Deal</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    marginTop: 18,
    borderRadius: 12,
  },
  cardContainer: {
    padding: 16,
  },
  titleText: {
    color: "#004F84",
    fontSize: 19,
  },
  mdSemiBold: {
    fontWeight: "600",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    marginTop: 2,
  },
  infoText: {
    color: "#557184",
    fontSize: 14,
  },
  acceptedText: {
    backgroundColor: "#DAFFEB",
    color: "#00843D",
    paddingHorizontal: 10,
    fontSize: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#F5F5F5",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  priceColumn: {
    flexDirection: "column",
  },
  ruppeSymbol: {
    fontSize: 14,
    fontWeight: "200",
    color: "#557184",
  },
  price: {
    fontSize: 14,
    fontWeight: "900",
    color: "#557184",
  },
  offeredDatesColumn: {
    flexDirection: "column",
    color: "#557184",
    fontSize: 12,
  },
  offeredDatesLabel: {
    textAlign: "right",
    fontSize: 12,
    fontWeight: "200",
  },
  offeredDatesContainer: {
    flexDirection: "row",
    gap: 6,
  },
  offeredDates: {
    fontSize: 14,
    fontWeight: "400",
    color: "#557184",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  buttonText: {
    color: "#007DD0",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default OffersCard;
