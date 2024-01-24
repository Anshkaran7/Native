import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  FlatList,
} from "react-native";

import BrandNameIcon from "../../assets/SVG/brandNameIcon";
import CloseIcon from "../../assets/SVG/closeIcon";
import { COLOURS } from "../constants";
import brandData from "../json/brand.json";

const BrandNameScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleAddNewBrand = () => {
    const brandName = selectedBrand?.name || searchQuery.trim();

    if (brandName !== "") {
      navigation.navigate("BrandReg", { brandName });
    }
  };
  useEffect(() => {
    const filtered = brandData.filter(
      (brand) =>
        brand.name &&
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredBrands(filtered);
  }, [searchQuery]);
  const handleBrandSelection = (brand) => {
    setSelectedBrand(brand);
    setSearchQuery(brand.name);
  };

  return (
    <SafeAreaView>
      <View style={styles.topContainer}>
        <View style={styles.CloseIcon}>
          <Pressable onPress={handleGoBack}>
            <CloseIcon />
          </Pressable>
        </View>
      </View>
      <View style={styles.brandInfo}>
        <View>
          <Text style={styles.brandHeading}>My brand name</Text>
          <TextInput
            style={styles.brandName}
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
            placeholder="Search for your brand"
          />
        </View>
        <FlatList
          data={filteredBrands}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              style={styles.brandList}
              onPress={() => handleBrandSelection(item)}
            >
              <BrandNameIcon />
              <Text style={styles.brandListName}>{item.name}</Text>
            </Pressable>
          )}
        />

        <Pressable style={styles.newBrand} onPress={handleAddNewBrand}>
          <Text style={styles.newBrandText}>+ Add as a new brand</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default BrandNameScreen;

const styles = StyleSheet.create({
  topContainer: {
    paddingTop: 4,
    paddingBottom: 8,
    height: 100,
    justifyContent: "flex-end",
  },
  CloseIcon: {
    paddingLeft: 24,
  },
  brandInfo: {
    flexDirection: "column",
    paddingTop: 30,
    paddingBottom: 36,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "center",
  },
  brandHeading: {
    paddingLeft: 24,
    color: "#557184",
  },
  brandName: {
    height: 54,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: COLOURS.tertiary,
    color: "#557184",
    fontStyle: "italic",
  },
  brandList: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    padding: 12,
    borderStyle: "solid",
    borderColor: "#fff",
    borderBottomWidth: 1,
    width: 330,
  },
  brandListName: {
    paddingLeft: 12,
    fontSize: 14,
    color: "#557184",
  },
  newBrand: {
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  newBrandText: {
    fontWeight: "600",
    color: COLOURS.primary,
    margin: 4,
  },
});
