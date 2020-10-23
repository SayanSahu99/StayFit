import React,  { useState, useEffect } from 'react'
import firebase from 'firebase';
import { useSelector, useDispatch } from 'react-redux';
import SignInStack from './SignInStack'
import SignOutStack from './SignOutStack'

export default function AuthNavigator() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
    return !isAuthenticated ? (
        <SignInStack />
    ) : (
      <SignOutStack />
    )
  }