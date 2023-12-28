import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Styles } from '../../constants/Styles';

const SelectCampaignCard = ({ setSelectedCampaignOption }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { id: 1, name: 'Signage board', price: '1000 ' },
        { id: 2, name: 'Standee', price: '1500 ' },
        { id: 3, name: 'Notice/Lift Poster', price: '750' },
        { id: 4, name: 'Offline Kiosk (3x3)', price: '5000' },
        { id: 5, name: 'Offline Kiosk (4x4)', price: '9000' },
        { id: 6, name: 'Offline Kiosk (6x6)', price: '10000' },
        { id: 7, name: 'Offline Kiosk (10x10)', price: '15000' },
    ];

    const handleSelect = (optionId) => {
        setSelectedOption(optionId);
        setSelectedCampaignOption(optionId); 
    };

    return (
        <View>
            <Text style={[Styles.mdSemiBold, { color: '#557184', fontSize: 16, marginBottom: 5 }]}>Select Campaign</Text>
            <View style={styles.separator}></View>
            {options.map((option, index) => (
                <View key={option.id} style={{paddingVertical:4}}>
                    <TouchableOpacity
                        onPress={() => handleSelect(option.id)}
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 8 }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <View
                                style={{
                                    height: 18,
                                    width: 18,
                                    borderRadius: 9,
                                    borderWidth: 1,
                                    borderColor: selectedOption === option.id ? '#007DD0' : '#557184',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {selectedOption === option.id && (
                                    <View
                                        style={{
                                            height: 14,
                                            width: 14,
                                            borderRadius: 7,
                                            backgroundColor: '#007DD0'
                                        }}
                                    />
                                )}
                            </View>
                            <Text style={{ color: '#557184' }}>{option.name}</Text>
                        </View>
                        <Text style={{ color: '#557184', fontWeight: '800' }}>₹{option.price}</Text>
                    </TouchableOpacity>
                    {index !== options.length - 1 && <View style={styles.separator}></View>}
                </View>
            ))}
            <View style={styles.separator}></View>
        </View>
    );
};

export default SelectCampaignCard;

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#F5F5F5',
        marginTop: 6
    }
});
