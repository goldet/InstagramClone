import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/post/Post";
import { PostContext } from "../context/PostContext";


const HomepageScreen = ({navigation}) => {
  const { postList } = useContext(PostContext);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        <Stories />
        <ScrollView>
          {postList.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomepageScreen