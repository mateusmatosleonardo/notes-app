import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home/Home";
import { SignIn } from "../pages/SignIn/SignIn";
import { Register } from "../pages/Register/Register";
import { PasswordContext } from "../context/Password/PasswordContext";

const Stack = createStackNavigator();

export function Routes() {

  const { password, fetchPassword } = useContext(PasswordContext);

  // useEffect(() => {
  //   fetchPassword();
  // }, []);

  // revome after debug 
  console.log('Passo 3 - Routes')

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        // initialRouteName={password === "" ? "SignUp" : "SignIn"}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" component={Register} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home}
          options={{ gestureEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}