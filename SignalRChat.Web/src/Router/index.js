import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Error from '../containers/Error';
import Home from '../containers/Home';
import { DefaultLayout, NoLayout } from '../containers/Layout';
import Login from '../containers/Auth';
import AppRoute from './AppRoute';
import PrivateRoute from './PrivateRoute';
import Form from '../containers/Shared/Forms';


export default (props) => (
    <Provider store={props.store}>
        <BrowserRouter>
            <Switch>
                <AppRoute exact path='/form' layout={DefaultLayout} component={Form} />
                <Redirect exact from='/' to='home' />
                <PrivateRoute exact path='/home' layout={DefaultLayout} component={Home} />
                <AppRoute exact path='/login' layout={NoLayout} component={Login} />
                <AppRoute exact path="/404" layout={DefaultLayout} component={Error} />
                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    </Provider>
);
