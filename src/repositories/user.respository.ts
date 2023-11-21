import auth from "@react-native-firebase/auth";

import { UserModel } from "../common/models/user";

export const getUserInfo = (): UserModel => {
  let info = auth().currentUser;
  return {
    name: info.displayName,
    email: info.email,
    profilePhoto: info.photoURL,
  };
};

const getUserID = (): string => {
  let info = auth().currentUser;
  return info.uid;
};
