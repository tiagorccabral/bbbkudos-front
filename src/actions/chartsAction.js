import { clearErrors } from "./errorActions";
import { toast } from "react-toastify";
import { apiRequest } from "../utils/globals";
import { GET_TIMELINE_DATA_SUCCESS, GET_ERRORS } from "./types";

export const getTimelineData = () => (dispatch) => {
    dispatch(clearErrors());
    apiRequest
        .get(`/timeline_data`)
        .then((res) => {
            dispatch({
                type: GET_TIMELINE_DATA_SUCCESS,
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