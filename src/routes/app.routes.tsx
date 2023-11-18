import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

import SingInView from "../screens/signIn/view";
import SingUpView from "../screens/signUp/view";

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SignIn"
      >
        <Screen name="SignIn" component={SingInView} />
        <Screen name="SignUp" component={SingUpView} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
