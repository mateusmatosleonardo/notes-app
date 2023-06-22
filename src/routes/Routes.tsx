import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../pages/Home";
import { FormScreen } from "../pages/Form";
import { DetailsScreen } from "../pages/Details";
import { UpdateScreen } from "../pages/Update";
import { RegisterScreen } from "../pages/Register";
import { useUsersStore } from "../store/users/users";
import { ProfileScreen } from "../pages/Profile";
import { OnBoarding } from "../pages/OnBoarding";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export function Routes() {

  const [isLoading, setIsLoading] = useState(true);
  const { actions, state: { user } } = useUsersStore();

  useEffect(() => {
    actions.getStoredUserData().finally(() => setIsLoading(false));
    AsyncStorage.removeItem("@userData")
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={
        user?.avatar_url === '' && user?.name === '' ? 'OnBoarding' :
          user?.avatar_url !== '' || user?.name !== '' ? 'HomeScreen' : 'Register'
      } screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ gestureEnabled: false }} />
        <Stack.Screen
          name="FormScreen"
          component={FormScreen} />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen} />
        <Stack.Screen
          name="UpdateScreen"
          component={UpdateScreen} />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen} />
        <Stack.Screen
          name="Register"
          component={RegisterScreen} />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}