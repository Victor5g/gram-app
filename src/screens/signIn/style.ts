import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from "react-native-responsive-screen";

import COLORS from "../../common/constants/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 90,
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  illustration: {
    width: w(40),
    height: h(10),
  },
  welcomeBox: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    marginTop: 34,
  },
  labelWelcome: {
    fontSize: RFValue(25),
    fontStyle: "normal",
    fontWeight: "600",
    color: COLORS.primaryBlack,
  },
  labelAppName: {
    color: COLORS.secondary,
  },
  form: {
    marginTop: 30,
    width: "95%",
    gap: 23,
  },
  conentSignUp: {
    marginTop: 30,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    gap: 3,
  },
  labelSingUp: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 15,
  },
  colorSingUp: {
    color: COLORS.quickSilver,
  },
  colorAction: {
    color: COLORS.black,
    textDecorationLine: "underline",
  },
});

export default style;
