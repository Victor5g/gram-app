import { useState } from "react";

import { LoginViewModel } from "./model";

const useLoginViewModel = (): LoginViewModel => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    console.log("Executous-->")
  };

  return {
    email,
    password,
    isLoading,
    setEmail,
    setPassword,
    onSubmit,
  };
};

export default useLoginViewModel;
