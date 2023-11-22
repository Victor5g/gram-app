import { useState, useEffect, useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import { Camera, PermissionResponse } from "expo-camera";

import {
  uploadMedia,
  registerMedia,
} from "../../repositories/media.repository";
import { getUserID } from "../../repositories/user.respository";

import { MediaViewModel } from "./model";

const useMediaViewModel = (): MediaViewModel => {
  let cameraRef = useRef<Camera>();

  const [video, setVideo] = useState<string>("");
  const [mode, setMode] = useState<string>("initial");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);

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

  const recordVideo = () => {
    setIsRecording(true);
    let options = {
      quality: "1080p",
      maxDuration: 60,
      mute: false,
    };
    cameraRef.current.recordAsync(options).then((recordedVideo) => {
      setVideo(recordedVideo.uri);
      setIsRecording(false);
    });
  };

  const stopRecording = () => {
    setIsRecording(false);
    cameraRef.current.stopRecording();
  };

  const loadPermissions = async () => {
    const cameraPermission: PermissionResponse =
      await Camera.requestCameraPermissionsAsync();
    const microphonePermission: PermissionResponse =
      await Camera.requestMicrophonePermissionsAsync();

    setHasCameraPermission(cameraPermission.status === "granted");
    setHasMicrophonePermission(microphonePermission.status === "granted");
  };

  const resetState = () => {
    setVideo("");
    setMode("initial");
    setTitle("");
    setDescription("");
    setProgress(0);
  };

  useEffect(() => {
    loadPermissions();
  });

  return {
    video,
    mode,
    title,
    description,
    progress,
    isLoading,
    isRecording,
    setTitle,
    setDescription,
    handlePickVideo,
    handleMedia,
    resetState,
    cameraRef,
    recordVideo,
    stopRecording,
  };
};

export default useMediaViewModel;
