import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface SafeAreaWrapperProps {
    children: ReactNode;
    customStyle?: StyleProp<ViewStyle>;
  }