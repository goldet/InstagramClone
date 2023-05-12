import HomepageScreen from "../screens/HomepageScreen";
import SearchScreen from "../screens/SearchScreen";
import ReelsScreen from "../screens/ReelsScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import profileImage from "../assets/instagramuserprofileimage.png";

export const BottomTabIcons = [
  {
    name: "Home",
    component: HomepageScreen,
    imageUrl: require("../assets/icons8-home-16.png"),
  },
  {
    name: "Search",
    component: SearchScreen,
    imageUrl: require("../assets/icons8-search-30.png"),
  },
  {
    name: "Reels",
    component: ReelsScreen,
    imageUrl: require("../assets/icons8-reels-50.png"),
  },
  {
    name: "Messages",
    component: MessagesScreen,
    imageUrl: require("../assets/icons8-chat-bubble-50.png"),
  },
  {
    name: "Profile",
    component: ProfileScreen,
    imageUrl: require("../assets/icons8-account-64.png"),
  },
];
