import { clearErrors } from "./errorActions";
import { toast } from "react-toastify";
import { apiRequest } from "../utils/globals";
import { GET_ALL_USERS_SUCCESS, GET_ERRORS } from "./types";

export const getAllUsers = () => (dispatch) => {
    dispatch(clearErrors());
    apiRequest
        .get(`/users`)
        .then((res) => {
            dispatch({
                type: GET_ALL_USERS_SUCCESS,
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
