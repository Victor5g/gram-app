import { StyleSheet, StatusBar } from "react-native";
import COLORS from "../../common/constants/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight ?? 0,
    backgroundColor: COLORS.white
  },
});

export default style;
