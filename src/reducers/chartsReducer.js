import { GET_TIMELINE_DATA_SUCCESS } from "../actions/types";

const initialState = {
    timeline_data: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TIMELINE_DATA_SUCCESS:
            return {
                ...state,
                timeline_data: action.payload,
            };
        default:
            return state;
    }
}
