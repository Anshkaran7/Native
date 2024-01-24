import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";

import ProceedIcon from "../../assets/SVG/proceedIcon";
import SignInIcon from "../../assets/SVG/signinIcon";
import Otp from "../components/Otp";
import { COLOURS } from "../constants";

const SignIn = ({ modalVisible, setModalVisible }) => {
  const [number, onChangeNumber] = React.useState("");

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const [showOTP, setShowOTP] = useState(false);
  const handleOtp = () => {
    setShowOTP(true);
  };

  if (showOTP) {
    return (
      <Otp modalVisible={modalVisible} setModalVisible={setModalVisible} />
    );
  }
  return (
    <>
      <Modal
        visible={modalVisible}
        transparent
        swipeDirection="down"
        onBackdropPress={() => toggleModal()}
        onSwipeComplete={() => toggleModal()}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >
        <LinearGradient
          colors={["#e0fdff", "#F3F4F8"]}
          locations={[0, 1]}
          useAngle="true"
          angle={180}
          style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
        >
          <View style={styles.downPop}>
            <View style={styles.signLeft}>
              <Text style={styles.HeadText}>Sign In</Text>
              <Text style={styles.signIntro}>
                Signing in will help you make deals faster
              </Text>
            </View>
            <View style={styles.SignInIcon}>
              <SignInIcon />
            </View>
          </View>
        </LinearGradient>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.phNo}>Phone Number</Text>
            <TextInput
              style={styles.number}
              onChangeText={(value) => onChangeNumber(value.toString())}
              value={number}
              placeholder="Enter your phone number"
              keyboardType="numeric"
              minLength={10}
              maxLength={10}
              pattern
            />
          </View>
          <TouchableOpacity onPress={handleOtp}>
            <View style={styles.PrimaryBtn}>
              <View style={styles.BtnText}>
                <Text style={styles.proceed}>Proceed</Text>
                <View style={styles.ProceedIcon}>
                  <ProceedIcon />
                </View>
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
    paddingTop: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },
  signLeft: {
    justifyContent: "center",
  },
  HeadText: {
    fontSize: 32,
    color: COLOURS.primary,
    textAlign: "left",
    alignSelf: "stretch",
    fontWeight: "700",
  },
  signIntro: {
    fontSize: 12,
    color: COLOURS.tertiary,
    marginTop: 8,
  },
  SignInIcon: {
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
  phNo: {
    paddingLeft: 24,
    color: "#557184",
  },
  number: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#F3F4F8",
    borderStyle: "solid",
    borderColor: COLOURS.tertiary,
    color: "#557184",
  },
  PrimaryBtn: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 16,
    height: 60,
    paddingBottom: 0,
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
  ProceedIcon: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 4,
  },
  proceed: {
    color: COLOURS.white,
    fontWeight: "600",
  },
  footerParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 16,
  },
  textNormal: {
    fontSize: 12,
    color: COLOURS.tertiary,
  },
  textBold: {
    fontSize: 12,
    color: COLOURS.primary,
    fontWeight: "600",
  },
});
export default SignIn;
