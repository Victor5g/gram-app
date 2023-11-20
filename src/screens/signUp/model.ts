import { Dispatch, SetStateAction } from "react";

export interface SignUpViewModel {
  name: string;
  email: string;
  password: string;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  enableSignUp: boolean,
  handleSignUp: () => void;
  gotToScreen: (nameScreen: string)=> void;
};
