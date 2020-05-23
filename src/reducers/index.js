import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import kudoReducer from "./kudoReducer";
import errorReducer from "./errorReducer";
import chartsReducer from "./chartsReducer";

export default combineReducers({
    auth: authReducer,
    users: userReducer,
    kudos: kudoReducer,
    charts: chartsReducer,
    errors: errorReducer,
});
