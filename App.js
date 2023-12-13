import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  IBMPlexSerif_100Thin,
  IBMPlexSerif_100Thin_Italic,
  IBMPlexSerif_200ExtraLight,
  IBMPlexSerif_200ExtraLight_Italic,
  IBMPlexSerif_300Light,
  IBMPlexSerif_300Light_Italic,
  IBMPlexSerif_400Regular,
  IBMPlexSerif_400Regular_Italic,
  IBMPlexSerif_500Medium,
  IBMPlexSerif_500Medium_Italic,
  IBMPlexSerif_600SemiBold,
  IBMPlexSerif_600SemiBold_Italic,
  IBMPlexSerif_700Bold,
  IBMPlexSerif_700Bold_Italic,
} from '@expo-google-fonts/ibm-plex-serif';
import StackNavigator from './src/Navigators/StackNavigator';

export default function App() {

  let [fontsLoaded] = useFonts({
    IBMPlexSerif_100Thin,
    IBMPlexSerif_100Thin_Italic,
    IBMPlexSerif_200ExtraLight,
    IBMPlexSerif_200ExtraLight_Italic,
    IBMPlexSerif_300Light,
    IBMPlexSerif_300Light_Italic,
    IBMPlexSerif_400Regular,
    IBMPlexSerif_400Regular_Italic,
    IBMPlexSerif_500Medium,
    IBMPlexSerif_500Medium_Italic,
    IBMPlexSerif_600SemiBold,
    IBMPlexSerif_600SemiBold_Italic,
    IBMPlexSerif_700Bold,
    IBMPlexSerif_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }



  return (
    <StackNavigator/>
  );
}

