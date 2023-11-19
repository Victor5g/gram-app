import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";

import Feed from "../screens/feed/view";
import Media from "../screens/media/view";
import Profile from "../screens/profile/view";

import style from "./style.tab.routes";

const { Navigator, Screen } = createBottomTabNavigator();

const tabInFocus = (focused: boolean) => {
  return focused ? style.tabInFocus.color : style.unfocusedTab.color;
};

const Tab = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: style.barStyle,
        tabBarItemStyle: style.barItemStyle,
        tabBarLabel: ({ focused, children }) => (
          <Text
            style={{
              color: tabInFocus(focused),
              ...style.barLabel,
            }}
          >
            {children}
          </Text>
        ),
      }}
    >
      <Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={tabInFocus(focused)} />
          ),
        }}
      />
      <Screen
        name="Media"
        component={Media}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="add-circle-sharp"
              size={30}
              color={tabInFocus(focused)}
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="user" size={24} color={tabInFocus(focused)} />
          ),
        }}
      />
    </Navigator>
  );
};

export default Tab;
