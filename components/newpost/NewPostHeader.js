import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

const NewPostHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons8-less-than-50.png")}
        />
      </TouchableOpacity>

      <Text style={styles.text}>New Post</Text>
      <View style={{ width: 20}}></View>
     {/*  <TouchableOpacity>
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default NewPostHeader;
