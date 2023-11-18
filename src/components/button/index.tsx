import { TouchableOpacity, Text, View } from "react-native";

import { PropsButton } from "./interface";

import IconGoogle from "../../assets/google-icon.svg";

import Loading from "../loading";

import style from "./style";
import COLORS from "../../common/constants/colors";

const Button = ({
  title,
  typeButton = "simple",
  loading = false,
  ...rest
}: PropsButton) => {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        style.container,
        typeButton === "social" ? style.buttonSocial : style.buttonSimple,
      ]}
    >
      <Loading
        loading={loading}
        customColor={typeButton === "social" ? COLORS.black : COLORS.white}
      >
        {typeButton === "social" && (
          <View style={style.contentSocialIcon}>
            <IconGoogle
              width={style.socialIcon.width}
              height={style.socialIcon.height}
            />
          </View>
        )}
        <Text
          style={[
            style.title,
            typeButton === "social" ? style.socialTitle : style.simpleTitle,
          ]}
        >
          {title}
        </Text>
      </Loading>
    </TouchableOpacity>
  );
};

export default Button;
