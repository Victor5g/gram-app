import { FeedPostModel } from "../../common/models/feed";
export interface FeedViewModel {
  isLoading: boolean;
  intialLoading: boolean;
  posts: Array<FeedPostModel>;
  loadUserFeed: () => void;
}
