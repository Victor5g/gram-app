import { useState } from "react";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

import { SingUpViewModel } from "./model";

const useSingUpViewModel = (): SingUpViewModel => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const onSubmit = async () => {
    console.log("Executed");
  };

  const gotToScreen = (nameScreen: string) => {
    navigation.navigate(nameScreen);
  };

  return {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    isLoading,
    onSubmit,
    gotToScreen,
  };
};

export default useSingUpViewModel;
