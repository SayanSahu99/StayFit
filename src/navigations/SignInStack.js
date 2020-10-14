import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn/SignIn';
import OnBoarding from '../screens/onBoarding/OnBoarding';


const Stack = createStackNavigator()

export default function SignInStack() {
  return (

    <Stack.Navigator>
      <Stack.Screen 
        options={{headerShown: false}}
        name="OnBoarding" 
        component={OnBoarding} 
      />
      <Stack.Screen 
        name="SignIn" 
        component={SignIn} 
        options={{
          title: 'Sign In',
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  
  )
}