import { Dispatch, SetStateAction } from "react";
export interface MediaViewModel {
  video: string;
  mode: string;
  title: string;
  description: string;
  progress: number;
  isLoading: boolean;
  setTitle: Dispatch<SetStateAction<string>> ;
  setDescription: Dispatch<SetStateAction<string>> ;
  handlePickVideo: () => void;
  handleMedia: () => void;
  resetState: ()=> void;
}
