import { PostModel } from "./post";
import { CommentModel } from "./comment";
import { UserModel } from "./user";

export interface FeedPostModel extends Omit<PostModel, "author"> {
  author: UserModel;
  amountComment: number;
}

export interface FeedCommentModel extends Omit<CommentModel, "userId"> {
  author: UserModel;
}
