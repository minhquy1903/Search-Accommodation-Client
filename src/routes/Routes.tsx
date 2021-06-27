import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainRouter from "./Main/MainRouter";
import ManagerRouter from "./Manager/ManagerRouter";
import AdminRouter from "./Admin/AdminRouter";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/quan-ly" component={ManagerRouter} />
        <Route path="/admin" component={AdminRouter} />
        <Route path="/" component={MainRouter} />
      </Switch>
    </Router>
  );
};

export default Routes;
