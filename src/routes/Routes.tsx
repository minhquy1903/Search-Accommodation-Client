import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainRouter from './Main/MainRouter';
import ManagerRouter from './Manager/ManagerRouter';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/quan-ly' component={ManagerRouter} />
        <Route path='/' component={MainRouter} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
