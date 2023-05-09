import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { PostFooterIcons } from "../../../assets/PostFooterIcons";

const PostFooter = () => {
  return (
    <View style={styles.container}>
      {PostFooterIcons.slice(0, 3).map((icon, index) => (
        <TouchableOpacity>
        <Image key={index} style={styles.icon} source={icon.imageUrl} />
        </TouchableOpacity>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 5,
    
  },
  rightIconContainer: {
    marginLeft: 'auto',
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
});

export default PostFooter;
