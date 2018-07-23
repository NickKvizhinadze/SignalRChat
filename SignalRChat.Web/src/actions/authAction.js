import { AUTH } from './types';
import Config from '../config';
import { getUserFromToken } from '../helpers/authHelper';

const controller = 'Account';

export const getToken = (auth) => dispatch => {
    fetch(`${Config.ApiHost}/${controller}/GetToken`, {
        method: 'Post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(auth)
    })
        .then(res => res.json())
        .then(data => {
            const user = getUserFromToken(data.token);
            window.localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: AUTH,
                payload: user
            })
        })
        .catch(err => console.log(err));
};