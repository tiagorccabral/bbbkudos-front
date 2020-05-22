import {clearErrors} from "./errorActions";
import {toast} from "react-toastify";
import {apiRequest} from "../utils/globals";
import {GET_AVAILABLE_KUDOS_SUCCESS, GET_ERRORS} from "./types";

export const getAvailableKudos = ({user_id}) => dispatch => {
    dispatch(clearErrors());
    const data = {user_id: user_id};
    apiRequest.post(`/available_user_kudos`, data)
        .then(res => {
            dispatch({
                type: GET_AVAILABLE_KUDOS_SUCCESS,
                payload: res.data.data
            })
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