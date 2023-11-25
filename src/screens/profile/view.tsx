import React, { useCallback } from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { ResizeMode } from "expo-av";

import { AntDesign } from "@expo/vector-icons";

import { PostModel } from "../../common/models/post";

import SafeAreaWrapper from "../../components/safeAreaWrapper";
import Loading from "../../components/loading";
import PlayerVideo from "../../components/Player";

import style from "./style";
import COLORS from "../../common/constants/colors";

import useProfileViewModel from "./view.model";

const ProfileView = () => {
  const {
    name,
    followers,
    followings,
    userURL,
    posts,
    isLoading,
    handleSignOut,
  } = useProfileViewModel();

  const UserPosts = useCallback(
    ({ item, index }: { item: PostModel; index: number }) => {
      return (
        <Loading loading={isLoading}>
          <View key={"@C" + index} style={style.contentItem}>
            <View key={"@I" + index} style={style.item}>
              <PlayerVideo
                url={item.mediaURL}
                playInFullScreen={true}
                shouldPlay={false}
                resizeMode={ResizeMode.CONTAIN}
              />
              <View style={style.infoPost}>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={2}
                  style={style.titlePost}
                >
                  {item.title}
                </Text>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={2}
                  style={style.description}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          </View>
        </Loading>
      );
    },
    []
  );

  return (
    <SafeAreaWrapper>
      <FlatList
        style={style.container}
        contentContainerStyle={{
          paddingTop: 25,
          paddingBottom: 25,
          alignItems: "center",
        }}
        ListHeaderComponent={
          <View style={style.header}>
            <TouchableOpacity
              style={style.logoutButton}
              onPress={handleSignOut}
            >
              <AntDesign name="logout" size={30} color={COLORS.primaryBlack} />
            </TouchableOpacity>
            <View style={style.contentImage}>
              <Loading loading={!userURL}>
                <Image
                  style={style.imageProfile}
                  source={{
                    uri: userURL,
                  }}
                />
              </Loading>
            </View>

            <Text style={style.labelUserName}>{name}</Text>

            <View style={style.boxInfo}>
              <View style={style.contentInfo}>
                <Text style={style.labelValue}>{followers}</Text>
                <Text style={style.labelInfo}>{"Followers"}</Text>
              </View>

              <View style={style.contentInfo}>
                <Text style={style.labelValue}>{followings}</Text>
                <Text style={style.labelInfo}>{"following"}</Text>
              </View>
            </View>
            <Text style={style.labelPost}>{"Your posts"}</Text>
          </View>
        }
        data={posts}
        initialNumToRender={1}
        maxToRenderPerBatch={2}
        renderItem={UserPosts}
      />
    </SafeAreaWrapper>
  );
};

export default ProfileView;
