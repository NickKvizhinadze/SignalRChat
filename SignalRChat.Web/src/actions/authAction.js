import axios from 'axios';
import Config from '../config';
import { getUserFromToken } from '../helpers/authHelper';
import { AUTH_SUCCESS, AUTH_ERROR } from './types';

const controller = 'Account';

export const getToken = (auth) => dispatch => {
    axios
        .post(`${Config.ApiHost}/${controller}/GetToken`, auth)
        .then(resp => {
            const user = getUserFromToken(resp.data.token);
            window.localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: AUTH_SUCCESS,
                payload: user
            })
        })
        .catch(error => {
            if (error.response) {
                dispatch({
                    type: AUTH_ERROR,
                    payload: error.response.data
                });
            }
            else {
                dispatch({
                    type: AUTH_ERROR,
                    payload: { error: error.message }
                });
            }
        })
};
