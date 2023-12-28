import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const DatePickerModal = ({ isVisible, onSelect }) => {
    const handleDateSelect = (day) => {
        const selectedDate = new Date(day.timestamp);
        onSelect(selectedDate);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Calendar
                        onDayPress={(day) => handleDateSelect(day)}
                        hideExtraDays={true}
                        
                    />
                </View>
            </View>
        </Modal>
    );
};

export default DatePickerModal;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center'
    }
});
