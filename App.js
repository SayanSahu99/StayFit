import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigation from './src/navigations/AppNavigation';
import firebaseConfig from './src/firebase/config';
import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import { LogBox } from 'react-native';

const MyTheme = {
  colors: {
    primary: '#1E88E5',
    background: '#E3F2FD',
  },
};

export default function App() {


  if (!firebase.apps.length) {
    try {
      firebase.initializeApp(firebaseConfig);
    } catch (err) {
        console.log(err)
    }
  }
  

  LogBox.ignoreLogs(['Setting a timer']);
  return (
    <NavigationContainer theme={MyTheme}>
      <AppNavigation />
    </NavigationContainer>
  );
}


