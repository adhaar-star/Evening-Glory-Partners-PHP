import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, FontFamily, FontSize, Color, Padding } from "./GlobalStyles";

const VerifyMobileNumber = () => {
  return (
    <View style={styles.verifyMobileNumber}>
      <Image
        style={[styles.v960Ning111Icon, styles.verifyPosition]}
        contentFit="cover"
        source={require("./assets/15847314-v960ning11-1.png")}
      />
      <View style={[styles.verifyMobileNumberChild, styles.verifyPosition]} />
      <View style={[styles.emailMobileNumberWrapper, styles.emailLayout]}>
        <Text style={[styles.emailMobile, styles.emailTypo]}>
          Email / Mobile Number
        </Text>
      </View>
      <View style={[styles.passwordParent, styles.emailLayout]}>
        <Text style={[styles.emailMobile, styles.emailTypo]}>Password</Text>
        <Image
          style={styles.viewHideIcon}
          source={require("./assets/view-hide.svg")}
        />
      </View>
      <Text
        style={[styles.welcomeBackYouve, styles.pleaseEnterYourTypo]}
      >{`Welcome back you’ve
been missed`}</Text>
      <Text style={[styles.signUp, styles.signTypo]}>Sign Up</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupBorder]} />
        <Text style={[styles.signUp1, styles.verifySpaceBlock]}>Sign Up</Text>
      </View>
      <Text style={styles.rememberMe}>Remember me</Text>
      <View style={[styles.verifyMobileNumberInner, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.superGParent, styles.parentPosition]}>
            <Image
              style={[styles.superGIcon, styles.iconPosition]}
              source={require("./assets/superg.svg")}
            />
            <Text style={[styles.continueWithGoogle, styles.continueTypo]}>
              Continue with Google
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.smartphoneCall1Parent, styles.parentPosition]}>
            <Image
              style={[styles.smartphoneCall1Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("./assets/smartphonecall-1.png")}
            />
            <Text style={[styles.continueWithMobile, styles.continueTypo]}>
              Continue with Mobile OTP
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.verifyMobileNumberItem, styles.sim1SingleSimLayout]}
      />
      <Text style={[styles.alreadyHaveAnContainer, styles.signPosition]}>
        <Text
          style={[styles.alreadyHaveAn, styles.emailTypo]}
        >{`Already have an account? `}</Text>
        <Text style={[styles.login, styles.signTypo]}>Login</Text>
      </Text>
      <View style={styles.homeIndicatordark}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.rectangleView, styles.verifyPosition]} />
      <View
        style={[styles.verifyYourMobileNumberParent, styles.verifyPosition]}
      >
        <Text style={[styles.verifyYourMobile, styles.verifyTypo]}>
          Sign Up with Mobile OTP
        </Text>
        <View style={[styles.emailMobileNumberContainer, styles.emailLayout]}>
          <Text style={[styles.emailMobile1, styles.emailTypo]}>
            Email / Mobile Number
          </Text>
        </View>
        <Pressable style={styles.rectangleGroup} onClick={() => {}}>
          <View style={styles.groupItem} />
          <Text style={[styles.verify, styles.verifyTypo]}>Sign Up</Text>
        </Pressable>
        <Text style={[styles.pleaseEnterYour, styles.pleaseEnterYourTypo]}>
          Please enter your mobile number to get OTP
        </Text>
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  verifyPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  emailLayout: {
    width: 350,
    height: 44,
    borderRadius: Border.br_5xs,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  emailTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
  },
  pleaseEnterYourTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  signTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  verifySpaceBlock: {
    marginTop: -12,
    color: Color.colorWhite,
  },
  groupLayout: {
    height: 42,
    width: 264,
    position: "absolute",
  },
  parentPosition: {
    bottom: "21.43%",
    top: "21.43%",
    height: "57.14%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  continueTypo: {
    marginTop: -9,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  sim1SingleSimLayout: {
    width: 20,
    overflow: "hidden",
  },
  signPosition: {
    left: "50%",
    position: "absolute",
  },
  verifyTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  areaFlexBox: {
    flex: 1,
    height: 44,
  },
  barPosition: {
    width: 3,
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorBlack,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  v960Ning111Icon: {
    top: 0,
    left: 0,
    height: 844,
  },
  verifyMobileNumberChild: {
    backgroundColor: "rgba(243, 243, 243, 0.8)",
    top: 0,
    left: 0,
    height: 844,
  },
  emailMobile: {
    color: Color.colorDarkgray_100,
    textAlign: "center",
    left: 20,
    position: "absolute",
    top: "50%",
    marginTop: -10,
    fontSize: FontSize.size_sm,
  },
  emailMobileNumberWrapper: {
    top: 187,
    height: 44,
    marginLeft: -175,
    width: 350,
    backgroundColor: Color.colorWhite,
  },
  viewHideIcon: {
    top: 11,
    left: 313,
    width: 24,
    height: 24,
    position: "absolute",
  },
  passwordParent: {
    top: 255,
    height: 44,
    marginLeft: -175,
    width: 350,
    backgroundColor: Color.colorWhite,
  },
  welcomeBackYouve: {
    marginLeft: -88,
    top: 101,
  },
  signUp: {
    marginLeft: -39,
    top: 60,
    fontSize: 20,
    textAlign: "left",
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderColor: "#dbdbdb",
    backgroundColor: Color.colorMediumvioletred,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderStyle: "solid",
    height: 40,
    width: 162,
    marginLeft: -81,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  signUp1: {
    marginLeft: -32,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 355,
    height: 40,
    width: 162,
    marginLeft: -81,
    left: "50%",
    position: "absolute",
  },
  rememberMe: {
    marginLeft: -150,
    top: 313,
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  superGIcon: {
    width: "14.46%",
    right: "85.54%",
  },
  continueWithGoogle: {
    left: "20.48%",
    color: "#353535",
  },
  superGParent: {
    width: "62.94%",
    right: "18.48%",
    left: "18.58%",
  },
  groupWrapper: {
    borderColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    width: 264,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  verifyMobileNumberInner: {
    top: 534,
    left: 64,
    width: 264,
  },
  smartphoneCall1Icon: {
    width: "12.9%",
    right: "87.1%",
  },
  continueWithMobile: {
    left: "16.67%",
    color: Color.colorWhite,
  },
  smartphoneCall1Parent: {
    width: "70.52%",
    right: "14.69%",
    left: "14.79%",
  },
  groupContainer: {
    backgroundColor: "#4285f4",
    width: 264,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  groupView: {
    top: 596,
    left: 64,
    width: 264,
  },
  verifyMobileNumberItem: {
    top: 312,
    borderRadius: 4,
    borderColor: Color.colorDimgray,
    height: 20,
    borderWidth: 1,
    borderStyle: "solid",
    left: 20,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: "#0d0d0d",
  },
  login: {
    color: Color.colorMediumvioletred,
    fontSize: FontSize.size_base,
    fontWeight: "500",
  },
  alreadyHaveAnContainer: {
    marginLeft: -116,
    top: 719,
    textAlign: "center",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  homeIndicatordark: {
    height: 34,
    bottom: 0,
    marginLeft: -195,
    left: "50%",
    width: 390,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: "rgba(0, 0, 0, 0.31)",
    top: 0,
    left: 0,
    height: 844,
  },
  verifyYourMobile: {
    marginTop: -138.5,
    marginLeft: -109,
    color: Color.colorBlack,
    textAlign: "center",
  },
  emailMobile1: {
    color: "#989d99",
    textAlign: "center",
    left: 20,
    position: "absolute",
    top: "50%",
    marginTop: -10,
    fontSize: FontSize.size_sm,
  },
  emailMobileNumberContainer: {
    marginLeft: -174,
    top: 164,
    backgroundColor: "#ddeae0",
    height: 44,
  },
  groupItem: {
    right: 0,
    width: 150,
    bottom: 0,
    height: 42,
    backgroundColor: Color.colorMediumvioletred,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  verify: {
    marginLeft: -24,
    color: Color.colorWhite,
    marginTop: -12,
    textAlign: "left",
  },
  rectangleGroup: {
    right: 120,
    bottom: 80,
    width: 150,
    height: 42,
    position: "absolute",
  },
  pleaseEnterYour: {
    marginLeft: -122,
    top: 80,
    width: 244,
  },
  verifyYourMobileNumberParent: {
    top: 281,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: 363,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  text: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.7,
    fontFamily: FontFamily.sFProText,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
  },
  locationServicesActiveWit: {
    width: 16,
    height: 16,
    display: "none",
    marginLeft: 2,
    overflow: "hidden",
  },
  time: {
    marginLeft: -17,
    top: 16,
  },
  leftArea: {
    height: 44,
    overflow: "hidden",
  },
  notchArea: {
    width: 164,
    height: 44,
  },
  bar4: {
    marginTop: -6,
    marginLeft: 6.35,
    height: 12,
  },
  bar3: {
    marginTop: -3.6,
    marginLeft: 1.05,
    height: 10,
  },
  bar2: {
    marginTop: -1,
    marginLeft: -4.25,
    height: 7,
  },
  bar1: {
    marginTop: 1.4,
    marginLeft: -9.55,
    height: 5,
  },
  sim1SingleSim: {
    height: 14,
  },
  networkWifiFull: {
    marginLeft: 4,
    height: 12,
  },
  batteryFullUncharged: {
    width: 28,
    marginLeft: 4,
    height: 14,
  },
  autoLayout: {
    marginTop: -7,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    right: 0,
    top: "50%",
    position: "absolute",
  },
  statusArea: {
    marginTop: -4,
    marginLeft: -37.5,
    width: 76,
    height: 14,
    top: "50%",
  },
  privacyIndicatorNone: {
    top: 6,
    left: 6,
    width: 6,
    height: 6,
    position: "absolute",
  },
  rightArea: {
    height: 44,
  },
  iphoneWithNotch: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    marginLeft: -195,
    justifyContent: "center",
    width: 390,
    top: 0,
  },
  verifyMobileNumber: {
    width: "100%",
    overflow: "hidden",
    height: 844,
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default VerifyMobileNumber;
