import { StyleSheet, StatusBar } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight ?? 0
  },
});

export default style;
