import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Illustration from "../../assets/illustration-gram.svg";

import SafeAreaWrapper from "../../components/safeAreaWrapper";
import Input from "../../components/input";
import Button from "../../components/button";

import style from "./style";

import useSingUpViewModel from "./view.model";

const SingUpView = () => {
  const { gotToScreen } = useSingUpViewModel();

  return (
    <SafeAreaWrapper>
      <View style={style.container}>
        <View style={style.header}>
          <TouchableOpacity
            style={style.contentBackAction}
            onPress={() => gotToScreen("SignIn")}
          >
            <Ionicons name="arrow-back" size={35} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={style.title}>{"Create your account"}</Text>

        <Illustration
          width={style.illustration.width}
          height={style.illustration.height}
        />

        <Text style={style.labelDescription}>
          {"Sign up to see photos and videos from your friends"}
        </Text>

        <View style={style.form}>
          <Input inputype={"text"} placeholder="Name" />
          <Input inputype={"text"} placeholder="E-mail" />
          <Input inputype={"password"} placeholder="Password" />

          <Button
            title={"Create Account"}
            typeButton={"simple"}
            loading={false}
          />
        </View>

        <View style={style.conentHere}>
          <Text style={[style.labelHere, style.colorHere]}>
            {" Already have an account?"}
          </Text>
          <Text
            style={[style.labelHere, style.colorAction]}
            onPress={() => gotToScreen("SignIn")}
          >
            {"Log in Here"}
          </Text>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default SingUpView;
