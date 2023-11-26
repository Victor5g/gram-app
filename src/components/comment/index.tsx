import { View, Image, Text } from "react-native";

import { FeedCommentModel } from "../../common/models/feed";

import style from "./style";

const Comment = ({ item }: { item: FeedCommentModel }) => {
  return (
    <View style={style.contentComment}>
      <Image
        style={style.profileComment}
        source={{ uri: item.author.profilePhoto }}
      />
      <View style={style.commentInfo}>
        <Text style={style.labelAuthor}>{item.author.fullName}</Text>
        <Text style={style.labelComment}>{item.comment}</Text>
      </View>
    </View>
  );
};

export default Comment;
