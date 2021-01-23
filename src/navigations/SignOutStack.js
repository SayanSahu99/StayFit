import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'
import { DetailsForm } from '../screens/Register/DetailsForm';
import { Target } from '../screens/Register/Target';
import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator()

export default function SignOutStack() {

  const { colors } = useTheme();
  return (
  
    <Stack.Navigator>
      <Stack.Screen 
        name="DetailsForm" 
        component={DetailsForm} 
        options={{
          title: 'Let us know you better',
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
        name="Target" 
        component={Target} 
        options={{
          title: 'Set Your Target Weight',
          headerStyle: {
          backgroundColor: colors.primary,
          },
          
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
          },
      }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    
  )
}