import React from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { ResizeMode } from "expo-av";

import SafeAreaWrapper from "../../components/safeAreaWrapper";
import PlayerVideo from "../../components/Player";

import { AntDesign } from "@expo/vector-icons";

import style from "./style";

//  Agora e trazer os dados do usuario do video, adicinar funcionalidade compartilher comentar e curtir!

import useFeedViewModel from "./view.model";

const FeedView = () => {
  const { isLoading, posts } = useFeedViewModel();

  return (
    <SafeAreaWrapper>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.title}>{"Feed"}</Text>
        </View>
        <FlatList
          data={posts}
          contentContainerStyle={{
            gap: 40,
            paddingTop: 30,
            paddingBottom: 30,
          }}
          renderItem={({ item, index }) => (
            <View key={index} style={style.contentPost}>
              <View style={style.headerPost}>
                <Image
                  source={{
                    uri: item.author.profilePhoto,
                  }}
                  style={style.headerImage}
                />
                <View style={style.infoUserPost}>
                  <Text style={style.labelNameUser}>
                    {item.author.fullName}
                  </Text>
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
          )}
        />
      </View>
    </SafeAreaWrapper>
  );
};

export default FeedView;
