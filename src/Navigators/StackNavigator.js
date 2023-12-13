import {
    CardStyleInterpolators,
    createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import 'react-native-gesture-handler'
import Home from "../screens/Home";
import Main from "../screens/Main";
import BottomTabNavigator from "./BottomTab";

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
                    name="Main"
                    component={Main}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="BottomTab"
                    component={BottomTabNavigator}
                />



            </Stack.Navigator>
        </NavigationContainer>
    );
}