import { PostModel } from "../../common/models/post";
import { UserModel } from "../../common/models/user";

export interface FeedPostModel extends Omit<PostModel, "author"> {
  author: UserModel;
}

export interface FeedViewModel {
  isLoading: boolean;
  posts: Array<FeedPostModel>;
  loadUserFeed: () => void;
}
