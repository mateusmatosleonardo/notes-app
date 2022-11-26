import React from "react";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home/Home";
import { Form } from "../pages/Form/Form";

const Stack = createStackNavigator();

export function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ gestureEnabled: false }} />
        <Stack.Screen
          name="Form"
          component={Form} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}