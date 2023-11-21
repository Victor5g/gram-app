import { Dispatch, SetStateAction } from "react";

export interface LoadingModel {
  simple: boolean;
  google: boolean;
}
export interface SignInViewModel {
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  isLoading: LoadingModel;
  enableSignIn: boolean;
  gotToScreen: (nameScreen: string) => void;
  handleSignIn: () => void;
  handleGoogle: () => void;
}
