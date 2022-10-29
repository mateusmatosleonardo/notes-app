import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home/Home";
import { PasswordApp } from "../pages/PasswordApp/PasswordApp";

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PasswordApp"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PasswordApp" component={PasswordApp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}