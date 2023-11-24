import { useState, useEffect } from "react";

import { PostModel } from "../../common/models/post";
import { UserModel } from "../../common/models/user";
import { ProfileViewModel } from "./model";

import { closeUserSession } from "../../repositories/auth.repository";
import { getUserInfo, getUserID } from "../../repositories/user.respository";
import { getAllMediaUser } from "../../repositories/media.repository";

const useProfileViewModel = (): ProfileViewModel => {
  const [name, setName] = useState<string>("");
  const [followers, setFollowers] = useState<number>(0);
  const [followings, setFollowings] = useState<number>(0);
  const [userURL, setUserURL] = useState<string>("");

  const [posts, setPosts] = useState<PostModel[]>([]);

  const [isLoading, seLoading] = useState<boolean>(false);

  const loadView = () => {
    const info: UserModel = getUserInfo();
    if (Object.keys(info).length > 0) {
      setName(info.name);
      setUserURL(info.profilePhoto);
    }
  };

  const loadUserPosts = async () => {
    let response = await getAllMediaUser(getUserID());
    if (response.sucess) {
      setPosts(response.medias);
    }
  };

  const handleSignOut = () => {
    closeUserSession();
  };

  useEffect(() => {
    loadUserPosts();
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
