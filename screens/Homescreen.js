import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/post/Post";
import BottomTab from "../components/home/BottomTab";
import { PostContext } from "../context/PostContext";

const Homescreen = () => {
  const { postList } = useContext(PostContext);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {postList.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
     {/*  <BottomTab /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default Homescreen;
