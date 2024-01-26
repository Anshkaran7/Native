import { EvilIcons, AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StatusBar,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Platform,
  Modal,
  TouchableHighlight,
  Pressable
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LocalSvg } from "react-native-svg";
import { Styles } from "../constants/Styles";
import data from "../json/dealsData.json";
import DealCard from "../components/Card/DealCard";
import MainDealCard from "../components/Card/MainDealCard";
import CustomModal from "../components/Modal";


const Deal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const changeTab = (tab) => {
    setSelectedTab(tab);
  };


  const todayData = data.filter((item) => item.campaign === "today");
  const tomorrowData = data.filter((item) => item.campaign === "tomorrow");
  return (
    <ImageBackground
      source={require("../../assets/gradient.png")}
      style={style.backgroundImage}
    >
      <SafeAreaView style={style.container}>
        <TouchableOpacity
          style={[style.searchContainer, Styles.searchContainer]}
        >
          <View style={style.searchIcon}>
            <LocalSvg
              width={36}
              height={36}
              asset={require("../../assets/search1.svg")}
              style={style.searchIconSvg}
            />
          </View>

          <View style={style.searchContent}>
            <EvilIcons name="search" size={24} style={style.icon} />
            <Text style={style.searchPlaceholder}>Search</Text>
          </View>
          <View style={style.searchIcon}>
            <LocalSvg
              width={36}
              height={36}
              asset={require("../../assets/offersSearch.svg")}
              style={style.searchIconSvg}
            />
          </View>
        </TouchableOpacity>


        <ScrollView
          contentContainerStyle={style.scrollViewContent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <View style={style.headerContainer}>
              <Text style={[Styles.xxlBoldText, style.spacesTitle]}>
                Deals
              </Text>
              <TouchableOpacity
                style={[style.upcomingButton, Styles.mdSemiBold]}
                onPress={toggleModal}
              >
                <Text style={style.upcomingButtonText}>Upcoming:</Text>
                <AntDesign name="caretdown" size={14} color="white" />
              </TouchableOpacity>
            </View>
            <View>
              <MainDealCard />
            </View>

            {/* Campaigns Today */}
            <View style={style.campaignContainer}>
              <Text style={[Styles.mdText, style.campaignTitle]}>
                Campaigns Today
              </Text>
              {todayData.map((item) => (
                <DealCard key={item.id} data={item} />
              ))}
            </View>

            {/* Campaigns Tomorrow */}
            <View style={style.campaignContainer}>
              <Text style={[Styles.mdText, style.campaignTitle]}>
                Campaigns Tomorrow
              </Text>
              {tomorrowData.map((item) => (
                <DealCard key={item.id} data={item} />
              ))}
            </View>
          </View>
        </ScrollView>

        <CustomModal
          modalVisible={modalVisible}
          toggleModal={toggleModal}
          selectedTab={selectedTab}
          changeTab={changeTab}
        />

     

      </SafeAreaView>
    </ImageBackground>
  );
};

export default Deal;

const style = StyleSheet.create({
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
  separator: {
    height: 1,
    width: "100%",
    marginTop: 20,
    backgroundColor: "#F5F5F5",
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
    color: "#557184",
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
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  upcomingButton: {
    backgroundColor: "#007DD0",
    flexDirection: "row",
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
  },
  upcomingButtonText: {
    color: "white",
    fontSize: 12,
    marginRight: 6,
  },
  campaignContainer: {
    marginTop: 10,
  },
  campaignTitle: {
    color: "#557184",
    marginTop: 10,
    fontStyle: "italic",
    textAlign: "center",
  },
});
