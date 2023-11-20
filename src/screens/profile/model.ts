export interface ProfileUserPosts {
  id: string;
  name: string;
}

export interface ProfileViewModel {
  name: string;
  followers: number;
  followings: number;
  userURL: string;
  posts: Array<ProfileUserPosts>;
  handleSignOut: () => void;
}
