import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { LocalSvg } from 'react-native-svg';
import Main from '../screens/Main';

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
                tabBarIcon: ({ color, size }) => {
                    let iconComponent;

                    if (route.name === 'Home') {
                        iconComponent = <Entypo name="home" size={24} color="#557184" />;
                    } else if (route.name === 'Offers') {
                        iconComponent = <LocalSvg width={24} height={24} asset={require("../../assets/offers.svg")} />
                    } else if (route.name === 'Deals') {
                        iconComponent = <LocalSvg width={28} height={28} asset={require("../../assets/Deal.svg")} color={'#557184'} />
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
            <Tab.Screen name="Home" component={Main} />
            <Tab.Screen name='Offers' component={Main} />
            <Tab.Screen name='Deals' component={Main} />


        </Tab.Navigator>
    );
}