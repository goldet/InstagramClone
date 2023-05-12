import * as React from "react";
import { PostProvider } from "./context/PostContext";
import "react-native-gesture-handler";
import SignedInStack from "./Navigation";

export default function App() {
  return (
    <PostProvider>
      <SignedInStack />
    </PostProvider>
  );
}
