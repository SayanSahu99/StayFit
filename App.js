import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';

const MyTheme = {
  colors: {
    primary: '#1E88E5',
    background: '#E3F2FD',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AuthNavigator/>
    </NavigationContainer>
  );
}


