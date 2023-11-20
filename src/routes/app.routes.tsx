import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { auth } from "../repositories/firebase.client";

const { Navigator, Screen } = createNativeStackNavigator();

import SignInView from "../screens/signIn/view";
import SignUpView from "../screens/signUp/view";
import Home from "./app.tab.routes";
import Loading from "../components/loading";

const Routes = () => {
  const [user, setUser] = useState<any>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const event = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading && setLoading(false);
    });
    return event;
  }, []);

  return loading ? (
    <Loading loading={true} />
  ) : (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={user ? "Home" : "SignIn"}
      >
        {user ? (
          <Screen name="Home" component={Home} />
        ) : (
          <>
            <Screen name="SignIn" component={SignInView} />
            <Screen name="SignUp" component={SignUpView} />
          </>
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
