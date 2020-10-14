import React,  {useState } from 'react'
import SignInStack from './SignInStack'
import SignOutStack from './SignOutStack'
import OnBoarding from '../screens/onBoarding/OnBoarding';

export default function AuthNavigator() {
  
    const [userToken, setUserToken] = useState(null);

    return userToken == null ? (
        <SignInStack />
    ) : (
      <SignOutStack />
    )
  }