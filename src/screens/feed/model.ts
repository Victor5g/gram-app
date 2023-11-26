import { Dispatch, SetStateAction } from "react";
import { FeedCommentModel, FeedPostModel } from "../../common/models/feed";
export interface FeedLike {
  liked: boolean;
  stateLiked: Dispatch<SetStateAction<boolean>>;
  postId: string;
  handleSucess: () => void;
}
export interface FeedViewModel {
  isLoading: boolean;
  loadingComment: boolean;
  intialLoading: boolean;
  isRegisterComment: boolean;
  posts: Array<FeedPostModel>;
  comments: Array<FeedCommentModel>;
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
  showComments: boolean;
  loadUserFeed: () => void;
  handleLike: (post: FeedLike) => void;
  handleComment: () => void;
  handleShowComments: (post: FeedPostModel) => void;
  handleShare: (post: FeedPostModel) => void;
}
