import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import reducer from '../reducer/reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleWare))
)

export default store;