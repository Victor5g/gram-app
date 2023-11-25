import { StyleSheet } from "react-native";
import COLORS from "../../common/constants/colors";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  control: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  blur: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.black,
    opacity: 0.3,
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default style;
