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
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 12,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: RFValue(23),
    fontStyle: "normal",
    fontWeight: "600",
    color: COLORS.primaryBlack,
  },
  imageProfile: {
    width: w(13),
    height: h(6),
    borderRadius: 100,
  },
});

export default style;
