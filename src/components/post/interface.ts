import { FeedPostModel } from "../../common/models/feed";
import { FeedLike } from "../../screens/feed/model";

export interface PropsPost {
  item: FeedPostModel;
  onPressShare: (post: FeedPostModel) => void;
  onPressComment: (Post: FeedPostModel) => void;
  onPressLike: (pos: FeedLike) => void;
}
