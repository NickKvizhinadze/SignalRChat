import { AUTH_SUCCESS, AUTH_ERROR } from '../actions/types';
const initialState = {
    user: {},
    errors: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload
            };
        case AUTH_ERROR:
            return {
                ...state,
                errors: action.payload
            };
        default:
            return state;
    }
}