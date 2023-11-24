import { PostModel } from "../../common/models/post";

export interface ProfileViewModel {
  name: string;
  followers: number;
  followings: number;
  userURL: string;
  isLoading: boolean;
  posts: Array<PostModel>;
  handleSignOut: () => void;
}
