import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { DummyDataUsers } from "../../data/DummyDataUsers";

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DummyDataUsers.map((story, index) => (
          <View>
            <TouchableOpacity>
              <Image
                key={index}
                style={styles.story}
                source={{ uri: story.image }}
              />
            </TouchableOpacity>
            <Text
              style={styles.username}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {story.user}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "rgb(69,69,72)",
    borderWidth: 2,
    paddingBottom: 13,
  },
  story: {
    height: 65,
    width: 65,
    borderRadius: 100,
    borderColor: "orange",
    borderWidth: 3,
    marginLeft: 6,
  },
  username: {
    color: "white",
    width: 65,
    marginLeft: 6,
  },
});

export default Stories;
