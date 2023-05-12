import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import NewPostHeader from "../components/newpost/NewPostHeader";

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NewPostHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      flex: 1,
    },
  });


export default NewPostScreen;
