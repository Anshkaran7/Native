import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import OffersRWACard from '../components/Card/OffersRWACard';

const OffersRWA = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', paddingHorizontal: 20, height: '100%' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20 }}>
                <AntDesign name="arrowleft" size={20} color="#557184" />
                <Text style={{ fontSize: 16, color: '#004F84', fontWeight: '800' }}>Offer RWA</Text>
                <Text></Text>
            </View>
            <View style={styles.separator}></View>

            <ScrollView 
                contentContainerStyle={{ paddingBottom: 50 }}
                showsVerticalScrollIndicator={false} 
                showsHorizontalScrollIndicator={false}
            >
                <OffersRWACard />
            </ScrollView>
        </SafeAreaView>
    );
}

export default OffersRWA;

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#F5F5F5',
    }
});
