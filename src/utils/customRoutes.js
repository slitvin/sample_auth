import React from 'react';
import { Redirect, Route, NavLink } from 'react-router-dom';
import routing from '../config/routing';

const PublicRoute = ({ component: Component, ...rest }) => {
  if (localStorage.getItem('token')) {
    return (
      <Route {...rest}>
        <Redirect to={'/'} />
      </Route>
    );
  }

  const renderComponent = (props) => <Component {...props} />;

  return <>
  <div className="wrapper">
    <div className="links">
      <NavLink to={routing().login}>Login</NavLink>
      <NavLink to={routing().createAccount}>Sign up</NavLink>
    </div>
    <Route {...rest} render={renderComponent} />
    </div>
  </>;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const renderComponent = (props) => <Component {...props} />;

  if (localStorage.getItem('token')) {
    return <Route {...rest} render={renderComponent} />;
  }

  return (
    <Route {...rest}>
      <Redirect to={'/login'} />
    </Route>
  );
};

export { PrivateRoute, PublicRoute };
