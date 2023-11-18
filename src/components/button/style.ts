import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from "react-native-responsive-screen";

import COLORS from "../../constants/colors";

const style = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 55,
    borderRadius: 6,
  },

  buttonSimple: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },

  buttonSocial: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLORS.lightGray,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
  },
  contentSocialIcon: {
    position: "absolute",
    width: w(7),
    height: h(7),
    left: 0,
    marginLeft: 30,
  },
  socialIcon: {
    width: "100%",
    height: "100%",
  },

  title: {
    fontSize: 18,
    fontStyle: "normal",
    lineHeight: 26,
  },

  simpleTitle: {
    color: COLORS.white,
    fontWeight: "500",
  },

  socialTitle: {
    color: COLORS.black,
    fontWeight: "600",
  },
});

export default style;
