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
  contentComments: {
    width: Dimensions.get("window").width - 20,
    paddingVertical: 25,
    paddingHorizontal: 16,
    height: "70%",
    backgroundColor: COLORS.white,
    borderRadius: 30,
  },
  modalHeader: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 0.2,
    borderColor: COLORS.chineseSilver,
  },
  modalTitle: {
    fontSize: RFValue(14),
    color: COLORS.black,
    fontWeight: "700",
  },
  closeButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    right: 0,
    bottom: 5,
  },
  modalBody: {
    flex: 1,
    justifyContent: "flex-end",
  },
  contentInput: {
    width: "100%",
    alignItems: "center",
    gap: 9,
    flexDirection: "row",
  },
  sendButton: {
    width: 47,
    height: 45,
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primaryBlack,
    right: 0,
  },
  constentList: {
    gap: 12,
    paddingTop: 20,
    paddingBottom: 20,
  },
  
});

export default style;
