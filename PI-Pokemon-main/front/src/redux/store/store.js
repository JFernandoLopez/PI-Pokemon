import { applyMiddleWare, compose, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleWare(thunkMiddleWare))
)

export default store;