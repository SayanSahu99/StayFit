import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn/SignIn';
import OnBoarding from '../screens/onBoarding/OnBoarding';
import Welcome from '../screens/Welcome/Welcome';
import Register from '../screens/Register/Register';
import { useTheme } from '@react-navigation/native';
import Home from '../screens/Home/Home';
import SignOutStack from './SignOutStack';


const Stack = createStackNavigator()

export default function SignInStack() {

  const { colors } = useTheme();

  return (

    <Stack.Navigator>
      <Stack.Screen 
        options={{headerShown: false}}
        name="Welcome" 
        component={Welcome} 
      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{
          title: 'Register',
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
        options={{headerShown: false}}
        component={SignOutStack} 
       />
    </Stack.Navigator>
  
  )
}