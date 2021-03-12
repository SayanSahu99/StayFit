import firebase from 'firebase';
import * as ActionTypes from '../actionTypes';


export const addNewUser = (user) => {
  return {
    type: ActionTypes.ADD_NEW_USER,
    payload: user
  }
}

export const addExistingUser = (user) => {
    return {
      type: ActionTypes.ADD_EXISTING_USER,
      payload: user
    }
  }

export const addNewUserFirebase = (user) =>  async (dispatch) => {
    await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set(user);
    
    dispatch(addNewUser(user));
}

export const addExistingUserFirebase = (user) =>  async (dispatch) => {

    console.log(user);
    
    dispatch(addExistingUser(user));
    await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set({
            last_logged_in: Date.now()
        }, {merge: true})

    
}


