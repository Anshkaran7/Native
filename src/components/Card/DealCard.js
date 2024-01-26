import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Styles } from "../../constants/Styles";

const DealCard = ({ data }) => {
    const textStyle = Styles.mdSemiBold;

    return (
        <View style={styles.mainContainer}>
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
            </View>
        </View>
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
