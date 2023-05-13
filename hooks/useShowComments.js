import { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Posts } from "../data/Posts";

export const useShowComments = (comments) => {
  const [showAllComments, setShowAllComments] = useState(false);

  const showComments = () => {
    setShowAllComments(!showAllComments);
  };

  if (comments.length <= 3) {
    return (
      <View accessibilityLabel="Comments">
        {comments &&
          comments.map((comment, index) => (
            <View key={index} style={styles.container2}>
              <TouchableOpacity>
                <Text style={styles.username}>{comment.user}</Text>
              </TouchableOpacity>
              <Text style={styles.comment}>{comment.comment}</Text>
            </View>
          ))}
      </View>
    );
  } else {
    return (
      <View accessibilityLabel="Comments">
        <TouchableOpacity
          onPress={showComments}
          accessibilityLabel="view/hide comments button"
          accessibilityHint="tap to show or hide comments"
        >
          <Text style={styles.showComment}>
            {showAllComments
              ? "Hide comments"
              : `View all ${comments.length} comments`}
          </Text>
        </TouchableOpacity>
        {showAllComments
          ? comments.map((comment, index) => (
              <View key={index} style={styles.container2}>
                <TouchableOpacity
                  accessibilityLabel={`${comment.user}'s username`}
                  accessibilityHint="tap to view profile"
                >
                  <Text style={styles.username}>{comment.user}</Text>
                </TouchableOpacity>
                <Text style={styles.comment}>{comment.comment}</Text>
              </View>
            ))
          : comments.slice(0, 3).map((comment, index) => (
              <View key={index} style={styles.container2}>
                <TouchableOpacity
                  accessibilityLabel={`${comment.user}'s username`}
                  accessibilityHint="tap to view profile"
                >
                  <Text style={styles.username}>{comment.user}</Text>
                </TouchableOpacity>
                <Text style={styles.comment}>{comment.comment}</Text>
              </View>
            ))}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container2: {
    flexDirection: "row",
  },
  username: {
    color: "white",
    marginLeft: 15,
    fontWeight: 600,
  },
  comment: {
    color: "white",
    marginLeft: 5,
    fontWeight: 400,
  },
  showComment: {
    color: "rgb(123,123,123)",
    marginLeft: 15,
  },
});
