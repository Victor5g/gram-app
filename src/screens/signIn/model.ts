import { Dispatch, SetStateAction } from "react";

export interface SignInViewModel {
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  enableSignIn: boolean;
  validField: () => void;
  gotToScreen: (nameScreen: string) => void;
  handleSignIn: () => void;
}
