import * as ActionTypes from './actionTypes';

export const Health = (state = {
        age: 0,
        gender: "Select Gender ...",
        current_weight: 0,
        current_height: 0,
        target_weight: 0,
        activity: 'Select Activity ...',
        medical: 'Select Medical Condition ...',
        weight_log: {},
        calories:0,
        proteins:0,
        carbs:0,
        fats:0
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_HEALTH_DETAILS:
            return {...state,
                age: action.payload.age,
                gender: action.payload.gender,
                current_weight: action.payload.current_weight,
                current_height: action.payload.current_height,
                target_weight: action.payload.target_weight,
                activity: action.payload.activity,
                medical: action.payload.medical,
                weight_log: action.payload.weight_log
            };
        case ActionTypes.ADD_MACRO_DETAILS:
            return {...state,
                calories: action.payload.calories,
                proteins: action.payload.proteins,
                carbs: action.payload.carbs,
                fats: action.payload.fats,
            };
        case ActionTypes.ADD_WEIGHT_LOG:
            return {...state,
                weight_log: action.payload.weight_log
            };
        default:
            return state
    }
}

