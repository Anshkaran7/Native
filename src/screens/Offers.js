import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Offers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Offers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});

export default Offers;
