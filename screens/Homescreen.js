import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/post/Post";
import { Posts } from "../data/Posts";

const Homescreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {Posts.map((post, index) => (
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
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
