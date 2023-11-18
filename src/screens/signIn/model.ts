import { Dispatch, SetStateAction } from "react";

export interface SingInViewModel {
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  onSubmit: () => void;
  gotToScreen: (nameScreen: string)=> void;
};
