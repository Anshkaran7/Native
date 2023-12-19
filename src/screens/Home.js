import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import Card from '../components/Card';
import data from '../json/data.json'
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    const [showData, setShowData] = useState([])

    const clearText = () => {
        setText('');
    };

    useEffect(() => {
        const filteredData = data.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setShowData(filteredData);
    }, [text]);

    const navigation = useNavigation();

const handleGoBack=()=>{
    navigation.goBack()
}

    return (
        <SafeAreaView style={styles.container}>

            <View
                style={[
                    styles.searchContainer,
                    { borderColor: isFocused ? '#007DD0' : '#557184' },
                ]}
            >
                <TouchableOpacity onPress={handleGoBack}>
                <AntDesign name="arrowleft" size={24} color="#557184" style={styles.icon} />
                </TouchableOpacity>
                <TextInput
                    placeholder="Search spaces, offers and deals"
                    placeholderTextColor="#557184"
                    style={[
                        styles.input,
                        {
                            fontStyle: text ? 'normal' : 'italic',
                            fontWeight: text ? '500' : 'normal',
                        },
                    ]}
                    value={text}
                    onChangeText={(inputText) => setText(inputText)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    clearTextOnFocus
                />
                {text.length > 0 && (
                    <TouchableOpacity onPress={clearText} style={styles.clearButton}>
                        <Text style={styles.clearButtonText}>Clear</Text>
                    </TouchableOpacity>
                )}
            </View>
            {!isFocused && (
                <Loading />
            )}
            {(showData && text.length > 0 ) && (
                <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                    <View>
                        {showData.map((item) => (
                            <Card key={item.id} data={item} />
                        ))}
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
};

const styles = {
    container: {
        flex: 1,
        marginHorizontal: 16,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    searchContainer: {
        marginTop: 16,
        width: '100%',
        paddingVertical: 13,
        borderRadius: 12,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        paddingLeft: 6,
    },
    input: {
        paddingLeft: 6,
        flex: 1,
        color: '#004F84',
        fontSize: 13,
    },
    clearButton: {
        paddingRight: 10,
    },
    clearButtonText: {
        fontWeight: '600',
        color: '#007DD0',
    },
};

export default Home;
