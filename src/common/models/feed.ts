import { PostModel } from "./post";
import { CommentModel } from "./comment";
import { UserModel } from "./user";

export interface FeedPostModel extends Omit<PostModel, "author"> {
  author: UserModel;
}

export interface FeedCommentModel extends Omit<CommentModel, "userId"> {
  author: UserModel;
}
