import React from "react";
import { View, StyleSheet } from "react-native";
import { LocalSvg } from "react-native-svg";

const Loading = () => {
  return (
    <View style={styles.container}>
      <LocalSvg
        style={styles.svg}
        height={200}
        asset={require("../../assets/searchpage.svg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    //any additional style for the SVG
  },
});

export default Loading;
