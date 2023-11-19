import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";

import Feed from "../screens/feed/view";
import Media from "../screens/media/view";
import Profile from "../screens/profile/view";

import COLORS from "../common/constants/colors";

const { Navigator, Screen } = createBottomTabNavigator();

const Tab = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.chineseSilver,
      }}
    >
      <Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Media"
        component={Media}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="add-circle-sharp" size={size + 5} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default Tab;
