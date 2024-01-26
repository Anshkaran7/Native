import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal as RNModal, Pressable } from 'react-native';
import { Styles } from '../constants/Styles';
import { LocalSvg } from 'react-native-svg';


const CustomModal = ({ modalVisible,
    toggleModal,
    selectedTab,
    selectedTab1,
    type,
    changeTab,
    changeTab1
}) => {
    return (
        <RNModal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleModal}
        >
            <View style={style.modalContainer}>
                <View style={style.modalContent}>
                    <View style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={toggleModal}>
                                <LocalSvg asset={require("../../assets/Close.svg")} />
                            </TouchableOpacity>
                            <Text style={[Styles.mdSemiBold, { color: '#004F84', fontSize: 18 }]}
                            >Filters</Text>
                            <Text></Text>
                        </View>
                        <View style={style.separator} />

                        <View style={{ marginTop: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[Styles.mdText, { color: '#557184', fontSize: 14, marginRight: 10 }]}
                            >Campaign Status</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Pressable style={{
                                    backgroundColor: selectedTab === 'upcoming' ? '#007DD0' : 'white',
                                    borderTopLeftRadius: 18,
                                    borderBottomLeftRadius: 18,
                                    paddingHorizontal: 16,
                                    borderWidth: 1,
                                    borderColor: '#007DD0',
                                    paddingVertical: 8,
                                }} onPress={() => changeTab('upcoming')}>
                                    <Text style={{ color: selectedTab === 'upcoming' ? 'white' : '#007DD0', fontSize:12 }}>Upcoming</Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        backgroundColor: selectedTab === 'archieved' ? '#007DD0' : 'white',
                                        borderTopRightRadius: 18,
                                        borderWidth: 1,
                                        borderColor: '#007DD0',
                                        borderBottomRightRadius: 18,
                                        paddingHorizontal: 16,
                                        paddingVertical: 8,
                                    }}
                                    onPress={() => changeTab('archieved')}
                                >
                                    <Text style={{ color: selectedTab === 'archieved' ? 'white' : '#007DD0', fontSize:12 }}>Archieved</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={style.separator} />

{ type === 'offers' ? (
    <>
                        <View style={{ marginTop: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[Styles.mdText, { color: '#557184', fontSize: 14, marginRight: 10 }]}
                            >Offer Acceptance</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Pressable style={{
                                    backgroundColor: selectedTab1 === 'all' ? '#007DD0' : 'white',
                                    borderTopLeftRadius: 18,
                                    borderBottomLeftRadius: 18,
                                    paddingHorizontal: 16,
                                    borderWidth: 1,
                                    borderColor: '#007DD0',
                                    paddingVertical: 8,
                                }} onPress={() => changeTab1('all')}>
                                    <Text style={{ color: selectedTab1 === 'all' ? 'white' : '#007DD0', fontSize:12 }}>All</Text>
                                </Pressable>
                                <Pressable style={{
                                    backgroundColor: selectedTab1 === 'pending' ? '#007DD0' : 'white',
                                    paddingHorizontal: 16,
                                    borderColor: '#007DD0',
                                    borderTopWidth:1,
                                    borderBottomWidth:1,
                                    paddingVertical: 8,
                                }} onPress={() => changeTab1('pending')}>
                                    <Text style={{ color: selectedTab1 === 'pending' ? 'white' : '#007DD0', fontSize:12 }}>Pending</Text>
                                </Pressable>
                                <Pressable
                                    style={{
                                        backgroundColor: selectedTab1 === 'accepted' ? '#007DD0' : 'white',
                                        borderTopRightRadius: 18,
                                        borderWidth: 1,
                                        borderColor: '#007DD0',
                                        borderBottomRightRadius: 18,
                                        paddingHorizontal: 16,
                                        paddingVertical: 8,
                                    }}
                                    onPress={() => changeTab1('accepted')}
                                >
                                    <Text style={{ color: selectedTab1 === 'accepted' ? 'white' : '#007DD0', fontSize:12 }}>Accepted</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={style.separator} />
</>
) : null}
                        <View style={{
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                        }}>

                            <Text style={[Styles.mdSemiBold, { color: '#007DD0', fontSize: 14, marginTop: 20 }]}>Clear All</Text>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#007DD0', borderRadius: 12, paddingHorizontal: 20, paddingVertical: 12, marginTop: 20 }}>
                                <Text style={{ color: 'white' }}>Show 12 Deals</Text>
                                <LocalSvg asset={require("../../assets/leftArrow.svg")} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </RNModal>
    );
}

export default CustomModal

const style = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    mainContainer: {
        flex: 1,
        marginTop: 18,
        borderRadius: 20,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    cardContainer: {
        padding: 16,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#F5F5F5',
        marginTop: 20
    },

})
