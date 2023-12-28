import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StatusBar,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LocalSvg } from "react-native-svg";
import { Styles } from "../constants/Styles";
import data from "../json/data.json";
import HomeCard from "../components/Card/HomeCard";

const Home = () => {
  const [text] = useState("");
  const [showData, setShowData] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );
    setShowData(filteredData);
  }, [text]);

  const handlePress = () => {
    navigation.navigate("SearchPage");
  };

  return (
    <ImageBackground
    source={require('../../assets/gradient.png')}
    style={{ flex: 1 }}
>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={[styles.searchContainer, { borderColor: "#557184" }]}
          onPress={handlePress}
        >
          <View style={styles.searchIcon}>
            <LocalSvg
              width={36}
              height={36}
              asset={require("../../assets/search1.svg")}
              style={styles.searchIconSvg}
            />
          </View>

          <View style={styles.searchContent}>
            <EvilIcons
              name="search"
              size={24}
              color="#557184"
              style={styles.icon}
            />
            <Text style={styles.searchPlaceholder}>Search</Text>
          </View>
          <View style={styles.searchIcon}>
            <LocalSvg
              width={36}
              height={36}
              asset={require("../../assets/search2.svg")}
              style={styles.searchIconSvg}
            />
          </View>
        </TouchableOpacity>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {showData.length > 0 ? (
            <View>
              <Text style={[Styles.xxlBoldText, styles.spacesTitle]}>
                Spaces
              </Text>
              {showData.map((item) => (
                <HomeCard key={item.id} data={item} />
              ))}
            </View>
          ) : null}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    width: "100%",
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchIcon: {
    marginLeft: 8,
    marginRight: 8,
  },
  searchIconSvg: {
    marginLeft: 8,
    marginRight: 8,
  },
  searchContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    paddingLeft: 6,
  },
  searchPlaceholder: {
    fontStyle: "italic",
    color: "#557184",
    fontSize: 12,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  spacesTitle: {
    fontSize: 30,
    color: "#004F84",
    marginTop: 10,
  },
});

export default Home;
