import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home/Home';
import Water from '../screens/Home/Water';
import Nutrition from '../screens/Home/Nutrition';
import SearchFood from '../screens/Home/SearchFood';
import Logout from '../screens/Logout/Logout';
import { DetailsForm } from '../screens/Register/DetailsForm';
import { Target } from '../screens/Register/Target';
import { useTheme, useNavigation, DrawerActions } from '@react-navigation/native';
import Nutriton from '../screens/Home/Nutrition';

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
          headerLeft: () => <Icon name='bars'
            size={24}
            color='black'
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());

            }}></Icon>,
          headerLeftContainerStyle: { paddingHorizontal: 20 },

        }}
        component={drawerNavigator} />

      <Stack.Screen
        name="Water"
        component={Water}
        options={{
          title: 'Daily Water Intake',
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
        name="Nutrition"
        component={Nutrition}
        options={{
          title: 'Count Calories',
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
        name="Search"
        component={SearchFood}
        options={{headerShown: false }}
      />

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
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>

  )

}