import { useState, useEffect } from "react";
import { Alert } from "react-native";

import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

import { SignInViewModel, LoadingModel } from "./model";

import {
  authenticateUser,
  authenticateGoogle,
} from "../../repositories/auth.repository";

const useSignInViewModel = (): SignInViewModel => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<LoadingModel>({
    simple: false,
    google: false,
  });
  const [enableSignIn, setEnableSignIn] = useState<boolean>(false);

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handleSignIn = async () => {
    try {
      setIsLoading((rest) => ({ ...rest, simple: true }));
      let instance = await authenticateUser(email, password);
      if (!instance.logged) {
        if (instance.data) {
          Alert.alert(instance.data);
        } else {
          throw new Error();
        }
        return;
      }
    } catch {
      Alert.alert("SignUp", "Error during Sign In, please try again later.");
    } finally {
      setIsLoading((rest) => ({ ...rest, simple: false }));
    }
  };

  const handleGoogle = async () => {
    try {
      setIsLoading((rest) => ({ ...rest, google: true }));
      let instance = await authenticateGoogle();
      if (!instance.logged) {
        if (instance.data) {
          if (instance.data !== "Canceled") {
            Alert.alert(instance.data);
          }
        } else {
          throw new Error();
        }
        return;
      }
    } catch {
      Alert.alert(
        "SignUp",
        "Error during Sign Up with Google, please try again later."
      );
    } finally {
      setIsLoading((rest) => ({ ...rest, google: false }));
    }
  };

  const gotToScreen = (nameScreen: string) => {
    navigation.navigate(nameScreen);
  };

  const validField = () => {
    if (email.includes("@") && password.length > 1) {
      setEnableSignIn(true);
    } else {
      setEnableSignIn(false);
    }
  };

  useEffect(() => {
    validField();
  }, [email, password]);

  return {
    email,
    password,
    isLoading,
    enableSignIn,
    setEmail,
    setPassword,
    gotToScreen,
    handleSignIn,
    handleGoogle,
  };
};

export default useSignInViewModel;
