import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";

import "react-native-gesture-handler";
import BottomTabNavigator from "./BottomTab";
import AgentRegScreen from "../screens/AgentReg";
import BrandNameScreen from "../screens/BrandName";
import BrandRegScreen from "../screens/BrandReg";
import Home from "../screens/Home";
import OfferGeneration from "../screens/OfferGeneration";
import PersonaScreen from "../screens/PersonaSelection";
import SearchPage from "../screens/SearchPage";
import DealDetails from "../screens/DealDetails";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="black" />
      <Stack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SearchPage"
          component={SearchPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="OfferGeneration"
          component={OfferGeneration}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="BottomTab"
          component={BottomTabNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PersonaScreen"
          component={PersonaScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="BrandReg"
          component={BrandRegScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="BrandName"
          component={BrandNameScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AgentReg"
          component={AgentRegScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DealsDetails"
          component={DealDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
