import React, { useEffect, useState } from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import { TextInput, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import Card from '../components/Card';
import { LocalSvg } from 'react-native-svg';
import data from '../json/data.json';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);

    const [text, setText] = useState('');
    const [showData, setShowData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    const clearText = () => {
        setText('');
    };

    useEffect(() => {
        setIsLoading(true);
        const filteredData = data.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setTimeout(() => {
            setShowData(filteredData);
            setIsLoading(false); // Update isLoading when data is loaded
        }, 1000);
    }, [text]);

    
    return (
        <ImageBackground
            source={require('../../assets/gradient.png')}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={styles.container}>
                {isFocused ? (
                    <View style={styles.searchBarContainer}>
                        <AntDesign
                            name="arrowleft"
                            size={24}
                            color="#557184"
                            style={styles.icon}
                        />
                        <TextInput
                            placeholder="Search spaces, offers and deals"
                            placeholderTextColor="#557184"
                            style={[
                                styles.input,
                                {
                                    fontStyle: text ? 'normal' : 'italic',
                                    fontWeight: text ? '500' : 'normal',
                                    textAlign: 'left',
                                },
                            ]}
                            value={text}
                            onChangeText={(inputText) => setText(inputText)}
                            onFocus={() => {
                                setIsFocused2(true);
                                setShowData([]); 
                            }}
                            onBlur={() => setIsFocused2(false)}
                            clearTextOnFocus
                        />
                        {text.length > 0 && (
                            <TouchableOpacity onPress={clearText} style={styles.clearButton}>
                                <Text style={styles.clearButtonText}>Clear</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ) : (
                    <TouchableOpacity
                        style={[
                            styles.searchContainer,
                            { borderColor: isFocused ? '#007DD0' : '#557184' },
                        ]}
                        onPress={() => setIsFocused(true)}
                    >
                        <View>
                            <LocalSvg width={36} height={36} asset={require("../../assets/search1.svg")} style={{ marginLeft: 8 }} />
                        </View>

                        <View style={styles.searchContent}>
                            <EvilIcons name="search" size={24} color="#557184" style={styles.icon} />

                            <Text style={{ fontStyle: 'italic', color: '#557184', fontSize: 12 }}>Search</Text>
                        </View>
                        <View>
                            <LocalSvg width={36} height={36} asset={require("../../assets/search2.svg")} style={{ marginRight: 8 }} />
                        </View>
                    </TouchableOpacity>
                )}

{isLoading ? (
                    <Loading />
                ) : (
                    <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
                        {showData.length > 0 ? (
                            <View>
                                <Text
                                    style={{
                                        fontSize: 24,
                                        color: '#004F84',
                                        fontWeight: '700',
                                        marginTop: 10,
                                    }}
                                >
                                    Spaces
                                </Text>
                                {showData.map((item) => (
                                    <Card key={item.id} data={item} />
                                ))}
                            </View>
                        ) : null}
                    </ScrollView>
                )}
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = {
    container: {
        flex: 1,
        marginHorizontal: 16,
        paddingTop:
            Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    searchContainer: {
        width: '100%',
        paddingVertical: 6,
        borderRadius: 12,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchBarContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#557184',
        borderWidth: 1,
        borderRadius: 12,
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    searchContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        paddingLeft: 6,
    },
    input: {
        paddingLeft: 6,
        flex: 1,
        color: '#004F84',
        fontSize: 13,
        textAlign: 'center',
    },
    clearButton: {
        paddingRight: 10,
    },
    clearButtonText: {
        fontWeight: '600',
        color: '#007DD0',
    },
};

export default Main;
