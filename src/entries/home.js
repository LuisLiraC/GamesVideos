import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/Home';
// import data from '../api.json';
// import data from '../schemas/NormalizeData';1
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/Reducers';
import {Map as map} from 'immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


/* function logger({getState, dispatch}){
     return (next) => {
         return (action) => {
             console.log('hola', action)
             const value = next(action)
             console.log('Nuevo estado', getState().toJS())
             return value
         }
     }
} */

/* const logger = ({getState, dispatch}) => next => action => {
     console.log('Acción', action)
     const value = next(action)
     console.log('Nuevo estado', getState().toJS())
     return value
} */

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(
            logger,
            thunk
        )
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const homeContainer = document.getElementById('home-container');

render(
    <Provider store={store}>
        <Home />
    </Provider>,
    homeContainer
); 