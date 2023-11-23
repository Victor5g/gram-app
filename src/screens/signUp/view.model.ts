import { useState, useEffect } from "react";
import { Alert } from "react-native";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

import { SignUpViewModel } from "./model";

import { createUser } from "../../repositories/auth.repository";

const useSignUpViewModel = (): SignUpViewModel => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [enableSignUp, setEnableSignUp] = useState<boolean>(false);

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const handleSignUp = async () => {
    try {
      setIsLoading(true);
      let instance = await createUser(name, email, password);
      if (!instance.created) {
        if (instance.data) {
          Alert.alert(instance.data);
        } else {
          throw new Error();
        }
        return;
      }
    } catch {
      Alert.alert(
        "SignUp",
        "Error during registration, please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const validField = () => {
    if (name.length > 1 && email.includes("@") && password.length > 1) {
      setEnableSignUp(true);
    } else {
      setEnableSignUp(false);
    }
  };

  const gotToScreen = (nameScreen: string) => {
    navigation.navigate(nameScreen);
  };

  useEffect(() => {
    validField();
  }, [name, email, password]);

  return {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    isLoading,
    enableSignUp,
    handleSignUp,
    gotToScreen,
  };
};

export default useSignUpViewModel;
