import { VideoProps } from "expo-av";

export interface PlayerViewItem extends VideoProps {
  url: string;
  playInFullScreen?: boolean;
}
