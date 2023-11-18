import React from "react";
import { SafeAreaView } from "react-native";

import { SafeAreaWrapperProps } from "./type";

import style from "./style";

const SafeAreaWrapper = ({ children, customStyle }: SafeAreaWrapperProps) => {
  return (
    <SafeAreaView style={[style.container, customStyle]}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaWrapper;
