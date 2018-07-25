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
                let payload;
                if (error.response.status === 401)
                    payload = { error: "Username or password is Invalid" };
                else
                    payload = error.response.data;
                    
                dispatch({
                    type: AUTH_ERROR,
                    payload: payload
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
