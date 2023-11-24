import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Video, ResizeMode } from "expo-av";

import { AntDesign } from "@expo/vector-icons";

import SafeAreaWrapper from "../../components/safeAreaWrapper";
import Loading from "../../components/loading";

import style from "./style";
import COLORS from "../../common/constants/colors";

import useProfileViewModel from "./view.model";

const ProfileView = () => {
  const { name, followers, followings, userURL, posts, handleSignOut } =
    useProfileViewModel();

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
            {/* <View style={style.contentHeader}> */}
            <TouchableOpacity
              style={style.logoutButton}
              onPress={handleSignOut}
            >
              <AntDesign name="logout" size={30} color={COLORS.primaryBlack} />
            </TouchableOpacity>
            {/* </View> */}
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
          </View>
        }
        data={posts}
        renderItem={({ item, index }) => (
          <View style={style.constentItem}>
            <View key={index} style={style.item}>
              <Video
                source={{
                  uri: /*item.mediaURL*/ "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                shouldPlay={false}
                isLooping={true}
                resizeMode={ResizeMode.COVER}
                style={{ flex: 1 }}
                useNativeControls={true}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaWrapper>
  );
};

export default ProfileView;
