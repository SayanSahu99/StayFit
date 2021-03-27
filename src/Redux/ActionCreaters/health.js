import firebase from 'firebase';
import { useSelector } from 'react-redux';
import * as ActionTypes from '../actionTypes';


export const addHealth = (health) => {
  return {
    type: ActionTypes.ADD_HEALTH_DETAILS,
    payload: health
  }
}

export const addMacro = (macro) => {
    return {
      type: ActionTypes.ADD_MACRO_DETAILS,
      payload: macro
    }
  }

export const addHealthFirebase = (health, uid) =>  async (dispatch) => {

    const obj = {
        activity: health.activity,
        age: parseInt(health.age),
        current_weight: parseFloat(health.weight),
        current_height: parseFloat(health.height),
        gender: health.gender,
        medical: health.medical,
    }

    await firebase
        .firestore()
        .collection("health")
        .doc(uid)
        .set(obj);
    
    dispatch(addHealth(obj));
}

export const addMacroFirebase = (macro, uid) =>  async (dispatch) => {

    await firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .set({
            macro
        }, {merge: true})

    dispatch(addMacro(macro));
    
}


