import {combineReducers} from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    auth: authReducer,
    users: userReducer,
    errors: errorReducer
})