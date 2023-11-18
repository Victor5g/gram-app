import { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";

import { PropsInput } from "./type";

import { Ionicons } from "@expo/vector-icons";

import style from "./style";

const Input = (props: PropsInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={style.container}>
      <TextInput
        {...props}
        style={style.input}
        secureTextEntry={
          props.inputype === "password" ? isPasswordVisible : false
        }
      />
      {props.inputype === "password" && (
        <TouchableOpacity
          style={style.eyeIcon}
          onPress={togglePasswordVisibility}
        >
          <Ionicons
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
