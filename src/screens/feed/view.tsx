import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Illustration from "../../assets/illustration-gram.svg";

import SafeAreaWrapper from "../../components/safeAreaWrapper";

import style from "./style";

const FeedView = () => {

  return (
    <SafeAreaWrapper>
      <View style={style.container}>
       <Text>{"FeedView"}</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default FeedView;
