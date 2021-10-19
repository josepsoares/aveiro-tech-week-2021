import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

import Home from '../pages/Home';
import Team from '../pages/Team';
import NoMatch from '../pages/NoMatch';

const Routes: React.FC<{ location: RouteComponentProps['location'] }> = ({
  location,
}) => {
  return (
    <Switch location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/team" component={Team} />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
};

export default Routes;
