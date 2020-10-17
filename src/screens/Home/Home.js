import React from 'react'
import { View, Text, Button } from 'react-native'
import firebase from 'firebase';

export default function Home({navigation}) {
  // TODO: add firebase sign-out and user info function later
  

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Text>Home</Text>
      <Button
        title="Sign Out"
        onPress={() => {firebase.auth().signOut().then(() => {
          console.log("user signed out");
          navigation.navigate('AuthNavigator');
        }).catch(function(error) {
          // An error happened.
          console.log(error);
        });}}
      >
      </Button>
    </View>

  )
}
