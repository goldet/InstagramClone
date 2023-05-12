import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>Profile</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default ProfileScreen