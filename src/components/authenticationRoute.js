import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Layout } from './layout';

export const AuthenticationRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Layout Component={Component} {...props} />
            : <Redirect to='/login' />
    )} />
)

