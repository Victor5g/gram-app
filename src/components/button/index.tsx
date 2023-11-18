import { TouchableOpacity, Text, View } from "react-native";

import { PropsButton } from "./interface";

import IconGoogle from "../../assets/google-icon.svg";

import style from "./style";

const Button = ({ title, typeButton = "simple", ...rest }: PropsButton) => {
  let adaptiveStyle = {
    ...style.container,
    ...(typeButton === "social"
      ? { ...style.buttonSocial }
      : { ...style.buttonSimple }),
  };
  return (
    <TouchableOpacity {...rest} style={adaptiveStyle}>
      {typeButton === "simple" && (
        <Text style={[style.title, style.simpleTitle]}>{title}</Text>
      )}
      {typeButton === "social" && (
        <>
          <View style={style.contentSocialIcon}>
            <IconGoogle
              width={style.socialIcon.width}
              height={style.socialIcon.height}
            />
          </View>
          <Text style={[style.title, style.socialTitle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
