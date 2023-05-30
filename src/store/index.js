import {createStore, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './userReduscer';
import {productReducer} from './productReducer';
import { emailReducer } from './emailReducer'; 

const rootReducer = combineReducers({
    products: productReducer,
    user: userReducer,
    emails: emailReducer
})

export const store = createStore(rootReducer, composeWithDevTools())