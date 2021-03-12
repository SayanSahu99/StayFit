import firebase from 'firebase';
import * as ActionTypes from '../actionTypes';


export const addUser = (user) => {
  return {
    type: ActionTypes.ADD_NEW_USER,
    payload: user
  }
}

export const addNewUserFirebase = (user) =>  async (dispatch) => {
    await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set(user);
    
    dispatch(addUser(user));
}

export const addExistingUserFirebase = (user) =>  async (dispatch) => {

    await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set({
            last_logged_in: Date.now()
        }, {merge: true})

    dispatch(addUser(user));
    
}


