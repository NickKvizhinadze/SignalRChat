import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../helpers/authHelper';

export default ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated() ? <Component {...props} /> : <Redirect to='/login' />
        )}></Route>
);