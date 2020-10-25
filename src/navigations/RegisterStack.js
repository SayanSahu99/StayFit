import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../screens/Register/Register';
import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator()

export default function RegisterStack() {

    const { colors } = useTheme();
    return (

    <Stack.Navigator headerMode="none">
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
        
    </Stack.Navigator>

    )
    }