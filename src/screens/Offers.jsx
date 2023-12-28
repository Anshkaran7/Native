import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StatusBar, ImageBackground, StyleSheet, View,TouchableOpacity,Text, ScrollView, Platform,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LocalSvg } from "react-native-svg";
import { Styles } from "../constants/Styles";
import OffersCard from "../components/Card/OffersCard";
import data from '../json/offersData.json'



const Offers = () => {
 
  const todayData = data.filter(item => item.date === "today");
  const tomorrowData = data.filter(item => item.date === "tomorrow");


  return (
    <ImageBackground
      source={require("../../assets/gradient.png")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={[styles.searchContainer, { borderColor: "#557184" }]}

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
              asset={require("../../assets/offersSearch.svg")}
              style={styles.searchIconSvg}
            />
          </View>
        </TouchableOpacity>

        <ScrollView contentContainerStyle={styles.scrollViewContent}>

          <View>
            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={[Styles.xxlBoldText, styles.spacesTitle]}>
                Offers
              </Text>
              <TouchableOpacity style={{ backgroundColor: "#007DD0", borderRadius: 18, paddingHorizontal: 10 }}>
                <Text style={[Styles.mdSemiBold, { color: 'white', fontSize: 12 }]}>
                  Upcoming: All
                  <AntDesign name="caretdown" size={14} color="white" />
                </Text>
              </TouchableOpacity>

            </View>

             {/* Campaigns Today */}
          <View>
            <Text style={[Styles.mdText, { color: '#557184', marginTop: 10, fontStyle: 'italic', textAlign: 'center' }]}>
              Campaigns Today
            </Text>
            {todayData.map((item) => (
              <OffersCard key={item.id} data={item} />
            ))}
          </View>

          {/* Campaigns Tomorrow */}
          <View>
            <Text style={[Styles.mdText, { color: '#557184', marginTop: 10, fontStyle: 'italic', textAlign: 'center', marginTop:20 }]}>
              Campaigns Tomorrow
            </Text>
            {tomorrowData.map((item) => (
              <OffersCard key={item.id} data={item} />
            ))}
          </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
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

export default Offers;
