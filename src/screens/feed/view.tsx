import React, { useCallback } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { ResizeMode } from "expo-av";

import { FeedPostModel } from "./model";

import SafeAreaWrapper from "../../components/safeAreaWrapper";
import PlayerVideo from "../../components/Player";
import Loading from "../../components/loading";

import { AntDesign } from "@expo/vector-icons";

import style from "./style";

import useFeedViewModel from "./view.model";

const FeedView = () => {
  const { isLoading, intialLoading, posts, loadUserFeed } = useFeedViewModel();

  const renderPost = useCallback(({ item }: { item: FeedPostModel }) => {
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
  }, []);

  return (
    <SafeAreaWrapper>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.title}>{"Feed"}</Text>
        </View>
        <Loading loading={intialLoading}>
          <FlatList
            data={posts}
            onEndReached={loadUserFeed}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={1}
            maxToRenderPerBatch={8}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<Loading loading={isLoading} />}
            contentContainerStyle={style.listContent}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderPost}
          />
        </Loading>
      </View>
    </SafeAreaWrapper>
  );
};

export default FeedView;
