import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { Auth } from './auth';

const config = {
    key: 'root',
    storage: AsyncStorage,
    debug: true
}

export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, {
            auth: Auth
        }),
        applyMiddleware(thunk, logger)
    );
    const persistor = persistStore(store)
    return { persistor, store };
}