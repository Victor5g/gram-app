import { StyleSheet, Platform, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import COLORS from "../../common/constants/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  listContent: {
    gap: 40,
    paddingTop: 30,
    paddingBottom: 30,
  },
  header: {
    paddingHorizontal: 12,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: COLORS.chineseSilver,
  },
  title: {
    fontSize: RFValue(23),
    fontStyle: "normal",
    fontWeight: "600",
    color: COLORS.primaryBlack,
  },
});

export default style;
