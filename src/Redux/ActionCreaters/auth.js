import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import * as ActionTypes from '../actionTypes';
import * as Facebook from 'expo-facebook';
import { addExistingUserFirebase, addNewUserFirebase } from './users';

export const requestLogin = () => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
  }
}

export const receiveLogin = () => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
  }
}

export const loginError = (message) => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    message
  }
}

export const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST,
  }
}

export const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS,
  }
}

export const logoutError = (message) => {
  return {
    type: ActionTypes.LOGOUT_FAILURE,
    message
  }
}

onSignInFacebook = (result, dispatch) => {
  var unsubscribe = firebase.auth().onAuthStateChanged(
    function (user) {
      if(user != null){
        console.log("User: ", user);
      }
      else{
        unsubscribe();
        console.log("result: ", result);
        var credential = firebase.auth.FacebookAuthProvider.credential(result.token);
        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((user)=>{
            dispatch(receiveLogin());
            console.log("User: ", user);
          })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            dispatch(loginError(error.message));
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      } 
    }
  );
}

// https://www.youtube.com/watch?v=LJY73nD5bwQ
export const loginUserFacebook = () => (dispatch) => {
  Facebooklogin(dispatch);
}
Facebooklogin = async (dispatch) => {
  try {
    dispatch(loginError(''));
    await Facebook.initializeAsync({
      appId: '151657423467636',
    });
    const {type, token} = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      dispatch(receiveLogin());
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      console.log("credential - ", credential);
      firebase.auth().signInWithCredential(credential)
      .then((User) =>{
        dispatch(receiveLogin());
        console.log('user signed in  ----- ', User.additionalUserInfo.profile.picture.data.url);
        if (User.additionalUserInfo.isNewUser) {
          dispatch(addNewUserFirebase({
            uid: User.user.uid,
            email: User.user.email,
            profile_picture: User.additionalUserInfo.profile.picture.data.url,
            first_name: User.additionalUserInfo.profile.first_name,
            last_name: User.additionalUserInfo.profile.last_name,
            created_at: Date.now()
          }));
            
        } else {
          dispatch(addExistingUserFirebase({
            uid: User.user.uid,
            last_logged_in: Date.now()
          }));
        }
      })
      .catch((error) =>{
        console.log("getting Error!!!! !!!!!");
        dispatch(loginError(error));
      })
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    dispatch(loginError(message));
  }
}


export const loginUserGoogle = () => (dispatch) => {
  // We dispatch requestLogin to kickoff the call to the API
  signInWithGoogleAsync(dispatch);
};

isUserEqual = (googleUser, firebaseUser) => {
  console.log(googleUser)
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId ===
        firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.getBasicProfile().getId()
      ) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
};

onSignInGoogle = (googleUser, dispatch) => {
  console.log('Google Auth Response');
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged(
    function (firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(function (result) {
            dispatch(receiveLogin());
            console.log('user signed in ');
            if (result.additionalUserInfo.isNewUser) {
              dispatch(addNewUserFirebase({
                  uid: result.user.uid,
                  email: result.user.email,
                  profile_picture: result.additionalUserInfo.profile.picture,
                  first_name: result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name,
                  created_at: Date.now()
                }));
            } else {
              dispatch(addExistingUserFirebase({
                uid: result.user.uid,
                last_logged_in: Date.now()
                }, {merge: true}));
            }
          })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            dispatch(loginError(errorMessage));
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      } else {
        dispatch(receiveLogin());
        console.log('User already signed-in Firebase.');
      }
    }
  );
};

signInWithGoogleAsync = async (dispatch) => {
  try {
    const result = await Google.logInAsync({
      androidClientId: process.env.GOOGLE_ANDROID_CLIENTID,

      //iosClientId: '', //enter ios client id
      scopes: ['profile', 'email']
    });

    if (result.type === 'success') {
      onSignInGoogle(result, dispatch);
      return result.accessToken;
    } else {
      dispatch(loginError(''));
      return { cancelled: true };
    }
  } catch (e) {
    dispatch(loginError(''));
    return { error: true };
  }
};

