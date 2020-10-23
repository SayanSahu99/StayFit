import React from 'react'
import { View, Text, Button } from 'react-native'
import firebase from 'firebase';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style'
import {logoutError, receiveLogout, requestLogout} from '../../Redux/ActionCreaters/auth'
import Spinner from '../../components/activityIndicator';

export default function Home({navigation}) {
  // TODO: add firebase sign-out and user info function later

  const isLoading = useSelector(state => state.auth.isLoading);
  const dispatch = useDispatch();

  return (
    <View style={styles.containerView}>
      {isLoading ? <Spinner/> : (
      <View>
        <View>
          <Text>Home</Text>
        </View>
        <Button
          title="Sign Out"
          onPress={() => {
            dispatch(requestLogout());
            firebase.auth().signOut().then(() => {
              dispatch(receiveLogout());
              console.log("user signed out");
              navigation.navigate('AuthNavigator');
            }).catch(function(error) {
            // An error happened.
            console.log(error);
            dispatch(logoutError(error));
            });
          }
          }
        >
        </Button>
      </View>
      )}
    </View>

  )
}
