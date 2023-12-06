
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../pages/Home";
import { Welcome } from "../pages/Welcome";
import { About } from "../pages/About";


const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (

        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='About' component={About} />
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    );
}