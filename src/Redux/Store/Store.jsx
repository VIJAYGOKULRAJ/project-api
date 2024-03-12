import { createStore, combineReducers, applyMiddleware } from "redux";
import  {composeWithDevTools}  from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import { LoginReducer } from "../Reducer/LoginReducer";

const reducer = combineReducers({
    LoginStore : LoginReducer,
})
const initalState = {};
const middleWare = [thunk];
const store = createStore(reducer , initalState , composeWithDevTools(applyMiddleware(...middleWare)))
export default store
