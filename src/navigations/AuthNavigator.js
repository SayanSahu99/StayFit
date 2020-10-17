import React,  { useState, useEffect } from 'react'
import SignInStack from './SignInStack'
import SignOutStack from './SignOutStack'
import firebase from 'firebase';

export default function AuthNavigator() {

  const [appUser, setUser] = useState(null);

  useEffect(() => {
    
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user);
    });

    return () => {
      setUser(null)
    }
  }, []);
  
    return appUser == null ? (
        <SignInStack />
    ) : (
      <SignOutStack />
    )
  }