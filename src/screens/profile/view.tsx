import React from "react";
import { Text, View } from "react-native";

import SafeAreaWrapper from "../../components/safeAreaWrapper";

import style from "./style";

const ProfileView = () => {

  return (
    <SafeAreaWrapper>
      <View style={style.container}>
       <Text>{"Profile"}</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default ProfileView;
