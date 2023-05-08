import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { DummyDataUsers } from "../../data/DummyDataUsers";

const Stories = () => {
  return (
    <View style={styles.container}>
      {DummyDataUsers.map((users) => (
        <View>
            <TouchableOpacity>
          <Image
            key={users.user}
            style={styles.users}
            source={{ uri: users.image }}
          />
          </TouchableOpacity>
          <Text style={styles.username}>{users.user}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
    borderBottomColor: 'rgb(69,69,72)',
    borderWidth: 2,
  },
  users: {
    height: 50,
    width: 50,
    borderRadius: 100,
    borderColor: "orange",
    borderWidth: 2,
  },
  username: {
    color: "white",
    width: 50,
  },
});

export default Stories;
