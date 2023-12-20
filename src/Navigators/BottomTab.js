import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LocalSvg } from 'react-native-svg';
import Offers from '../screens/Offers';
import Deal from '../screens/Deal';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#007DD0',
                tabBarInactiveTintColor: '#557184',
                tabBarLabelStyle: {
                    fontSize: 12,
                    lineHeight: 14,
                },
                tabBarIcon: ({ color, size, focused }) => {
                    let iconComponent;
                
                    if (route.name === 'Home') {
                        iconComponent = focused ? 
                            <LocalSvg width={24} height={24} asset={require("../../assets/home.svg")} /> :
                            <LocalSvg width={24} height={24} asset={require("../../assets/home_lined.svg")} />;
                    } 
                    else if (route.name === 'Offers') {
                        iconComponent = focused ? 
                            <LocalSvg width={24} height={24} asset={require("../../assets/offer_filled.svg")} /> :
                            <LocalSvg width={24} height={24} asset={require("../../assets/offer_lined.svg")} />;
                    } 
                    else if (route.name === 'Deals') {
                        iconComponent = focused ? 
                            <LocalSvg width={28} height={28} asset={require("../../assets/deal_filled.svg")} /> :
                            <LocalSvg width={28} height={28} asset={require("../../assets/deal_lined.svg")} />;
                    }
                
                    return iconComponent;
                },

                tabBarStyle: {
                    minHeight: 80,
                    paddingVertical: 16,
                    borderStyle: 'solid',
                    paddingBottom: 16,
                    paddingTop: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowColor: '#aaaaaa',
                },
                tabBarLabel: (route.name === 'Search') ? '' : route.name,
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name='Offers' component={Offers} />
            <Tab.Screen name='Deals' component={Deal} />
        </Tab.Navigator>
    );
}
