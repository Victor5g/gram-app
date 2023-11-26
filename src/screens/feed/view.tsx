import React, { useCallback } from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";

import { FeedPostModel } from "../../common/models/feed";

import SafeAreaWrapper from "../../components/safeAreaWrapper";
import Post from "../../components/post";
import Comment from "../../components/comment";
import Loading from "../../components/loading";
import ModalView from "../../components/modal";
import Input from "../../components/input";

import { FontAwesome } from "@expo/vector-icons";

import style from "./style";
import COLORS from "../../common/constants/colors";

import useFeedViewModel from "./view.model";

const FeedView = () => {
  const {
    isLoading,
    loadingComment,
    intialLoading,
    isRegisterComment,
    showComments,
    posts,
    comments,
    comment,
    setComment,
    handleLike,
    handleComment,
    handleShare,
    handleShowComments,
    loadUserFeed,
  } = useFeedViewModel();

  const renderPost = useCallback(({ item }: { item: FeedPostModel }) => {
    return (
      <Post
        item={item}
        onPressLike={handleLike}
        onPressShare={handleShare}
        onPressComment={handleShowComments}
      />
    );
  }, []);

  const renderComment = useCallback(({ item }) => {
    return <Comment item={item} />;
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
        <ModalView visible={showComments}>
          <View style={style.contentComments}>
            <View style={style.modalHeader}>
              <Text style={style.modalTitle}>{"Comments"}</Text>
              <TouchableOpacity
                style={style.closeButton}
                onPress={() => handleShowComments(null)}
              >
                <FontAwesome
                  name="close"
                  size={28}
                  color={COLORS.primaryBlack}
                />
              </TouchableOpacity>
            </View>

            <View style={style.modalBody}>
              <Loading loading={loadingComment}>
                <FlatList
                  data={comments}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={style.constentList}
                  initialNumToRender={5}
                  maxToRenderPerBatch={8}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={renderComment}
                />
              </Loading>
              <View style={style.contentInput}>
                <View style={{ flex: 1 }}>
                  <Input
                    multiline={true}
                    numberOfLines={3}
                    placeholder={"write your comment"}
                    value={comment}
                    onChangeText={setComment}
                  />
                </View>
                <TouchableOpacity
                  disabled={comment.length < 1}
                  style={style.sendButton}
                  onPress={handleComment}
                >
                  <Loading
                    loading={isRegisterComment}
                    customColor={COLORS.white}
                  >
                    <FontAwesome name="send" size={20} color={COLORS.white} />
                  </Loading>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ModalView>
      </View>
    </SafeAreaWrapper>
  );
};

export default FeedView;
