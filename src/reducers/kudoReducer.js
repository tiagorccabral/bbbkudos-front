import {GET_AVAILABLE_KUDOS_SUCCESS, GET_MY_KUDOS_SUCCESS} from "../actions/types";

const initialState = {
    availableKudos: null,
    my_kudos: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_AVAILABLE_KUDOS_SUCCESS:
            return {
                ...state,
                availableKudos: action.payload,
            };
        case GET_MY_KUDOS_SUCCESS:
            return {
                ...state,
                my_kudos: action.payload
            };
        default:
            return state;
    }
}
