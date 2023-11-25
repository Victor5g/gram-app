import { useState, useEffect } from "react";

import { PostModel } from "../../common/models/post";
import { FeedViewModel, FeedPostModel } from "./model";

import { getAllPostedMedia } from "../../repositories/media.repository";
import { getUserInfoByID } from "../../repositories/user.respository";

const useFeedViewModel = (): FeedViewModel => {
  const [posts, setPosts] = useState<Array<FeedPostModel>>([]);

  const [isLoading, seLoading] = useState<boolean>(false);

  const loadUserFeed = async () => {
    seLoading(true);
    let response = await getAllPostedMedia();
    if (response.sucess) {
      let newPosts = await Promise.all(
        response.medias.map(async (post) => {
          let infoPost = await joinInfoPost(post);
          return { ...post, author: infoPost };
        })
      );
      console.log("new-->", newPosts);
      setPosts([...posts, ...newPosts]);
    }
    seLoading(false);
  };

  const joinInfoPost = async (posts: PostModel) => {
    let info = await getUserInfoByID(posts.author);
    return info.data[0];
  };

  useEffect(() => {
    loadUserFeed();
  }, []);

  return {
    isLoading,
    posts,
  };
};

export default useFeedViewModel;
