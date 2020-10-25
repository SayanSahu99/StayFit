import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'
import { DetailsForm } from '../screens/Register/DetailsForm';

const Stack = createStackNavigator()

export default function SignOutStack() {
  return (
  
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="DetailsForm" component={DetailsForm} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    
  )
}