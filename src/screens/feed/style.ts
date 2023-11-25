import { StyleSheet, Platform, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from "react-native-responsive-screen";

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
  contentPost: {
    width: w(90),
    height: h(62),
    backgroundColor: COLORS.white,
    borderWidth: 0.3,
    borderColor: COLORS.primaryBlack,
    shadowColor: COLORS.primaryBlack,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    borderRadius: 12,
    shadowRadius: 3,
    padding: 12,
  },
  headerPost: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  infoUserPost: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },
  titlePost: {
    fontSize: RFValue(12),
    marginTop: 8,
    marginBottom: 8,
    color: COLORS.black,
  },
  descriptionPost: {
    fontSize: RFValue(10),
    color: COLORS.black,
    fontWeight: "400",
  },
  labelNameUser: {
    fontSize: RFValue(14),
    fontWeight: "600",
    color: COLORS.primaryBlack,
  },
  datePost: {
    fontSize: RFValue(10),
    fontWeight: "500",
    color: COLORS.quickSilver,
  },
  constntVideo: {
    flex: 1,
    marginTop: 20,
    borderRadius: 8,
    overflow: "hidden",
  },
  contentAction: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  actionButton: {
    padding: 10,
  },
});

export default style;
