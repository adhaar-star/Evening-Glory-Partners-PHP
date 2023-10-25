import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "./GlobalStyles";

const AcceptedRequests = () => {
  return (
    <View style={styles.acceptedRequests}>
      <View
        style={[styles.positiveAttitudeLifeItIsMParent, styles.parentLayout]}
      >
        <Image
          style={[styles.positiveAttitudeLifeItIsMIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("./assets/positiveattitudelifeitismykeyhappiness-1.png")}
        />
        <LinearGradient
          style={[styles.frameChild, styles.frameChildLayout]}
          locations={[0.1, 1]}
          colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0)"]}
        />
        <Image
          style={styles.favoriteFillIcon}
          contentFit="cover"
          source={require("./assets/favorite-fill1.png")}
        />
        <Text style={[styles.vaneetaRoy, styles.vaneetaRoyFlexBox]}>
          Vaneeta Roy
        </Text>
        <Text style={[styles.yrs57, styles.yrs57Typo]}>50 yrs. 5’ 7”</Text>
        <Text style={[styles.marathi96Kuli, styles.hartwellUsaTypo]}>
          Marathi, 96 Kuli Marath
        </Text>
        <Text style={[styles.productManager, styles.yrs57Typo]}>
          Product Manager
        </Text>
        <Text style={[styles.hartwellUsa, styles.hartwellUsaTypo]}>
          Hartwell, USA
        </Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <View style={[styles.onlineParent, styles.onlinePosition]}>
            <Text style={[styles.online, styles.onlinePosition]}>Online</Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("./assets/ellipse-75.png")}
            />
          </View>
        </View>
        <LinearGradient
          style={[styles.matchWrapper, styles.homeLayout1]}
          locations={[0, 1]}
          colors={["#ff348f", "#a0235b"]}
        >
          <Text style={[styles.match, styles.matchPosition]}>90% Match</Text>
        </LinearGradient>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={styles.massageNowParent}>
            <Text style={[styles.massageNow, styles.yrs57Typo]}>
              Massage Now
            </Text>
            <Image
              style={[styles.chatAlt3Icon, styles.chatIconLayout]}
              contentFit="cover"
              source={require("./assets/chat-alt-3.png")}
            />
          </View>
        </View>
      </View>
      <View
        style={[styles.amazingWomanSittingIndoorsParent, styles.parentLayout]}
      >
        <Image
          style={[styles.amazingWomanSittingIndoorsIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("./assets/amazingwomansittingindoorstable-1.png")}
        />
        <LinearGradient
          style={[styles.frameChild, styles.frameChildLayout]}
          locations={[0.1, 1]}
          colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0)"]}
        />
        <Image
          style={styles.favoriteFillIcon}
          contentFit="cover"
          source={require("./assets/favorite-fill.png")}
        />
        <Text style={[styles.vaneetaRoy, styles.vaneetaRoyFlexBox]}>
          Vaneeta Roy
        </Text>
        <Text style={[styles.yrs57, styles.yrs57Typo]}>50 yrs. 5’ 7”</Text>
        <Text style={[styles.marathi96Kuli, styles.hartwellUsaTypo]}>
          Marathi, 96 Kuli Marath
        </Text>
        <Text style={[styles.productManager, styles.yrs57Typo]}>
          Product Manager
        </Text>
        <Text style={[styles.hartwellUsa, styles.hartwellUsaTypo]}>
          Hartwell, USA
        </Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <View style={[styles.onlineParent, styles.onlinePosition]}>
            <Text style={[styles.online, styles.onlinePosition]}>Online</Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("./assets/ellipse-75.png")}
            />
          </View>
        </View>
        <LinearGradient
          style={[styles.matchWrapper, styles.homeLayout1]}
          locations={[0, 1]}
          colors={["#ff348f", "#a0235b"]}
        >
          <Text style={[styles.match, styles.matchPosition]}>90% Match</Text>
        </LinearGradient>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={styles.massageNowParent}>
            <Text style={[styles.massageNow, styles.yrs57Typo]}>
              Massage Now
            </Text>
            <Image
              style={[styles.chatAlt3Icon, styles.chatIconLayout]}
              contentFit="cover"
              source={require("./assets/chat-alt-3.png")}
            />
          </View>
        </View>
      </View>
      <View
        style={[styles.seniorWomanPosingAgainstBlParent, styles.parentLayout]}
      >
        <Image
          style={[styles.seniorWomanPosingAgainstBlIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("./assets/seniorwomanposingagainstbluebackground-1.png")}
        />
        <LinearGradient
          style={[styles.frameChild, styles.frameChildLayout]}
          locations={[0.1, 1]}
          colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0)"]}
        />
        <Image
          style={styles.favoriteFillIcon2}
          contentFit="cover"
          source={require("./assets/favorite-fill.png")}
        />
        <Text style={[styles.vaneetaRoy, styles.vaneetaRoyFlexBox]}>
          Vaneeta Roy
        </Text>
        <Text style={[styles.yrs57, styles.yrs57Typo]}>50 yrs. 5’ 7”</Text>
        <Text style={[styles.marathi96Kuli, styles.hartwellUsaTypo]}>
          Marathi, 96 Kuli Marath
        </Text>
        <Text style={[styles.productManager, styles.yrs57Typo]}>
          Product Manager
        </Text>
        <Text style={[styles.hartwellUsa, styles.hartwellUsaTypo]}>
          Hartwell, USA
        </Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <View style={[styles.onlineParent, styles.onlinePosition]}>
            <Text style={[styles.online, styles.onlinePosition]}>Online</Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("./assets/ellipse-75.png")}
            />
          </View>
        </View>
        <LinearGradient
          style={[styles.matchWrapper, styles.homeLayout1]}
          locations={[0, 1]}
          colors={["#ff348f", "#a0235b"]}
        >
          <Text style={[styles.match, styles.matchPosition]}>90% Match</Text>
        </LinearGradient>
        <View style={[styles.groupFrame, styles.groupLayout]}>
          <View style={styles.massageNowParent}>
            <Text style={[styles.massageNow, styles.yrs57Typo]}>
              Massage Now
            </Text>
            <Image
              style={[styles.chatAlt3Icon, styles.chatIconLayout]}
              contentFit="cover"
              source={require("./assets/chat-alt-3.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View
          style={[
            styles.brunetteSmileyWomanPosing1Wrapper,
            styles.frameChildLayout,
          ]}
        >
          <Image
            style={styles.brunetteSmileyWomanPosing1Icon}
            contentFit="cover"
            source={require("./assets/brunettesmileywomanposing-1.png")}
          />
        </View>
        <LinearGradient
          style={[styles.frameChild, styles.frameChildLayout]}
          locations={[0.1, 1]}
          colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0)"]}
        />
        <Image
          style={styles.favoriteFillIcon2}
          contentFit="cover"
          source={require("./assets/favorite-fill.png")}
        />
        <Text style={[styles.vaneetaRoy, styles.vaneetaRoyFlexBox]}>
          Vaneeta Roy
        </Text>
        <Text style={[styles.yrs57, styles.yrs57Typo]}>50 yrs. 5’ 7”</Text>
        <Text style={[styles.marathi96Kuli, styles.hartwellUsaTypo]}>
          Marathi, 96 Kuli Marath
        </Text>
        <Text style={[styles.productManager, styles.yrs57Typo]}>
          Product Manager
        </Text>
        <Text style={[styles.hartwellUsa, styles.hartwellUsaTypo]}>
          Hartwell, USA
        </Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <View style={[styles.onlineParent, styles.onlinePosition]}>
            <Text style={[styles.online, styles.onlinePosition]}>Online</Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("./assets/ellipse-75.png")}
            />
          </View>
        </View>
        <LinearGradient
          style={[styles.matchWrapper, styles.homeLayout1]}
          locations={[0, 1]}
          colors={["#ff348f", "#a0235b"]}
        >
          <Text style={[styles.match, styles.matchPosition]}>90% Match</Text>
        </LinearGradient>
        <View style={[styles.groupFrame, styles.groupLayout]}>
          <View style={styles.massageNowParent}>
            <Text style={[styles.massageNow, styles.yrs57Typo]}>
              Massage Now
            </Text>
            <Image
              style={[styles.chatAlt3Icon, styles.chatIconLayout]}
              contentFit="cover"
              source={require("./assets/chat-alt-3.png")}
            />
          </View>
        </View>
      </View>
      
      <View style={[styles.component6, styles.homeLayout]}>
        <View style={styles.component6Child} />
        <Text style={[styles.requests, styles.requestsTypo]}>Requests</Text>
      </View>
     
      <View style={styles.frameGroup}>
        <Pressable
          style={[styles.newRequestsWrapper, styles.requestsWrapperBorder]}
          onPress={() => {}}
        >
          <Text style={[styles.newRequests, styles.requestsClr]}>
            New Requests
          </Text>
        </Pressable>
        <View style={styles.groupWrapper1}>
          <View
            style={[styles.acceptedRequestsWrapper, styles.acceptedPosition]}
          >
            <Text style={[styles.acceptedRequests1, styles.acceptedPosition]}>
              Accepted Requests
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.sentRequestsWrapper, styles.requestsWrapperBorder]}
          onPress={() => {}}
        >
          <Text
            style={[styles.sentRequests, styles.requestsClr]}
          >{`Sent Requests `}</Text>
        </Pressable>
        <Pressable
          style={[styles.cancelRequestsWrapper, styles.requestsWrapperBorder]}
          onPress={() => {}}
        >
          <Text style={[styles.cancelRequests, styles.requestsClr]}>
            Cancel Requests
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.recentlyViewedMemberWrapper,
            styles.requestsWrapperBorder,
          ]}
          onPress={() => {}}
        >
          <Text
            style={[styles.recentlyViewedMember, styles.requestsClr]}
          >{`Recently Viewed Member `}</Text>
        </Pressable>
      </View>
      <View style={[styles.homeIndicatordark1, styles.homeLayout]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.frameContainer}>
        <Pressable
          style={[styles.homeParent, styles.parentGroupLayout]}
          onPress={() => {}}
        >
          <Image
            style={[styles.homeIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("./assets/home-fill.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
        <Pressable
          style={[styles.framePressable, styles.parentGroupLayout]}
          onPress={() => {}}
        >
          <View style={[styles.searchAltParent, styles.homeIconPosition]}>
            <Image
              style={[styles.searchAltIcon, styles.chatPosition]}
              contentFit="cover"
              source={require("./assets/search-alt.png")}
            />
            <Text style={[styles.search, styles.homeTypo]}>Search</Text>
          </View>
        </Pressable>
        <View style={[styles.groupParent, styles.parentGroupLayout]}>
          <View style={[styles.requestsWrapper, styles.wrapperPosition]}>
            <Text style={[styles.requests1, styles.homeTypo]}>Requests</Text>
          </View>
          <Image
            style={[styles.users1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("./assets/users-1.png")}
          />
        </View>
        <Pressable
          style={[styles.groupParent1, styles.parentGroupLayout]}
          onPress={() => {}}
        >
          <View style={[styles.chatWrapper, styles.wrapperPosition]}>
            <Text style={[styles.chat, styles.chatPosition]}>Chat</Text>
          </View>
          <Image
            style={[styles.chatAlt3Icon4, styles.chatIconLayout]}
            contentFit="cover"
            source={require("./assets/chat-alt-3.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 395,
    width: 351,
  },
  iconPosition1: {
    marginLeft: -175.5,
    marginTop: -197.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  frameChildLayout: {
    width: 352,
    position: "absolute",
  },
  vaneetaRoyFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
  },
  yrs57Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorWhite,
  },
  hartwellUsaTypo: {
    top: 288,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupChildLayout: {
    height: 28,
    width: 82,
    position: "absolute",
  },
  onlinePosition: {
    left: 12,
    position: "absolute",
  },
  homeLayout1: {
    height: 34,
    position: "absolute",
  },
  matchPosition: {
    top: 6,
    position: "absolute",
  },
  groupLayout: {
    height: 40,
    width: 152,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
    overflow: "hidden",
    position: "absolute",
  },
  chatIconLayout: {
    width: 24,
    height: 24,
  },
  homeLayout: {
    width: 390,
    marginLeft: -195,
  },
  requestsTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  sim1SingleSimLayout: {
    width: 20,
    overflow: "hidden",
  },
  barPosition: {
    width: 3,
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorBlack,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  requestsWrapperBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderRadius: Border.br_9xl,
    height: 40,
    top: 7,
    overflow: "hidden",
    position: "absolute",
  },
  requestsClr: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.poppinsRegular,
  },
  acceptedPosition: {
    marginLeft: -78.5,
    marginTop: -12,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  parentGroupLayout: {
    width: 88,
    height: 62,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  iconPosition: {
    marginLeft: -12,
    width: 24,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  homeTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "center",
  },
  homeIconPosition: {
    marginTop: -19,
    top: "50%",
  },
  chatPosition: {
    marginLeft: -12.5,
    left: "50%",
    position: "absolute",
  },
  wrapperPosition: {
    height: 15,
    top: 38,
    position: "absolute",
  },
  positiveAttitudeLifeItIsMIcon: {
    width: 357,
    height: 536,
    top: "50%",
  },
  frameChild: {
    top: 176,
    left: -1,
    height: 219,
    backgroundColor: "transparent",
  },
  favoriteFillIcon: {
    left: 296,
    width: 52,
    height: 52,
    top: 14,
    position: "absolute",
  },
  vaneetaRoy: {
    top: 230,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 11,
    position: "absolute",
  },
  yrs57: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: 265,
    fontWeight: "500",
    position: "absolute",
    left: 11,
  },
  marathi96Kuli: {
    color: Color.colorWhite,
    left: 11,
  },
  productManager: {
    left: 88,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: 265,
    fontWeight: "500",
    position: "absolute",
  },
  hartwellUsa: {
    left: 171,
    color: Color.colorOrange,
  },
  groupChild: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorSeagreen,
    left: 0,
    top: 0,
  },
  online: {
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  groupItem: {
    width: 8,
    height: 8,
    top: 7,
    left: 0,
    position: "absolute",
  },
  onlineParent: {
    top: 4,
    width: 58,
    height: 21,
  },
  rectangleParent: {
    top: 316,
    left: 11,
  },
  match: {
    marginLeft: -39,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
  },
  matchWrapper: {
    left: 14,
    borderRadius: Border.br_5xs,
    width: 112,
    top: 16,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  massageNow: {
    marginLeft: -35.5,
    top: 1,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: "50%",
    position: "absolute",
  },
  chatAlt3Icon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  massageNowParent: {
    marginLeft: -63,
    top: 8,
    width: 127,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  groupWrapper: {
    left: 187,
    width: 152,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
    top: 337,
  },
  positiveAttitudeLifeItIsMParent: {
    top: 181,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    width: 351,
    marginLeft: -173,
  },
  amazingWomanSittingIndoorsIcon: {
    width: 353,
    height: 531,
    top: "50%",
  },
  groupContainer: {
    top: 336,
    left: 187,
    width: 152,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xs,
  },
  amazingWomanSittingIndoorsParent: {
    top: 604,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    width: 351,
    marginLeft: -173,
  },
  seniorWomanPosingAgainstBlIcon: {
    top: "50%",
    height: 395,
    width: 351,
  },
  favoriteFillIcon2: {
    left: 299,
    width: 46,
    height: 46,
    top: 14,
    position: "absolute",
  },
  groupFrame: {
    left: 185,
    top: 337,
  },
  seniorWomanPosingAgainstBlParent: {
    marginLeft: -171,
    top: 1027,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    width: 351,
  },
  brunetteSmileyWomanPosing1Icon: {
    width: 331,
    height: 496,
    left: 0,
    top: 0,
    position: "absolute",
  },
  brunetteSmileyWomanPosing1Wrapper: {
    marginTop: -232.5,
    marginLeft: -176.5,
    borderRadius: 48,
    height: 430,
    top: "50%",
    overflow: "hidden",
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  frameParent: {
    marginLeft: -170,
    top: 1450,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    width: 351,
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
    bottom: 30,
    height: 34,
    position: "absolute",
    left: "50%",
  },
  component6Child: {
    height: "100%",
    width: "92.31%",
    top: "0%",
    right: "7.69%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  requests: {
    marginTop: -11,
    left: 22,
    lineHeight: 23,
    color: "#31425f",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  component6: {
    top: 44,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowRadius: 4,
    elevation: 4,
    height: 48,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    marginLeft: -195,
  },
  text: {
    fontSize: FontSize.size_mid,
    letterSpacing: -0.7,
    fontFamily: FontFamily.sFProText,
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "600",
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
    flex: 1,
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
    right: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    position: "absolute",
  },
  statusArea: {
    marginTop: -4,
    marginLeft: -37.5,
    width: 76,
    height: 14,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  privacyIndicatorNone: {
    left: 6,
    width: 6,
    height: 6,
  },
  rightArea: {
    height: 44,
    flex: 1,
  },
  iphoneWithNotch: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
    width: 390,
    marginLeft: -195,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  newRequests: {
    marginLeft: -56,
    marginTop: -12,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  newRequestsWrapper: {
    left: -141,
    width: 154,
  },
  acceptedRequests1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorWhite,
  },
  acceptedRequestsWrapper: {
    width: 157,
    height: 24,
  },
  groupWrapper1: {
    left: 23,
    backgroundColor: "#110f58",
    width: 193,
    borderRadius: Border.br_9xl,
    height: 40,
    top: 7,
    overflow: "hidden",
    position: "absolute",
  },
  sentRequests: {
    marginLeft: -56.5,
    marginTop: -12,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  sentRequestsWrapper: {
    left: 226,
    width: 143,
  },
  cancelRequests: {
    marginLeft: -67.5,
    marginTop: -12,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  cancelRequestsWrapper: {
    left: 379,
    width: 169,
  },
  recentlyViewedMember: {
    marginLeft: -101.5,
    marginTop: -12,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  recentlyViewedMemberWrapper: {
    left: 558,
    width: 233,
  },
  frameGroup: {
    top: 102,
    width: 388,
    height: 53,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  homeIndicatordark1: {
    bottom: 0,
    height: 34,
    position: "absolute",
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  homeIcon: {
    marginTop: -19,
    top: "50%",
  },
  home: {
    marginLeft: -15,
    top: 38,
    fontSize: FontSize.size_3xs,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  homeParent: {
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  searchAltIcon: {
    marginTop: -20.5,
    width: 24,
    height: 24,
    top: "50%",
  },
  search: {
    marginLeft: -17.5,
    top: 26,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  searchAltParent: {
    marginLeft: -18,
    width: 35,
    height: 41,
    left: "50%",
    position: "absolute",
  },
  framePressable: {
    marginLeft: -88,
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  requests1: {
    left: 0,
    top: 0,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    position: "absolute",
  },
  requestsWrapper: {
    left: 20,
    width: 47,
  },
  users1Icon: {
    top: 14,
  },
  groupParent: {
    marginLeft: 1,
    backgroundColor: "#a0235b",
    left: "50%",
  },
  chat: {
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorDarkgray,
    fontFamily: FontFamily.poppinsRegular,
    top: 0,
  },
  chatWrapper: {
    marginLeft: -13,
    width: 25,
    left: "50%",
  },
  chatAlt3Icon4: {
    left: 32,
    top: 14,
    position: "absolute",
  },
  groupParent1: {
    right: -1,
    backgroundColor: Color.colorWhite,
  },
  frameContainer: {
    marginLeft: -174,
    top: 742,
    borderRadius: 24,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: 62,
    width: 352,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  acceptedRequests: {
    width: "100%",
    height: 844,
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default AcceptedRequests;
