import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import firestore  from "@react-native-firebase/firestore";

import COLORS from "../common/constants/colors";
import { Errors } from "../common/constants/erros";

GoogleSignin.configure({
  webClientId:
    "364743032680-d72sjqkolakklunm9u3aqe6rit9j96ij.apps.googleusercontent.com",
});

export const authenticateUser = async (email: string, password: string) => {
  try {
    const singIn = await auth().signInWithEmailAndPassword(email, password);
    return { logged: true, data: singIn };
  } catch (error) {
    return { logged: false, data: Errors[error.code] };
  }
};

export const authenticateGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const response = await auth().signInWithCredential(googleCredential);
    if(response.additionalUserInfo.isNewUser){
       registreUser(response.user.uid, response.user.displayName, response.user.photoURL);
    }
    return { logged: true };
  } catch (error) {
    return { logged: false, data: Errors[error.code] };
  }
};

export const createUser = async (
  fullName: string,
  email: string,
  password: string
) => {
  try {
    const defaultPhoto = `https://ui-avatars.com/api/?name=${fullName}&length=1&background=${COLORS.secondary.replace("#","")}`;
    const response = await auth().createUserWithEmailAndPassword(email, password);
    await auth().currentUser.updateProfile({
      displayName: fullName,
      photoURL: defaultPhoto,
    });
    if(response.additionalUserInfo.isNewUser){
      registreUser(response.user.uid, fullName, defaultPhoto);
    }
    return { created: true };
  } catch (error) {
    return { created: false, data: Errors[error.code] };
  }
};

const registreUser = (userId: string, fullName:string, profilePhoto: string) => {
  firestore()
    .collection("users")
    .add({ userId: userId, fullName: fullName, profilePhoto: profilePhoto })
     .catch((error) => {
      console.log(error);
    });
}

export const closeUserSession = async () => {
  await GoogleSignin.signOut();
  await auth().signOut();
};
