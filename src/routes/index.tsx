
import React from 'react';
import { Route, Switch } from 'react-router';
import WelcomeScreen from 'components/WelcomeScreen';
import MainScreen from 'components/MainScreen';
import NoMatch from 'components/NoMatch';

const routes = (
  <div>
    <Switch>
      <Route exact={true} path="/" component={WelcomeScreen} />
      <Route path="/main" component={MainScreen} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default routes;
