import { GET_ALL_USERS_SUCCESS } from "../actions/types";

const initialState = {
    users: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
}
