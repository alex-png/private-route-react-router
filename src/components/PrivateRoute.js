import React from 'react'
import {Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }, props) => (
    <Route {...rest} render={(props) => (
        props.loggedIn? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

export default PrivateRoute