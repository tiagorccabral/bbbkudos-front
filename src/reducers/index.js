import {combineReducers} from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import kudoReducer from "./kudoReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    auth: authReducer,
    users: userReducer,
    kudos: kudoReducer,
    errors: errorReducer
})