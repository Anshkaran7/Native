import { View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React from 'react'
import DealCard from '../components/Card/DealCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LocalSvg } from 'react-native-svg'
import { Styles } from '../constants/Styles'
import { useNavigation } from '@react-navigation/native'

const DealDetails = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fff',
                paddingHorizontal: 20,
                paddingTop: 20,
            }}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Pressable onPress={() => navigation.goBack()}>
                    <LocalSvg asset={require("../../assets/Back.svg")} />
                </Pressable>
                <Text style={[Styles.mdSemiBold, {
                    fontSize: 24,
                    color: '#007DD0',
                }]}>Deal Details</Text>
                <Text></Text>
            </View>
            <ScrollView style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <DealCard type="dealsDetails" data={{
                    title: 'Asset Miguara',
                    info: 'Signage board',
                    price: 90000,
                    date: '10 Mar',
                }} />

                <LocalSvg asset={require("../../assets/invoice.svg")} />

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 5,
                    }}>
                    <LocalSvg asset={require("../../assets/Download.svg")} />
                    <Text style={[Styles.mdSemiBold, { color: '#007DD0', fontSize: 12, marginBottom: 2 }]}>Download Invoice</Text>
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    )
}

export default DealDetails