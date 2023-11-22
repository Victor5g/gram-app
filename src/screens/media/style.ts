import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import COLORS from "../../common/constants/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
  },
  uploadVideo: {
    position: "absolute",
    bottom: 60,
    right: 25,
    width: 70,
    height: 70,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  loadingBlur: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
    zIndex:1
  },
  loadingText: {
    color: COLORS.white,
    fontSize: RFValue(18),
    fontWeight: "600",
  },
});

export default style;
