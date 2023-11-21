import React from "react";
import { Text, View } from "react-native";

import LogoGram from "../../assets/gram-logo.svg";

import SafeAreaWrapper from "../../components/safeAreaWrapper";
import Input from "../../components/input";
import Button from "../../components/button";

import style from "./style";

import useSignInViewModel from "./view.model";

const SignInView = () => {
  const {
    email,
    password,
    isLoading,
    enableSignIn,
    setEmail,
    setPassword,
    gotToScreen,
    handleSignIn,
    handleGoogle,
  } = useSignInViewModel();

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
          <Input
            inputype={"text"}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            inputype={"password"}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />

          <Button
            title={"Sign In"}
            typeButton={"simple"}
            loading={isLoading.simple}
            disabled={!enableSignIn}
            onPress={handleSignIn}
          />
          <Button
            title={"Sign In with Google"}
            typeButton={"social"}
            loading={isLoading.google}
            onPress={handleGoogle}
          />
        </View>
        <View style={style.conentSignUp}>
          <Text style={[style.labelSignUp, style.colorSignUp]}>
            {"Don’t have an account?"}
          </Text>
          <Text
            style={[style.labelSignUp, style.colorAction]}
            onPress={() => gotToScreen("SignUp")}
          >
            {"Sign up"}
          </Text>
          <Text style={[style.labelSignUp, style.colorSignUp]}>{"here"}</Text>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default SignInView;
