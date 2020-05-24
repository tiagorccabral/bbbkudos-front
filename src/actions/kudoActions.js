import { clearErrors } from "./errorActions";
import { toast } from "react-toastify";
import { apiRequest } from "../utils/globals";
import {GET_AVAILABLE_KUDOS_SUCCESS, GET_MY_KUDOS_SUCCESS,GET_ERRORS} from "./types";
import { isEmpty } from "../utils/validation";

export const getAvailableKudos = ({ sender_id }) => (dispatch) => {
    dispatch(clearErrors());
    const data = { sender_id: sender_id };
    apiRequest
        .post(`/available_user_kudos`, data)
        .then((res) => {
            dispatch({
                type: GET_AVAILABLE_KUDOS_SUCCESS,
                payload: res.data.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
            toast.error("Ocorreu um erro!");
        });
};

export const sendKudosToUser = (
    { user_id, kudo_id, sender_id },
    callbackFunction
) => (dispatch) => {
    dispatch(clearErrors());
    const data = { user_id: user_id, kudo_id: kudo_id, sender_id };
    apiRequest
        .post(`/user_kudos`, data)
        .then((res) => {
            toast.success("Kudo Enviado com sucesso!");
            dispatch(callbackFunction());
        })
        .catch((err) => {
            if (!isEmpty(err.response) && !isEmpty(err.response.data.error)) {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response,
                });
                toast.error(`Ocorreu um erro! ${err.response.data.error}`);
            }
        });
};

export const getMyKudos = ({ user_id }) => (dispatch) => {
    dispatch(clearErrors());
    const data = { user_id: user_id };
    apiRequest
        .post(`/my_kudos`, data)
        .then((res) => {
            dispatch({
                type: GET_MY_KUDOS_SUCCESS,
                payload: res.data.data,
            });
        })
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            });
            toast.error("Ocorreu um erro!");
        });
};