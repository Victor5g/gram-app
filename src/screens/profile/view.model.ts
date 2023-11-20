import { ProfileViewModel } from "./model";

import { closeUserSession } from "../../repositories/auth.repository";

const useProfileViewModel = (): ProfileViewModel => {
  const handleSignOut = () => {
    closeUserSession();
  };

  return {
    handleSignOut,
  };
};

export default useProfileViewModel;
