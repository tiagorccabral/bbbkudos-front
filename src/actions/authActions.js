import axios from 'axios';
import {toast} from "react-toastify";

import {apiEndPoint, setAuthToken} from "../utils/globals";
// import setAuthToken from '../utils/setAuthToken';
import {clearErrors} from "./errorActions";
import {GET_ERRORS, SET_CURRENT_USER} from "./types";


// Login - Get User Token
export const loginUser = ({userData}) => dispatch => {
    const data = {user: userData};
    axios.post(`${apiEndPoint}/login`, data)
        .then(res => {
            // Save to localStorage
            const {jwt} = res.data;

            // Set token to ls
            localStorage.setItem('jwtToken', jwt);
            localStorage.setItem('userData', JSON.stringify(res.data.user));

            // Set token to auth header
            setAuthToken(jwt);

            // Set current user
            dispatch(setCurrentUser(res.data.user));

            // reload page to avoid problems on first request
            window.location.reload(false);
        })
        .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
                toast.error("Ocorreu um erro!");
            }
        );
};

// Set logged in user
export const setCurrentUser = (decodedUser) => {
    return {
        type: SET_CURRENT_USER,
        payload: decodedUser
    }
};
