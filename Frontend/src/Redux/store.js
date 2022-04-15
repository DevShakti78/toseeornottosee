import {createStore , combineReducers , applyMiddleware} from "redux"
import { login_reducer } from "./Login/reducer"
import { sign_reducer } from "./Signup/reducer"
import {rest_reducer} from "./Rest/reducer"
import thunk  from 'redux-thunk'
export const root_reducer = combineReducers({
   login:login_reducer,
   sign : sign_reducer,
   rest:rest_reducer
})

export const store = createStore(root_reducer , applyMiddleware(thunk))