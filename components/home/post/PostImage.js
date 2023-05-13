import { View, Image, StyleSheet } from "react-native";
import React from "react";

const PostImage = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.postImage}
        source={{ uri: post.imageUrl }}
        accessibilityLabel="Posted image"
        accessibilityRole="image"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 450,
    },
    postImage: {
       height: "100%",
       resizeMode: "cover",
    },
})

export default PostImage;
