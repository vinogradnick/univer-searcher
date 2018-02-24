import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger  } from 'redux-logger'
import rootReducer from '../rootReducer';
import { routerMiddleware, push } from 'react-router-redux'
import {  browserHistory } from 'react-router'


const middleware = routerMiddleware(browserHistory)

const loggerMiddleware = createLogger();
//Хранилище redux store
export const store = createStore(

    rootReducer,//Корневой reducer
    
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        middleware
    )
);
store.dispatch(push('/'))