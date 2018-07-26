import React from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../helpers/authHelper';
import AppRoute from './AppRoute';

export default ({ component: Component, layout: Layout, ...rest }) => {
    if (isAuthenticated()) {
        return (<AppRoute layout={Layout} component={Component} {...rest} />);
    }
    return (<Redirect to='/login' />);
};