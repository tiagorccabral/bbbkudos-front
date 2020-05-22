import { GET_AVAILABLE_KUDOS_SUCCESS } from "../actions/types";

const initialState = {
    availableKudos: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_AVAILABLE_KUDOS_SUCCESS:
            return {
                ...state,
                availableKudos: action.payload,
            };
        default:
            return state;
    }
}
