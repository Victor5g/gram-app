import { useState, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { Video, ResizeMode } from "expo-av";

import { PlayerViewItem } from "./interfaces";

import { FontAwesome } from "@expo/vector-icons";

import Loading from "../loading";

import style from "./style";
import COLORS from "../../common/constants/colors";

const PlayerVideo = ({ url, playInFullScreen, ...rest }: PlayerViewItem) => {
  const videoRef = useRef<Video>();
  const [status, setStatus] = useState<any>();
  const [isLoading, setLoading] = useState(false);

  const playVideo = async () => {
    if (status.isPlaying) {
      playInFullScreen && videoRef.current.dismissFullscreenPlayer();
      videoRef.current.pauseAsync();
    } else {
      playInFullScreen && videoRef.current.presentFullscreenPlayer();
      videoRef.current.playAsync();
    }
  };

  return (
    <TouchableOpacity style={style.container} onPress={playVideo}>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        !status?.isPlaying && (
          <View style={style.control}>
            <View style={style.blur} />
            <FontAwesome name="play-circle" size={50} color={COLORS.white} />
          </View>
        )
      )}
      <Video
        {...rest}
        ref={videoRef}
        source={{
          uri: /*url*/ "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay={false}
        isLooping={true}
        onLoadStart={() => setLoading(true)}
        onReadyForDisplay={() => setLoading(false)}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        resizeMode={ResizeMode.COVER}
        style={style.video}
        useNativeControls={false}
      />
    </TouchableOpacity>
  );
};

export default PlayerVideo;
