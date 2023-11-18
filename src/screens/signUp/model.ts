import { Dispatch, SetStateAction } from "react";

export interface SingUpViewModel {
  name: string;
  email: string;
  password: string;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  onSubmit: () => void;
  gotToScreen: (nameScreen: string)=> void;
};
