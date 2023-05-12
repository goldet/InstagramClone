import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const MessagesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>MessagesScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default MessagesScreen