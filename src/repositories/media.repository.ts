import { Dispatch, SetStateAction } from "react";

import { PostModel } from "../common/models/post";

import storage from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";

export const uploadMedia = async (
  uri: string,
  fileType: string,
  progressState: Dispatch<SetStateAction<number>>
): Promise<{ fileType: string; downloadURL: string; timestamp: string }> => {
  try {
    const reference = storage().ref("Stuff/" + new Date().getTime());
    const task = reference.putFile(uri);

    return new Promise((resolve, reject) => {
      task.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.ceil(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          progressState(progress);
        },
        (error) => {
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await reference.getDownloadURL();
            resolve({
              fileType,
              downloadURL,
              timestamp: new Date().toISOString(),
            });
          } catch (error) {
            reject(error);
          }
        }
      );
    });
  } catch (error) {
    throw error;
  }
};

export const registerMedia = async (
  author: string,
  title: string,
  description: string,
  fileType: string,
  mediaURL: string,
  createdAt: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    firestore()
      .collection("medias")
      .add({
        author,
        title,
        description,
        fileType,
        mediaURL,
        createdAt,
      })
      .then((_) => {
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getAllMediaUser = async (
  userId: String
): Promise<{ sucess: boolean; medias: Array<PostModel> }> => {
  try {
    const userMedia = [];
    const queryData = await firestore()
      .collection("medias")
      .where("author", "==", userId)
      .get();
    queryData.forEach((snapshot) => userMedia.push(snapshot.data()));
    return { sucess: true, medias: userMedia };
  } catch (error) {
    return { sucess: true, medias: [] };
  }
};
