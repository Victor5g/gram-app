import auth from '@react-native-firebase/auth';

import COLORS from "../common/constants/colors";
import { Errors } from "../common/constants/erros";

export const authenticateUser = async (email: string, password: string) => {
  try {
    const singIn = await auth().signInWithEmailAndPassword(email, password);
    return { logged: true, data: singIn };
  } catch (error) {
    console.log("-->", error)
    return { logged: false, data: Errors[error.code] };
  }
};

export const createUser = async (fullName:string, email: string, password: string) => {
  try {
    const defaultPhoto = `https://ui-avatars.com/api/?name=${fullName}&length=1&background=${COLORS.secondary.replace('#','')}`;

    await auth().createUserWithEmailAndPassword(email, password);

    await auth().currentUser.updateProfile({
      displayName: fullName,
      photoURL: defaultPhoto
    });

    return { created: true };
  } catch (error) {
    return { created: false, data: Errors[error.code] };
  }
};

export const closeUserSession = () => {
  auth().signOut();
}