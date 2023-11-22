import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import {
  uploadMedia,
  registerMedia,
} from "../../repositories/media.repository";
import { getUserID } from "../../repositories/user.respository";

import { MediaViewModel } from "./model";

const useMediaViewModel = (): MediaViewModel => {
  const [video, setVideo] = useState<string>("");
  const [mode, setMode] = useState<string>("initial");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const handlePickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 0,
    });
    if (!result.canceled) {
      setVideo(result.assets[0].uri);
      setMode("details");
    }
  };

  const handleMedia = async () => {
    try {
      setIsloading(true);
      const upRes = await uploadMedia(video, "video", setProgress);
      let userId = getUserID();
      await registerMedia(
        userId,
        title,
        description,
        upRes.fileType,
        upRes.downloadURL,
        upRes.timestamp
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
      resetState();
    }
  };

  const resetState = () => {
    setVideo("");
    setMode("initial");
    setTitle("");
    setDescription("");
    setProgress(0);
  };

  return {
    video,
    mode,
    title,
    description,
    progress,
    isLoading,
    setTitle,
    setDescription,
    handlePickVideo,
    handleMedia,
    resetState,
  };
};

export default useMediaViewModel;
