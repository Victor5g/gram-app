import { useState, useEffect } from "react";

import { PostModel } from "../../common/models/post";
import { FeedPostModel } from "../../common/models/feed";
import { FeedViewModel } from "./model";

import { getAllPostedMedia } from "../../repositories/media.repository";
import { getUserInfoByID } from "../../repositories/user.respository";

const useFeedViewModel = (): FeedViewModel => {
  const [posts, setPosts] = useState<Array<FeedPostModel>>([]);

  const [intialLoading, setInitialLoading] = useState<boolean>(true);
  const [isLoading, seLoading] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<boolean>(true);
  const [lastCreatedAt, setLastCreatedAt] = useState<string | null>();

  const loadUserFeed = async () => {
    if (!nextPage) return;
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
      } else {
        setNextPage(false);
      }
    }
    seLoading(false);
    intialLoading && setInitialLoading(false);
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
    intialLoading,
    posts,
    loadUserFeed,
  };
};

export default useFeedViewModel;
