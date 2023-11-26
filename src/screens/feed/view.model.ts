import { useState, useEffect } from "react";
import { Share } from "react-native";

import { FeedPostModel, FeedCommentModel } from "../../common/models/feed";
import { FeedViewModel, FeedLike } from "./model";

import {
  getAllPostedMedia,
  getAllCommentsMedia,
} from "../../repositories/media.repository";
import {
  getUserInfoByID,
  registerUserLike,
  registerUserComment,
  getUserID,
  getUserComments,
} from "../../repositories/user.respository";

const useFeedViewModel = (): FeedViewModel => {
  const [posts, setPosts] = useState<Array<FeedPostModel>>([]);
  const [comments, setComments] = useState<Array<FeedCommentModel>>([]);
  const [comment, setComment] = useState<string>("");
  const [selectedPost, setSelectPost] = useState<FeedPostModel>();

  const [showComments, setShowComments] = useState<boolean>(false);
  const [intialLoading, setInitialLoading] = useState<boolean>(true);
  const [isLoading, seLoading] = useState<boolean>(false);
  const [loadingComment, seLoadingComment] = useState<boolean>(false);
  const [isRegisterComment, setIsRegisterComment] = useState<boolean>(false);
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
            let infoPost = await joinInfoUser(post.author);
            let amount = await getAllCommentsMedia(post.id);
            return { ...post, author: infoPost, amountComment: amount };
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

  const loadComments = async () => {
    seLoadingComment(true);
    let { id } = selectedPost;
    if (id) {
      let response = await getUserComments(id);
      if (response.sucess) {
        let newComments = await Promise.all(
          response.comments.map(async (comment) => {
            let infoComment = await joinInfoUser(comment.userId);
            return { ...comment, author: infoComment };
          })
        );
        setComments((OldComment) => [...OldComment, ...newComments]);
      }
    }
    seLoadingComment(false);
  };

  const joinInfoUser = async (author: string) => {
    let info = await getUserInfoByID(author);
    return info.data[0];
  };

  const handleShare = async (post: FeedPostModel) => {
    try {
      const { title, mediaURL } = post;
      await Share.share({
        message: `Gram | ${title}\n\n${mediaURL}${
          !mediaURL.includes(".mp4") && ".mp4"
        }`,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLike = async (post: FeedLike) => {
    const { liked, stateLiked, handleSucess, postId } = post;
    stateLiked(!liked);
    let executed = await registerUserLike(!liked, postId);
    if (executed) {
      handleSucess();
    }
  };

  const handleComment = async () => {
    setIsRegisterComment(true);
    let { id } = selectedPost;
    let registered = await registerUserComment({
      postId: id,
      userId: getUserID(),
      comment: comment,
    });
    if (registered) {
      setComment("");
      // loadComments()
    }
    setIsRegisterComment(false);
  };

  const handleShowComments = (post: FeedPostModel) => {
    setShowComments(!showComments);
    if (!showComments) {
      setSelectPost(post);
    } else {
      setComments([]);
      setComment("");
      setSelectPost(null);
    }
  };

  useEffect(() => {
    if (selectedPost) {
      loadComments();
    }
  }, [selectedPost]);

  useEffect(() => {
    loadUserFeed();
  }, []);

  return {
    isLoading,
    loadingComment,
    intialLoading,
    isRegisterComment,
    showComments,
    posts,
    comments,
    comment,
    setComment,
    loadUserFeed,
    handleLike,
    handleComment,
    handleShowComments,
    handleShare,
  };
};

export default useFeedViewModel;
