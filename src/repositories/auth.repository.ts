import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

import { Errors } from "../common/constants/erros";

import { auth } from "./firebase.client";
import COLORS from "../common/constants/colors";

export const authenticateUser = async (email: string, password: string) => {
  try {
    const singIn = await signInWithEmailAndPassword(auth, email, password);
    return { logged: true, data: singIn };
  } catch (error) {
    return { logged: false, data: Errors[error.code] };
  }
};

export const createUser = async (fullName:string, email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const defaultPhoto = `https://ui-avatars.com/api/?name=${fullName}&length=1&background=${COLORS.secondary.replace('#','')}`;

    const userProfile = await updateProfile(userCredential.user, {
      displayName: fullName,
      photoURL: defaultPhoto
    });

    return { created: true, data: { userCredential, userProfile } };
  } catch (error) {
    return { created: false, data: Errors[error.code] };
  }
};

export const closeUserSession = async() => {
  signOut(auth);
}