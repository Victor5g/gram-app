import { ActivityIndicator, View } from "react-native";

import COLORS from "../../common/constants/colors";

import { LoadingItem } from "./interface";
import style from "./style";

const Loading = ({
  loading,
  customColor = COLORS.primaryBlack,
  children,
}: LoadingItem) => {
  return loading ? (
    <View style={style.container}>
      <ActivityIndicator size="small" color={customColor} />
    </View>
  ) : (
    children
  );
};

export default Loading;
