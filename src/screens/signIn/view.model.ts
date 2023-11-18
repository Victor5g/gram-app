import { useState } from "react";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

import { SingInViewModel } from "./model";

const useSingInViewModel = (): SingInViewModel => {
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
    email,
    password,
    isLoading,
    setEmail,
    setPassword,
    onSubmit,
    gotToScreen,
  };
};

export default useSingInViewModel;
