import React from "react";
import {
  Text,
  ScrollView,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import SafeAreaWrapper from "../../components/safeAreaWrapper";
import Loading from "../../components/loading";

import useProfileViewModel from "./view.model";

import style from "./style";
import COLORS from "../../common/constants/colors";

const ProfileView = () => {
  const { name, followers, followings, userURL, posts, handleSignOut } =
    useProfileViewModel();

  return (
    <SafeAreaWrapper>
      <ScrollView
        style={style.container}
        contentContainerStyle={{
          paddingTop: 25,
          paddingBottom: 25,
        }}
      >
        <View style={style.body}>
          <View style={style.header}>
            <TouchableOpacity
              style={style.logoutButton}
              onPress={handleSignOut}
            >
              <AntDesign name="logout" size={30} color={COLORS.primaryBlack} />
            </TouchableOpacity>
          </View>
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

          <View style={style.sent}>
            <FlatList
              data={posts}
              numColumns={3}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <View key={item.id} style={style.item}>
                  <Text>{item.name}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default ProfileView;
