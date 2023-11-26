import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import COLORS from "../../common/constants/colors";

const style = StyleSheet.create({
  contentComment: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    gap: 8,
    paddingTop: 10,
    paddingBottom: 25,
    borderBottomWidth: 0.2,
    borderColor: COLORS.chineseSilver,
  },
  profileComment: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  commentInfo: {
    gap: 4,
  },
  labelAuthor: {
    fontSize: RFValue(10.4),
    color: COLORS.black,
    fontWeight: "600",
  },
  labelComment: {
    fontSize: RFValue(9.5),
    color: COLORS.black,
  },
});

export default style;
