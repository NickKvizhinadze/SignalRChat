import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Error from '../containers/Error';
import Home from '../containers/Home';
import { DefaultLayout, NoLayout } from '../containers/Layout';
import Login from '../containers/Login';
import AppRoute from './AppRoute';
import PrivateRoute from './PrivateRoute';


export default (props) => (
    <Provider store={props.store}>
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path='/' layout={DefaultLayout} component={Home} />
                <AppRoute exact path='/login' layout={NoLayout} component={Login} />
                <AppRoute exact path="/404" layout={DefaultLayout} component={Error} />
                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    </Provider>
);
