import React, { useCallback } from "react";
import { Text, View, FlatList } from "react-native";

import { FeedPostModel } from "../../common/models/feed";

import SafeAreaWrapper from "../../components/safeAreaWrapper";
import Post from "../../components/post";
import Loading from "../../components/loading";

import style from "./style";

import useFeedViewModel from "./view.model";

const FeedView = () => {
  const { isLoading, intialLoading, posts, loadUserFeed } = useFeedViewModel();

  const renderPost = useCallback(({ item }: { item: FeedPostModel }) => {
    return <Post item={item} />;
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
