import * as ActionTypes from './actionTypes';

export const User = (state = {
        first_name: '',
        last_name: '',
        profile_picture: '',
        created_at: '',
        last_logged_in: '',
        gmail: ''
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NEW_USER:
            return {...state,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                profile_picture: action.payload.profile_picture,
                created_at: action.payload.created_at,
                email: action.payload.email,
                last_logged_in: action.payload.last_logged_in,
                uid: action.payload.uid
            };
        default:
            return state
    }
}

