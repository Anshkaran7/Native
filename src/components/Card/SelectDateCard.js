import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DatePickerModal from '../DatePickerModal';
import { Styles } from '../../constants/Styles';

const SelectDateCard = ({ setSelectedDates }) => {
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [selectedDates, setSelectedDatesState] = useState([null, null, null]);
    const [currentOption, setCurrentOption] = useState(null);

    const handleSelectDate = (date) => {
        const updatedDates = [...selectedDates];
        
        switch (currentOption) {
            case 1:
                updatedDates[0] = date.toDateString();
                break;
            case 2:
                updatedDates[1] = date.toDateString();
                break;
            case 3:
                updatedDates[2] = date.toDateString();
                break;
            default:
                break;
        }

        setSelectedDatesState(updatedDates);
        setSelectedDates(updatedDates.filter(date => date !== null));
        setDatePickerVisible(false);
    };

    return (
        <View>
            <Text style={[Styles.mdSemiBold, { color: '#557184', fontSize: 16, marginBottom: 2 }]}>Select 3 Dates</Text>
            <Text style={{ color: '#557184', fontSize: 12, marginBottom: 5, fontWeight: '300', fontStyle: 'italic' }}>To give offered party the choice of accepting one of the dates</Text>

            {[1, 2, 3].map((option) => (
                <View key={option}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 8 }}
                        onPress={() => {
                            setCurrentOption(option);
                            setDatePickerVisible(true);
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <AntDesign name="calendar" size={16} color="#557184" />
                            <Text style={{ color: '#557184', fontWeight: '600' }}>{`Date Option ${option}`}</Text>
                        </View>
                        <Text style={{ color: '#557184', fontWeight: '400', fontStyle: 'italic' }}>
                            {selectedDates[option - 1] || 'Select a Date'}
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.separator}></View>
                </View>
            ))}

            {isDatePickerVisible && (
                <DatePickerModal
                    isVisible={isDatePickerVisible}
                    onSelect={(date) => handleSelectDate(date)}
                />
            )}
        </View>
    );
};

export default SelectDateCard;

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#F5F5F5',
        marginTop: 6
    }
});
