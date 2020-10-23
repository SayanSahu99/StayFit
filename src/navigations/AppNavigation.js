import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../screens/onBoarding/OnBoarding';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

export default function AppNavigation() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="OnBoarding"
                component={OnBoarding}
            />
            <Stack.Screen name="AuthNavigator" options={{ headerShown: false }} component={AuthNavigator} />
        </Stack.Navigator>
    );
}