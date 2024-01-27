import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Styles } from "../../constants/Styles";

const DealCard = ({ data, type }) => {
    const textStyle = Styles.mdSemiBold;
    const navigation = useNavigation();

    return (
        <Pressable style={styles.mainContainer}
        onPress={() => type === 'dealsDetails' ? null : navigation.navigate('DealsDetails')}
        >
        <View >
            <View style={styles.cardContainer}>
                <Text style={[textStyle, styles.titleText]}>{data.title}</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoText}>{data.info}</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.priceRow}>
                    <View style={styles.priceColumn}>
                        <Text style={styles.dealText}>Deal Price</Text>
                        <Text style={styles.price}>₹{data.price}</Text>
                    </View>
                    <View style={styles.CampaignColumn}>
                        <Text style={styles.CampaignLabel}>Campaign Date</Text>

                        <Text style={styles.CampaignDate}>
                            {data.date}
                        </Text>

                    </View>

                </View>
                { type === 'dealsDetails' ? (
                    <View style={{
                        flexDirection: 'row',
                        alignItems:'center',
                        gap: 10,
                        marginTop: 10
                    }}>
                        <TouchableOpacity style={{
                            borderColor: '#007DD0',
                            borderWidth: 1,
                            borderRadius: 18,
                            paddingHorizontal: 20,
                        }}>
                            <Text style={[Styles.mdSemiBold,{ color: '#007DD0', fontSize: 12, marginBottom:2 }]}>Chat</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            backgroundColor: '#007DD0',
                            borderRadius: 18,
                            paddingHorizontal: 20,
                        }}>
                            <Text style={[Styles.mdSemiBold,{ color: 'white', fontSize: 12, marginBottom:2 }]}>Invoice</Text>
                        </TouchableOpacity>
                    </View>
                ) : null}
            </View>
        </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        marginTop: 18,
        borderRadius: 12,
    },
    cardContainer: {
        padding: 16,
    },
    titleText: {
        color: "#004F84",
        fontSize: 19,
    },
    mdSemiBold: {
        fontWeight: "600",
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
        marginTop: 2,
    },
    infoText: {
        color: "#557184",
        fontSize: 14,
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "#F5F5F5",
    },
    priceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    priceColumn: {
        flexDirection: "column",
    },
    dealText: {
        fontSize: 14,
        fontWeight: "200",
        color: "#557184",
    },
    price: {
        fontSize: 14,
        fontWeight: "900",
        color: "#557184",
    },
    CampaignColumn: {
        flexDirection: "column",
        color: "#557184",
        fontSize: 12,
    },
    CampaignLabel: {
        textAlign: "right",
        fontSize: 12,
        fontWeight: "200",
    },
    CampaignDate: {
        fontSize: 14,
        fontWeight: "400",
        color: "#557184",
    }
});

export default DealCard;
