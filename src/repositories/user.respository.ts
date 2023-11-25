import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

import { UserModel } from "../common/models/user";

export const getUserInfo = (): UserModel => {
  let info = auth().currentUser;
  return {
    name: info.displayName,
    email: info.email,
    profilePhoto: info.photoURL,
  };
};

export const getUserID = (): string => {
  let info = auth().currentUser;
  return info.uid;
};

export const getUserInfoByID = async (
  userId: string
): Promise<{
  sucess: boolean;
  info: object | null;
}> => {
  try {
    let infoId = [];
    const queryData = await firestore()
      .collection("users")
      .where("userId", "==", userId)
      .get();
    queryData.forEach((snapshot) => infoId.push(snapshot.data()));
    return { sucess: true, info: infoId };
  } catch (error) {
    return { sucess: false, info: null };
  }
};
