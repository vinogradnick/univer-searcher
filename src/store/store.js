import { createStore, applyMiddleware } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger  } from 'redux-logger'
import rootReducer from '../rootReducer';


const loggerMiddleware = createLogger();
//Хранилище redux store
export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);