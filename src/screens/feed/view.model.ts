import { useState, useEffect } from "react";

import { PostModel } from "../../common/models/post";
import { FeedViewModel } from "./model";

import { getAllPostedMedia } from "../../repositories/media.repository";

const useFeedViewModel = (): FeedViewModel => {
  const [posts, setPosts] = useState<PostModel[]>([]);

  const [isLoading, seLoading] = useState<boolean>(false);

  const loadUserFeed = async () => {
    seLoading(true);
    let response = await getAllPostedMedia();
    if (response.sucess) {
      if (response.medias != posts) {
        setPosts([...posts, ...response.medias]);
      }
    }
    seLoading(false);
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
