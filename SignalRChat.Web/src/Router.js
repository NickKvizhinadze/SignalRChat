import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Error from './containers/Error';
import { isAuthenticated } from './helpers/authHelper';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated() ? <Component {...props} /> : <Redirect to='/login' />
        )}></Route>
);

export default () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route path="*" component={Error} />
        </Switch>
    </BrowserRouter>
);