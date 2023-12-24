import { StyleSheet } from "react-native";
import { scaleFontSize } from "./fontSize";

export const Styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.14,
        shadowRadius: 5,
        elevation: 4,

    },
    xxlBoldText: {
        color: "#3c3c3c",
        fontSize: 40,
        fontFamily: "IBMPlexSerif_700Bold",

    },
    smText: {
        color: "#3c3c3c",
        fontSize: scaleFontSize(12),
        fontFamily: "IBMPlexSerif_100Thin",
    },
    smBoldText: {
        color: "#3c3c3c",
        fontSize: 12,
        fontFamily: "IBMPlexSerif_200ExtraLight",
    },
    mdText: {
        color: "#3c3c3c",
        fontSize: scaleFontSize(14),
        fontFamily: "IBMPlexSerif_300Light",
    },
    
    lgText: {
        color: "#3c3c3c",
        fontSize: (16),
        fontFamily: "IBMPlexSerif_500Medium",
        paddingVertical: 3,

    },
    lgBoldText: {
        color: "#3c3c3c",
        fontSize: 16,
        fontFamily: "IBMPlexSerif_700Bold",
    },
    xlText: {
        color: "#3c3c3c",
        fontSize: 18,
        fontFamily: "IBMPlexSerif_400Regular",
    },
    xlBoldText: {
        color: "#8C8C8C",
        fontSize: 18,
        fontFamily: "IBMPlexSerif_700Bold",
    },
    mdSemiBold: {
        color: "#3c3c3c",
        fontSize: 14,
        fontFamily: "IBMPlexSerif_600SemiBold",
        lineHeight: 22,
        paddingVertical: 3,
    },

});