import React, { useEffect, useRef } from 'react';
import {
  useFonts,
  IBMPlexSerif_100Thin,
  IBMPlexSerif_200ExtraLight,
  IBMPlexSerif_300Light,
  IBMPlexSerif_400Regular,
  IBMPlexSerif_500Medium,
  IBMPlexSerif_600SemiBold,
  IBMPlexSerif_700Bold,
} from "@expo-google-fonts/ibm-plex-serif";
import { StyleSheet, View, Animated } from "react-native";
import StackNavigator from "./src/Navigators/StackNavigator";
export default function App() {
  const [fontsLoaded] = useFonts({
    IBMPlexSerif_100Thin,
    IBMPlexSerif_200ExtraLight,
    IBMPlexSerif_300Light,
    IBMPlexSerif_400Regular,
    IBMPlexSerif_500Medium,
    IBMPlexSerif_600SemiBold,
    IBMPlexSerif_700Bold,
  });

  const scaleValue = useRef(new Animated.Value(10)).current; 

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true, 
    }).start();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Animated.Image
          source={require('./assets/splash.png')}
          style={[styles.imageStyle, { transform: [{ scale: scaleValue }] }]}
        />
      </View>
    );
  }

  return <StackNavigator />;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#004F84',
  },
  imageStyle: {
    width: 90, 
    height: 90,
    resizeMode: 'contain',
  },
});
