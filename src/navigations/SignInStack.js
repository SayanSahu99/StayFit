import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn/SignIn';
import Welcome from '../screens/Welcome/Welcome';
import RegisterStack from './RegisterStack';
import { useTheme } from '@react-navigation/native';
import SignOutStack from './SignOutStack';


const Stack = createStackNavigator()

export default function SignInStack() {

  const { colors } = useTheme();

  return (

    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="Register"
        component={RegisterStack}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Sign In',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="SignOut"
        options={{ headerShown: false }}
        component={SignOutStack}
      />
    </Stack.Navigator>

  )
}