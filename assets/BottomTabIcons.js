import HomepageScreen from "../screens/HomepageScreen";
import SearchScreen from "../screens/SearchScreen";
import ReelsScreen from "../screens/ReelsScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";

export const BottomTabIcons = [
  {
    name: "Home",
    component: HomepageScreen,
    imageUrl: require("../assets/icons8-home-16.png"),
    accessibilityLabel: "Home Button",
    accessibilityHint: "Tap to go to your home",
  },
  {
    name: "Search",
    component: SearchScreen,
    imageUrl: require("../assets/icons8-search-30.png"),
    accessibilityLabel: "Search Button",
    accessibilityHint: "Tap to search",
  },
  {
    name: "Reels",
    component: ReelsScreen,
    imageUrl: require("../assets/icons8-reels-50.png"),
    accessibilityLabel: "Reels Button"
  },
  {
    name: "Messages",
    component: MessagesScreen,
    imageUrl: require("../assets/icons8-chat-bubble-50.png"),
    accessibilityLabel: "Messages Button",
    accessibilityHint: "Tap to go to your messages"
  },
  {
    name: "Profile",
    component: ProfileScreen,
    imageUrl: require("../assets/icons8-account-64.png"),
    accessibilityLabel: "Profile Button",
    accessibilityHint: "Tap to go to your profile"
  },
];
