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
    paddingTop: 16,
    alignItems: "center"
  },
  header: {
    width: w(100),
    height: h(5),
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  contentBackAction: {
    alignItems: "center",
    justifyContent: "center",
    width: w(10),
    height: h(5),
  },
  title: {
    fontSize: RFValue(18),
    fontStyle: "normal",
    fontWeight: "600",
    color: COLORS.primaryBlack,
    marginBottom: 9,
  },
  illustration: {
    width: w(55),
    height: h(25),
  },
  labelDescription: {
    fontSize: RFValue(12),
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 15,
    color: COLORS.quickSilver,
    width: w(70),
    textAlign: "center",
  },
  form: {
    marginTop: 30,
    width: "95%",
    gap: 23,
  },
  conentHere: {
    marginTop: 30,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    gap: 3,
  },
  labelHere: {
    fontSize: RFValue(12),
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 15,
  },
  colorHere: {
    color: COLORS.quickSilver,
  },
  colorAction: {
    color: COLORS.black,
    textDecorationLine: "underline",
  },
});

export default style;
