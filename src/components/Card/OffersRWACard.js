import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Styles } from '../../constants/Styles'
import { LocalSvg } from "react-native-svg";
import SelectCampaignCard from './SelectCampaignCard';
import SelectDateCard from './SelectDateCard';

const OffersRWACard = () => {
    const [selectedCampaignOption, setSelectedCampaignOption] = useState(null);
    const [selectedDates, setSelectedDates] = useState([null, null, null]);
    const [offerButtonColor, setOfferButtonColor] = useState('#557184');

    useEffect(() => {
        if (selectedCampaignOption && selectedDates.every(date => date)) {
            setOfferButtonColor('#007DD0'); 
        } else {
            setOfferButtonColor('#557184');
        }
    }, [selectedCampaignOption, selectedDates]);
    
    
    const handleOfferClick = () => {
        if (selectedCampaignOption !== null && selectedDates.every(date => date !== null)) {
            console.log('Offer clicked!');
           console.log(selectedCampaignOption, selectedDates);
        }
    };
    return (
        <View >
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4 , marginTop:16}}>
                <LocalSvg
                    width={70}
                    height={70}
                    asset={require('../../../assets/offerRWA.svg')}

                />
                <View >
                    <Text style={[Styles.mdSemiBold, styles.titleText]}>Asset Miguara</Text>
                    <View style={styles.rowContainer}>
                        <Text style={styles.infoText}>460 Flats</Text>
                        <Text style={styles.dot}>•</Text>
                        <Text style={styles.infoText}>3km</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 4, gap: 14 }}>
            <SelectCampaignCard setSelectedCampaignOption={setSelectedCampaignOption} />
            <SelectDateCard setSelectedDates={setSelectedDates} />

            </View>
            <TouchableOpacity 
                style={{ 
                    backgroundColor: offerButtonColor, 
                    padding: 14, 
                    display:'flex', 
                    flexDirection:'row', 
                    alignItems:'center', 
                    justifyContent:'center', 
                    borderRadius: 10, 
                    marginTop: 10 
                }}
                onPress={handleOfferClick}
                disabled={offerButtonColor === '#557184'}
            >
                <LocalSvg asset={require('../../../assets/Offer.svg')} width={20} height={20} />
                <Text style={{ color: 'white', textAlign: 'center' }}>Offer</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OffersRWACard

const styles = StyleSheet.create({

    titleText: {
        color: "#004F84",
        fontSize: 19,
        marginBottom: 5,
    },

    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },


    infoText: {
        color: "#557184",
        fontSize: 14,
        marginRight: 10,
    },

    dot: {
        fontSize: 20,
        color: "#557184",
        marginRight: 10,
    },
})