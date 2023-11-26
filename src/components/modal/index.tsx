import { ReactNode } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import style from "./style";

const ModalView = ({
  visible,
  children,
}: {
  visible: boolean;
  children: ReactNode;
}) => {
  return (
    <Modal isVisible={visible}>
      <View style={style.contentView}>
        {children}
      </View>
    </Modal>
  );
};

export default ModalView;
