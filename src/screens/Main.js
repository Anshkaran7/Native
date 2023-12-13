import React, { useEffect, useState } from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import { TextInput, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import Card from '../components/Card';
import { LocalSvg } from 'react-native-svg';
import data from '../json/data.json';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState('');
    const [showData, setShowData] = useState([]);

    const navigation = useNavigation();

    const clearText = () => {
        setText('');
    };

    useEffect(() => {
        const filteredData = data.filter((item) =>
            item.title.toLowerCase().includes(text.toLowerCase())
        );
        setShowData(filteredData);
    }, [text]);

    const handleSearchPress = () => {
        navigation.navigate('Home');
    };

    return (
        <ImageBackground
            source={require('../../assets/gradient.png')}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={styles.container}>
                <View
                    style={[
                        styles.searchContainer,
                        { borderColor: isFocused ? '#007DD0' : '#557184' },
                    ]}
                >
                    <View>
                        <LocalSvg
                            width={36}
                            height={36}
                            asset={require("../../assets/search1.svg")}
                            style={{ marginLeft: 8 }}
                        />
                    </View>

                    
                    <View style={styles.searchContent}>
                        <EvilIcons
                            name="search"
                            size={24}
                            color="#557184"
                            style={styles.icon}
                        />
                        <TouchableOpacity
                            style={{ display: 'flex', alignItems: 'center' }}
                            onPress={handleSearchPress}
                        >
                            <Text
                                style={{
                                    fontStyle: 'italic',
                                    color: '#557184',
                                    fontSize: 12,
                                }}
                            >
                                Search
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <LocalSvg
                            width={36}
                            height={36}
                            asset={require("../../assets/search2.svg")}
                            style={{ marginRight: 8 }}
                        />
                    </View>
                </View>

              

                <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
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
                    <View>
                        {showData.map((item) => (
                            <Card key={item.id} data={item} />
                        ))}
                    </View>
                </ScrollView>
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
