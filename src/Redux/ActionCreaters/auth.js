import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';
import * as ActionTypes from '../actionTypes';

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

export const loginUser = () => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin());
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

onSignIn = (googleUser, dispatch) => {
    console.log('Google Auth Response');
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
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
            .then(function(result) {
              dispatch(receiveLogin());
              console.log('user signed in ');
              if (result.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .set({
                    gmail: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now()
                  })
                  .then(function(snapshot) {
                    // console.log('Snapshot', snapshot);
                  });
              } else {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .update({
                    last_logged_in: Date.now()
                  });
              }
            })
            .catch(function(error) {
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
        onSignIn(result, dispatch);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

