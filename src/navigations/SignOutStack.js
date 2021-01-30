import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home/Home'
import { DetailsForm } from '../screens/Register/DetailsForm';
import { Target } from '../screens/Register/Target';
import { useTheme, useNavigation, DrawerActions } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function SignOutStack(props) {
  const { colors } = useTheme();

  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      {/* <Stack.Screen 
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
      /> */}
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
      <Stack.Screen 
        name="Main" 
        options={{ 
          headerRight: () => <Icon name='bars'
          size={24}
          color='black'
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Icon>
         }} 
        component={drawerNavigator} />
    </Stack.Navigator>
  );
}

export function drawerNavigator() {
  
  return (
  
    <Drawer.Navigator 
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: '#ffffff',
        width: 240,
      }}
    >
        <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
    
  )
}