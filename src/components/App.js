import React from 'react';
import { Switch } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from '../utils/customRoutes';
import routing from '../config/routing';
import {SignInContainer} from '../pages/SignIn/SignInContainer';
import { CreateAccountContainer } from '../pages/CreateAccount/container';
import { ConfirmEmailContainer } from '../pages/ConfirmEmail/container/index';
import MainComponent from '../pages/Main';

function App() {
  return (
    <div className="App">
      <Switch>
        <PublicRoute exact path={routing().root} component={CreateAccountContainer} />
        <PublicRoute exact path={routing().login} component={SignInContainer} />
        <PublicRoute exact path={routing().createAccount} component={CreateAccountContainer} />
        <PublicRoute exact path={routing().verifyEmail} component={ConfirmEmailContainer} />

        <PrivateRoute  path={routing().main} component={MainComponent}/> 
      </Switch>
    </div>
  );
}

export default App;
