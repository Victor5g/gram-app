import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Video } from "expo-av";
import { BlurView } from "@react-native-community/blur";

import { Ionicons } from "@expo/vector-icons";

import SafeAreaWrapper from "../../components/safeAreaWrapper";
import Input from "../../components/input";

import Illustration from "../../assets/illustration-upload.svg";

import style from "./style";

import useMediaViewModel from "./view.model";

import COLORS from "../../common/constants/colors";

const MediaView = () => {
  const {
    video,
    mode,
    title,
    progress,
    description,
    handlePickVideo,
    handleMedia,
    isLoading,
    resetState,
    setTitle,
    setDescription,
  } = useMediaViewModel();

  return (
    <SafeAreaWrapper>
      <View style={style.container}>
        {mode === "initial" && <Illustration width={"100%"} height={"100%"} />}
        {mode === "details" && (
          <>
            {video && (
              <View
                style={{
                  width: "90%",
                  height: "50%",
                  overflow: "hidden",
                  borderColor: COLORS.lightGray,
                  borderRadius: 15,
                  borderWidth: 1,
                }}
              >
                <Video
                  source={{
                    uri: video,
                  }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={true}
                  shouldPlay
                  isLooping
                  style={{ width: "100%", height: "100%" }}
                  useNativeControls={false}
                />
              </View>
            )}
            <View style={{ width: "90%", gap: 12, marginTop: 13 }}>
              <Input
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
              />
              <Input
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                multiline={true}
                numberOfLines={5}
              />
            </View>
          </>
        )}
        {mode === "initial" && (
          <TouchableOpacity onPress={handlePickVideo} style={style.uploadVideo}>
            <Ionicons name="videocam" size={24} color="white" />
          </TouchableOpacity>
        )}

        {mode === "details" && (
          <View style={{ width: "90%", marginTop: 30, gap: 10 }}>
            <TouchableOpacity
              onPress={handleMedia}
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "#6282C1",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="ios-cloud-upload" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={resetState}
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "#000000",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="close" size={30} color="white" />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {isLoading && (
        <BlurView
          style={style.loadingBlur}
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        >
          <Text style={style.loadingText}>{`Loading... ${progress}%`}</Text>
        </BlurView>
      )}
    </SafeAreaWrapper>
  );
};

export default MediaView;
