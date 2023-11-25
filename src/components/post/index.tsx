import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { ResizeMode } from "expo-av";

import { FeedPostModel } from "../../common/models/feed";

import PlayerVideo from "../../components/player";

import { AntDesign } from "@expo/vector-icons";

import style from "./style";

const Post = ({ item }: { item: FeedPostModel }) => {
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
        <TouchableOpacity style={style.actionButton}>
          <AntDesign name="like2" size={24} color="black" />
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
