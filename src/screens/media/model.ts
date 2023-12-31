import { Dispatch, SetStateAction, RefObject } from "react";
import { Camera } from "expo-camera";

export interface MediaViewModel {
  video: string;
  mode: string;
  title: string;
  description: string;
  progress: number;
  isLoading: boolean;
  reloadCamera: boolean;
  isRecording: boolean;
  hasRecordPermission: boolean | null;
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  cameraRef: RefObject<Camera>;
  handlePickVideo: () => void;
  handleMedia: () => void;
  resetState: () => void;
  recordVideo: () => void;
  stopRecording: () => void;
}
