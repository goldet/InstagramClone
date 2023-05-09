import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const PostHeader = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.postHeaderContainer}>
        <TouchableOpacity>
          <Image source={{ uri: post.user.image }} style={styles.story} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.username}>{post.user.user}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.ellipses}>...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },
  postHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  story: {
    height: 35,
    width: 35,
    borderRadius: 100,
    borderColor: "orange",
    borderWidth: 1.6,
    marginLeft: 6,
  },
  username: {
    color: "white",
    marginLeft: 10,
    fontWeight: 700,
  },
  ellipses: {
    color: "white",
    fontWeight: 900,
  },
});

export default PostHeader;
