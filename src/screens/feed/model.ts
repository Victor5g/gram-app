import { PostModel } from "../../common/models/post";

export interface FeedViewModel {
  isLoading: boolean;
  posts: Array<PostModel>;
}
