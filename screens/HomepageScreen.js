import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/post/Post";
import BottomTab from "../components/home/BottomTab";
import { PostContext } from "../context/PostContext";
import { Divider } from "react-native-elements";

const HomepageScreen = () => {
    const { postList } = useContext(PostContext);
    return (
      <>
        <SafeAreaView style={styles.container}>
          <Header />
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