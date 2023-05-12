import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import NewPostHeader from "../components/newpost/NewPostHeader";
import FormikPostUploader from "../components/newpost/FormikPostUploader";

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NewPostHeader/>
      <FormikPostUploader/>
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
