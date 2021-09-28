import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth';

// const user = null;
// const user = 'eze';

export const PrivateRoute = ({ component: Component, ...rest}) => {
  const auth = useAuth();
  const location = useLocation();

  return (
    <Route {...rest}>
      {
        auth.isLogged() 
        ? <Component />
        : <Redirect to={{pathname: "/login", state: {from: location}}} />
      }
      
    </Route>
  )
}
