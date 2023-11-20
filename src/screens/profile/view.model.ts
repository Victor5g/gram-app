import { useState, useEffect } from "react";
import { ProfileViewModel, ProfileUserPosts } from "./model";

import { UserModel } from "../../common/models/user";

import { closeUserSession } from "../../repositories/auth.repository";

import { getUserInfo } from "../../repositories/user.respository";

const useProfileViewModel = (): ProfileViewModel => {
  const [name, setName] = useState<string>("");
  const [followers, setFollowers] = useState<number>(0);
  const [followings, setFollowings] = useState<number>(0);
  const [userURL, setUserURL] = useState<string>("");
  const [isLoading, seLoading] = useState<boolean>(false);

  const [posts, setPosts] = useState<ProfileUserPosts[]>([
    { id: "1", name: "Cruz Ramirez" },
    { id: "2", name: "Cruz Ramirez" },
    { id: "3", name: "Cruz Ramirez" },
    { id: "4", name: "Cruz Ramirez" },
  ]);

  const loadView = () => {
    const info: UserModel = getUserInfo();
    if (Object.keys(info).length > 0) {
      setName(info.name);
      setUserURL(info.profilePhoto);
    }
  };

  const handleSignOut = () => {
    closeUserSession();
  };

  useEffect(() => {
    loadView();
  }, []);

  return {
    name,
    followers,
    followings,
    userURL,
    posts,
    handleSignOut,
  };
};

export default useProfileViewModel;
