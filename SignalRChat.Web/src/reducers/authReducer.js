import { AUTH } from '../actions/types';
const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}