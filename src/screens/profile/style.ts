import { StyleSheet, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from "react-native-responsive-screen";

import COLORS from "../../common/constants/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: { 
    width: "90%", 
    alignItems: "flex-end" 
  },
  body: {
    width: "100%",
    alignItems: "center",
  },
  logoutButton: {
    padding: 9,
  },
  contentImage: {
    width: w(40),
    height: h(Platform.OS === "ios" ? 18 : 20),
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: COLORS.secondary,
  },
  imageProfile: {
    width: "93%",
    height: "93%",
    borderRadius: 100,
  },
  labelUserName: {
    marginTop: 34,
    fontSize: RFValue(24),
    fontStyle: "normal",
    fontWeight: "600",
    color: COLORS.primaryBlack,
  },
  boxInfo: {
    width: "90%",
    flexDirection: "row",
    marginTop: 30,
    gap: 20,
  },
  labelInfo: {
    fontSize: RFValue(15),
    fontStyle: "normal",
    fontWeight: "600",
    color: COLORS.primaryBlack,
  },
  labelValue: {
    fontSize: RFValue(15),
    fontStyle: "normal",
    fontWeight: "600",
    color: COLORS.black,
  },
  contentInfo: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  sent: {
    width: "90%",
    height: "auto",
    marginTop: 30,
    marginHorizontal: 2,
    flexDirection: "row",
  },
  item: {
    flex: 1,
    height: 120,
    backgroundColor: "gray",
    margin: 3,
    padding: 8,
    borderRadius: 10,
  },
});

export default style;
