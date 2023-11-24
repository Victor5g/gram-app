import { PostModel } from "../../common/models/post";

export interface ProfileViewModel {
  name: string;
  followers: number;
  followings: number;
  userURL: string;
  posts: Array<PostModel>;
  handleSignOut: () => void;
}
