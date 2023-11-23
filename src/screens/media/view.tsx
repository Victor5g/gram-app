import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Camera } from "expo-camera";
import { Video, ResizeMode } from "expo-av";
import { BlurView } from "@react-native-community/blur";

import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";

import SafeAreaWrapper from "../../components/safeAreaWrapper";
import Input from "../../components/input";

import style from "./style";

import useMediaViewModel from "./view.model";

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
    hasRecordPermission,
    reloadCamera,
    resetState,
    setTitle,
    setDescription,
    cameraRef,
    isRecording,
    recordVideo,
    stopRecording,
  } = useMediaViewModel();

  return (
    <SafeAreaWrapper>
      <View style={style.container}>
        {mode === "initial" && (
          <>
            {reloadCamera &&
              (hasRecordPermission === null ||
                (hasRecordPermission === true && (
                  <Camera style={style.camera} ref={cameraRef}>
                    <TouchableOpacity
                      onPress={isRecording ? stopRecording : recordVideo}
                      style={style.recordButton}
                    >
                      <Entypo
                        name="controller-record"
                        size={120}
                        color={isRecording ? "red" : "white"}
                      />
                    </TouchableOpacity>
                  </Camera>
                )))}
            {hasRecordPermission === false && (
              <View style={style.contentLabel}>
                <Text style={style.labelPermission}>
                  {
                    "Permission for camera and microphone not granted. Please change this in settings."
                  }
                </Text>
              </View>
            )}
          </>
        )}

        {mode === "details" && (
          <>
            {video && (
              <View style={style.contentVideo}>
                <Video
                  source={{
                    uri: video,
                  }}
                  rate={1.0}
                  volume={1.0}
                  isMuted={true}
                  shouldPlay
                  resizeMode={ResizeMode.COVER}
                  isLooping
                  style={style.video}
                  useNativeControls={false}
                />
              </View>
            )}
            <View style={style.form}>
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
        {mode === "initial" && !isRecording && (
          <TouchableOpacity onPress={handlePickVideo} style={style.uploadVideo}>
            <MaterialIcons name="video-library" size={24} color="white" />
          </TouchableOpacity>
        )}

        {mode === "details" && (
          <View style={style.contentButtons}>
            <TouchableOpacity
              onPress={handleMedia}
              style={[style.button, style.uploadButton]}
            >
              <Ionicons name="ios-cloud-upload" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={resetState}
              style={[style.button, style.closeButton]}
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
          blurAmount={20}
          reducedTransparencyFallbackColor="white"
        >
          <Text style={style.loadingText}>
            {progress >= 100 ? "Sent with success" : `Sending... ${progress}%`}
          </Text>
        </BlurView>
      )}
    </SafeAreaWrapper>
  );
};

export default MediaView;
