import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Error from '../containers/Error';
import Home from '../containers/Home';
import Login from '../containers/Login';
import PrivateRoute from './PrivateRoute';
import Layout from '../containers/Layout';

export default (props) => (
    <Provider store={props.store}>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path="/404" component={Error} />
                    <Redirect to="/404" />
                </Switch>
            </Layout>
        </BrowserRouter>
    </Provider>
);