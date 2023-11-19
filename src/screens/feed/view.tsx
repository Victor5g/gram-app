import React from "react";
import { Text, View, Image } from "react-native";

import SafeAreaWrapper from "../../components/safeAreaWrapper";

import style from "./style";

const FeedView = () => {
  return (
    <SafeAreaWrapper>
      <View style={style.container}>

        <View style={style.header}>
          <Text style={style.title}>{"Feeds"}</Text>
          <Image
            style={style.imageProfile}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>

        <Text>{"FeedView"}</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default FeedView;
