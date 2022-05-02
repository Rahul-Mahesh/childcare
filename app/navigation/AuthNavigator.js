import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserNavigator from "./UserNavigator";
import Login_page from "../screens/Login_page";



const Stack = createStackNavigator();

const AuthNavigator = () => (
<Stack.Navigator>
<Stack.Screen
  name="login"
  component={Login_page}
  options={{ headerShown: false }}
/>
<Stack.Screen name="home" component={UserNavigator} options={{ headerShown: false }} />
</Stack.Navigator>
);

export default AuthNavigator;