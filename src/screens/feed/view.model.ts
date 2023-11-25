import { useState, useEffect } from "react";

import { PostModel } from "../../common/models/post";
import { FeedViewModel, FeedPostModel } from "./model";

import { getAllPostedMedia } from "../../repositories/media.repository";
import { getUserInfoByID } from "../../repositories/user.respository";

const useFeedViewModel = (): FeedViewModel => {
  const [posts, setPosts] = useState<Array<FeedPostModel>>([]);

  const [isLoading, seLoading] = useState<boolean>(false);
  const [lastCreatedAt, setLastCreatedAt] = useState<string | null>();

  const loadUserFeed = async () => {
    seLoading(true);
    let response = await getAllPostedMedia(lastCreatedAt);
    if (response.sucess) {
      if (response.medias.length >= 1) {
        let newPosts = await Promise.all(
          response.medias.map(async (post) => {
            let infoPost = await joinInfoPost(post);
            return { ...post, author: infoPost };
          })
        );
        setPosts((oldPost) => [...oldPost, ...newPosts]);
        setLastCreatedAt(newPosts[newPosts.length - 1].createdAt);
      }
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
    loadUserFeed,
  };
};

export default useFeedViewModel;
