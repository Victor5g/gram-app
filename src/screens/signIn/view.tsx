import React from "react";
import { Text, View } from "react-native";

import LogoGram from "../../assets/gram-logo.svg";

import SafeAreaWrapper from "../../components/safeAreaWrapper";
import Input from "../../components/input";
import Button from "../../components/button";

import style from "./style";

const SingInView = () => {
  return (
    <SafeAreaWrapper>
      <View style={style.container}>
        <LogoGram
          width={style.illustration.width}
          height={style.illustration.height}
        />
        <View style={style.welcomeBox}>
          <Text style={style.labelWelcome}>{"Welcome to"}</Text>
          <Text style={[style.labelWelcome, style.labelAppName]}>{"Gram"}</Text>
        </View>

        <View style={style.form}>
          <Input inputype={"text"} placeholder="E-mail" />
          <Input inputype={"password"} placeholder="Password" />

          <Button title={"Sign In"} typeButton={"simple"} loading={false} />
          <Button
            title={"Sign Up with Google"}
            typeButton={"social"}
            loading={false}
          />
        </View>
        <View style={style.conentSignUp}>
          <Text style={[style.labelSingUp, style.colorSingUp]}>
            {"Don’t have an account?"}
          </Text>
          <Text
            style={[style.labelSingUp, style.colorAction]}
            onPress={() => console.log("Touched")}
          >
            {"Sign up"}
          </Text>
          <Text style={[style.labelSingUp, style.colorSingUp]}>{"here"}</Text>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default SingInView;
