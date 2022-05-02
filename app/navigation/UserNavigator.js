import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Register_page from "../screens/Register_page";
import HomeScreen from "../screens/HomeScreen";
import Getdata from '../screens/getdata';
import Schedule from "../screens/Schedule";
import MySchedules from "../screens/MySchedules";


const Stack = createStackNavigator();

const UserNavigator = () => (
<Stack.Navigator>
<Stack.Screen
  name="home"
  component={HomeScreen}
  options={{ headerShown: false }}
/>
<Stack.Screen name="register" component={Register_page} options={{ headerShown: false }} />
<Stack.Screen name="data" component={Getdata} options={{ headerShown: false }} />
<Stack.Screen name="schedule" component={Schedule} options={{ headerShown: false }} />
<Stack.Screen name="myschedule" component={MySchedules} options={{ headerShown: false }} />
</Stack.Navigator>
);

export default UserNavigator;