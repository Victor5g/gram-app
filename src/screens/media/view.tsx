import React from "react";
import { Text, View } from "react-native";

import SafeAreaWrapper from "../../components/safeAreaWrapper";

import style from "./style";

const MediaView = () => {

  return (
    <SafeAreaWrapper>
      <View style={style.container}>
       <Text>{"MediaView"}</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default MediaView;
