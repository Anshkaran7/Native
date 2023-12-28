import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { LocalSvg } from "react-native-svg";

import Deal from "../screens/Deal";
import Home from "../screens/Home";
import Offers from "../screens/Offers";

const Tab = createBottomTabNavigator();

const styles = {
  tabBar: {
    minHeight: 80,
    paddingVertical: 16,
    borderStyle: "solid",
    paddingBottom: 16,
    paddingTop: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderTopWidth: 0,
    elevation: 0,
    shadowColor: "#aaaaaa",
  },
  tabBarLabel: {
    fontSize: 12,
    lineHeight: 14,
  },
  icon: {
    width: 24,
    height: 24,
  },
  focusedIcon: {
    width: 28,
    height: 28,
  },
  tabBarActiveTintColor: "#007DD0",
  tabBarInactiveTintColor: "#557184",
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: styles.tabBarActiveTintColor,
        tabBarInactiveTintColor: styles.tabBarInactiveTintColor,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIcon: ({ color, size, focused }) => {
          let iconComponent;

          if (route.name === "Home") {
            iconComponent = focused ? (
              <LocalSvg
                style={styles.focusedIcon}
                asset={require("../../assets/home.svg")}
              />
            ) : (
              <LocalSvg
                style={styles.icon}
                asset={require("../../assets/home_lined.svg")}
              />
            );
          } else if (route.name === "Offers") {
            iconComponent = focused ? (
              <LocalSvg
                style={styles.focusedIcon}
                asset={require("../../assets/offer_filled.svg")}
              />
            ) : (
              <LocalSvg
                style={styles.icon}
                asset={require("../../assets/offer_lined.svg")}
              />
            );
          } else if (route.name === "Deals") {
            iconComponent = focused ? (
              <LocalSvg
                style={styles.focusedIcon}
                asset={require("../../assets/deal_filled.svg")}
              />
            ) : (
              <LocalSvg
                style={styles.icon}
                asset={require("../../assets/deal_lined.svg")}
              />
            );
          }

          return iconComponent;
        },
        tabBarStyle: styles.tabBar,
        tabBarLabel: route.name === "Search" ? "" : route.name,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Offers" component={Offers} />
      <Tab.Screen name="Deals" component={Deal} />
    </Tab.Navigator>
  );
}
