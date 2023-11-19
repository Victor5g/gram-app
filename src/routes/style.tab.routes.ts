import { StyleSheet, Platform } from "react-native";

import COLORS from "../common/constants/colors";

const style = StyleSheet.create({
  barStyle: {
    height: Platform.OS === "ios" ? 100 : 75,
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
  },
  barItemStyle: {
    height: 55,
  },
  barLabel: {
    fontSize: 18,
    fontWeight: "600",
  },
  tabInFocus: {
    color: COLORS.white,
  },
  unfocusedTab: {
    color: COLORS.chineseSilver,
  },
});

export default style;
