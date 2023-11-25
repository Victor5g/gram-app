import { PostModel } from "./post";
import { UserModel } from "./user";

export interface FeedPostModel extends Omit<PostModel, "author"> {
  author: UserModel;
}
