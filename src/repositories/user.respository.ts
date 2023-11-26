import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

import { UserModel } from "../common/models/user";
import { CommentModel } from "../common/models/comment";

export const getUserInfo = (): UserModel => {
  let info = auth().currentUser;
  return {
    fullName: info.displayName,
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
  data: object | null;
}> => {
  try {
    let infoId = [];
    const queryData = await firestore()
      .collection("users")
      .where("userId", "==", userId)
      .get();
    queryData.forEach((snapshot) => infoId.push(snapshot.data()));
    return { sucess: true, data: infoId };
  } catch (error) {
    return { sucess: false, data: null };
  }
};

export const registerUserLike = async (like: boolean, postId: string) => {
  try {
    const postRef = firestore().collection("medias").doc(postId);
    await postRef.update({
      like: firestore.FieldValue.increment(like ? 1 : -1),
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const registerUserComment = async ({
  postId,
  userId,
  comment,
}: CommentModel): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection("comments")
      .add({
        postId,
        userId,
        comment,
      })
      .then((_) => {
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getUserComments = async (
  postId: string
): Promise<{ sucess: boolean; comments: Array<CommentModel> }> => {
  try {
    let query = firestore()
      .collection("comments")
      .where("postId", "==", postId);
    const userMedia = [];
    const queryData = await query.get();
    queryData.forEach((snapshot) => userMedia.push(snapshot.data()));
    return { sucess: true, comments: userMedia };
  } catch (error) {
    return { sucess: false, comments: [] };
  }
};
