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

import useProfileViewModel from "./view.model";

import style from "./style";
import COLORS from "../../common/constants/colors";

const ProfileView = () => {
  const array = [
    { id: "1", name: "Cruz Ramirez" },
    { id: "2", name: "Cruz Ramirez" },
    { id: "3", name: "Cruz Ramirez" },
    { id: "4", name: "Cruz Ramirez" },
  ];

  const { handleSignOut } = useProfileViewModel();

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
            <Image
              style={style.imageProfile}
              source={{
                uri: "https://avatars.githubusercontent.com/u/51713169?v=4",
              }}
            />
          </View>

          <Text style={style.labelUserName}>{"Victor5g"}</Text>

          <View style={style.boxInfo}>
            <View style={style.contentInfo}>
              <Text style={style.labelValue}>{"980M"}</Text>
              <Text style={style.labelInfo}>{"Followers"}</Text>
            </View>

            <View style={style.contentInfo}>
              <Text style={style.labelValue}>{"2k"}</Text>
              <Text style={style.labelInfo}>{"following"}</Text>
            </View>
          </View>

          <View style={style.sent}>
            <FlatList
              data={array}
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
