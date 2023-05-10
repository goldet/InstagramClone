import { View, Text } from "react-native";
import React, { createContext, useState } from "react";
import { Posts } from "../data/Posts";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postList, setPostList] = useState(Posts);

  return <PostContext.Provider value={{postList, setPostList}}>{children}</PostContext.Provider>;
};
