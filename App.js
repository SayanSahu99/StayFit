import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppNavigation from './src/navigations/AppNavigation';
import firebaseConfig from './src/firebase/config';
import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { ConfigureStore } from './src/Redux/configureStore';
import Loader from './src/components/loading';

const MyTheme = {
  colors: {
    primary: '#1E88E5',
    background: '#E3F2FD',
  },
};

export default function App() {

  const { persistor, store } = ConfigureStore();

  if (!firebase.apps.length) {
    try {
      firebase.initializeApp(firebaseConfig);
    } catch (err) {
        console.log(err)
    }
  }
  

  LogBox.ignoreLogs(['Setting a timer']);
  return (
    <Provider store={store}>
      <PersistGate 
        loading={<Loader />}
        persistor={persistor}>
        <NavigationContainer theme={MyTheme}>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}


