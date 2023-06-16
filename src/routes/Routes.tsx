import React from "react";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../pages/Home";
import { FormScreen } from "../pages/Form";
import { DetailsScreen } from "../pages/Details";
import { UpdateScreen } from "../pages/Update";

const Stack = createStackNavigator();

export function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
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
      </Stack.Navigator>
    </NavigationContainer >
  )
}