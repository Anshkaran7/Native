import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";

import OtpIcon from "../../assets/SVG/otpIcon";
import { COLOURS } from "../constants";

const Otp = ({ modalVisible, setModalVisible }) => {
  const navigation = useNavigation();
  const handleOpenPersona = () => {
    navigation.navigate("PersonaScreen");
  };
  const inputRefs = Array.from({ length: 6 }, () => useRef());
  const number = 12324234234;
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  const [count, setCount] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
  }, [count]);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <Modal
        visible={modalVisible}
        transparent
        onBackdropPress={() => toggleModal()}
        onSwipeComplete={() => toggleModal()}
        swipeDirection="down"
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >
        <LinearGradient
          colors={["#ffe0e3", "#F3F4F8"]}
          locations={[0, 1]}
          useAngle
          angle={180}
          style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
        >
          <View style={styles.downPop}>
            <View style={styles.otpLeft}>
              <Text style={styles.HeadText}>Enter OTP</Text>
              <Text style={styles.otpIntro}>Enter OTP sent to {number}</Text>
            </View>
            <View style={styles.OtpIcon}>
              <OtpIcon />
            </View>
          </View>
        </LinearGradient>
        <View style={styles.bottomContainer}>
          <View>
            <View style={styles.otpView}>
              {inputRefs.map((ref, index) => (
                <TextInput
                  key={index}
                  ref={ref}
                  style={styles.inputView}
                  keyboardType="number-pad"
                  maxLength={1}
                  onChangeText={(txt) => {
                    if (txt.length && index < inputRefs.length - 1) {
                      inputRefs[index + 1].current.focus();
                    } else if (txt.length < 1 && index > 0) {
                      inputRefs[index - 1].current.focus();
                    }
                  }}
                />
              ))}
            </View>
            <View style={styles.resendText}>
              <Text style={{ fontStyle: "italic" }}>
                OTP not received? Resend in {count} secs
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              handlePress();
              handleOpenPersona();
              toggleModal();
            }}
          >
            <View style={styles.PrimaryBtn}>
              <View
                style={[
                  styles.BtnText,
                  { backgroundColor: isPressed ? "#004F84" : "#007DD0" },
                ]}
              >
                <Text style={styles.proceed}>Sign In</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.footerParent}>
            <Text style={styles.textNormal}>I agree to Qur8's </Text>
            <Text style={styles.textBold}>Terms & Conditions </Text>
            <Text style={styles.textNormal}>&</Text>
            <Text style={styles.textBold}> Privacy Policy</Text>
          </View>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  modalContent: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  downPop: {
    flexDirection: "row",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingTop: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },
  otpLeft: {
    justifyContent: "center",
  },
  HeadText: {
    fontSize: 32,
    color: COLOURS.primary,
    textAlign: "left",
    alignSelf: "stretch",
    fontWeight: "700",
  },
  otpIntro: {
    fontSize: 12,
    color: COLOURS.tertiary,
    marginTop: 8,
  },
  OtpIcon: {
    flex: 1,
    alignItems: "flex-end",
  },
  bottomContainer: {
    backgroundColor: "#F3F4F8",
    paddingTop: 24,
    paddingBottom: 36,
    paddingLeft: 16,
    paddingRight: 16,
  },
  otpView: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-evenly",
    fontWeight: "400",
  },
  inputView: {
    height: 54,
    width: 47,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLOURS.tertiary,
    borderStyle: "solid",
    backgroundColor: COLOURS.white,
    textAlign: "center",
    fontSize: 18,
  },
  resendText: {
    paddingTop: 12,
    paddingLeft: 12,
  },
  PrimaryBtn: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 16,
    paddingBottom: 0,
    height: 60,
  },
  BtnText: {
    borderRadius: 12,
    backgroundColor: COLOURS.primary,
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: "row",
  },

  proceed: {
    color: COLOURS.white,
    fontWeight: "600",
  },
  footerParent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
  },
  text1: {
    fontSize: 12,
    color: COLOURS.tertiary,
  },
  text2: {
    fontSize: 12,
    fontWeight: "600",
    color: COLOURS.primary,
  },
  textNormal: {
    fontSize: 12,
    color: COLOURS.tertiary,
  },
  textBold: {
    fontSize: 12,
    fontWeight: "600",
    color: COLOURS.primary,
  },
});
export default Otp;
