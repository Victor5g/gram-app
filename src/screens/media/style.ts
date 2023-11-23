import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import COLORS from "../../common/constants/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  uploadVideo: {
    position: "absolute",
    bottom: 55,
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
    zIndex: 1,
  },
  loadingText: {
    position: "absolute",
    textAlign: "center",
    textAlignVertical: "center",
    color: COLORS.white,
    fontSize: RFValue(18),
    fontWeight: "600",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  contentVideo: {
    width: "85%",
    height: "50%",
    overflow: "hidden",
    borderColor: COLORS.lightGray,
    borderRadius: 15,
    borderWidth: 1,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  form: {
    width: "85%",
    gap: 12,
    marginTop: 13,
  },
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  uploadButton: {
    backgroundColor: COLORS.primary,
  },
  closeButton: {
    backgroundColor: COLORS.black,
  },
  contentButtons: {
    width: "85%",
    marginTop: 30,
    gap: 10,
  },
  labelPermission: {
    color: COLORS.primaryBlack,
    fontSize: RFValue(15),
    fontWeight: "400",
  },
  contentLabel: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  recordButton: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
  },
});

export default style;
