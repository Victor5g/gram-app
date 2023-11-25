import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { ResizeMode } from "expo-av";

import { FeedPostModel } from "../../common/models/feed";

import PlayerVideo from "../../components/player";

import { AntDesign } from "@expo/vector-icons";

import style from "./style";
import COLORS from "../../common/constants/colors";

import { addLikePostMediaById } from "../../repositories/media.repository";

const Post = ({ item }: { item: FeedPostModel }) => {
  const [liked, setLiked] = useState(false);
  const [amountLike, setAmountLike] = useState(item.like || 0);

  const handleLike = async () => {
    setLiked(!liked);
    let executed = await addLikePostMediaById(!liked, item.id);
    if (executed) {
      setAmountLike(!liked ? amountLike + 1 : amountLike - 1);
    }
  };

  return (
    <View style={style.contentPost}>
      <View style={style.headerPost}>
        <Image
          source={{
            uri: item.author.profilePhoto,
          }}
          style={style.headerImage}
        />
        <View style={style.infoUserPost}>
          <Text style={style.labelNameUser}>{item.author.fullName}</Text>
          <Text style={style.datePost}>
            {new Date(item.createdAt).toDateString()}
          </Text>
        </View>
      </View>
      <Text style={style.titlePost}>{item.title}</Text>
      <Text style={style.descriptionPost}>{item.description}</Text>
      <View style={style.constntVideo}>
        <PlayerVideo
          url={item.mediaURL}
          shouldPlay={false}
          resizeMode={ResizeMode.CONTAIN}
        />
      </View>
      <View style={style.contentAction}>
        <TouchableOpacity style={style.actionButton} onPress={handleLike}>
          <AntDesign
            name={liked ? "like1" : "like2"}
            size={24}
            color={liked ? COLORS.secondary : COLORS.primaryBlack}
          />
          <Text style={style.amountLike}>{amountLike}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.actionButton}>
          <AntDesign name="message1" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={style.actionButton}>
          <AntDesign name="sharealt" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Post;