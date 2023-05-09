import { View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostFooter from "./PostFooter";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post}/>
      <PostFooter />
    </View>
  );
};

export default Post;
