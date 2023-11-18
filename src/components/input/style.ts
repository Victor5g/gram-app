import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import COLORS from "../../common/constants/colors";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    padding: 10,
    backgroundColor: COLORS.lightGray,
  },

  input: {
    flex: 1,
    minHeight: 34,
    fontSize: RFValue(12.5),
  },
  eyeIcon: {
    padding: 5,
  },
});

export default style;
