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

  const [hasVisitedState, setHasVisitedState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { actions, state: { user } } = useUsersStore();

  const getVisitedStatus = async () => {
    try {
      const hasVisited = await AsyncStorage.getItem('@hasVisited');
      setHasVisitedState(hasVisited);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Promise.all([getVisitedStatus(), actions.getStoredUserData()])
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return null;
  }

  if (!user) {
    return null;
  }



  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={hasVisitedState === null ? 'OnBoarding' : 'HomeScreen'}
        screenOptions={{ headerShown: false }}>
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