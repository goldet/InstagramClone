import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import React from "react";
import { PostFooterIcons } from "../../../assets/PostFooterIcons";
import { useShowComments } from "../../../hooks/useShowComments";

const PostFooter = ({ post }) => {
    const { comments } = post;
    const showComments = useShowComments(comments);

  return (
    <View>
      <View style={styles.container}>
        {PostFooterIcons.slice(0, 3).map((icon, index) => (
          <View key={index} >
          <TouchableOpacity>
            <Image style={styles.icon} source={icon.imageUrl} />
          </TouchableOpacity>
          </View>
        ))}
        <View style={styles.rightIconContainer}>
          <TouchableOpacity>
            <Image
              key={3}
              style={styles.icon}
              source={PostFooterIcons[3].imageUrl}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.username}>{post.likes} likes</Text>
      </TouchableOpacity>
      <View style={styles.container2}>
        <TouchableOpacity>
          <Text style={styles.username}>{post.user.user}</Text>
        </TouchableOpacity>
        <Text style={styles.comment}>{post.caption}</Text>
      </View>

      <Text>{showComments}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 5,
  },
  container2: {
    flexDirection: "row",
  },
  rightIconContainer: {
    marginLeft: "auto",
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  username: {
    color: "white",
    marginLeft: 15,
    fontWeight: 600,
  },
  comment: {
    color:"white",
    marginLeft: 5,
    fontWeight: 400,
  },
});

export default PostFooter;
