import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Home from '../pages/Home/Home';
import PostDetail from '../pages/PostDetail/PostDetail';

import ManagerRouter from './Manager/ManagerRouter';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Header />
          <NavBar />
          <Switch>
            <Route path='/' component={Home} exact />

            <Route path='/login' component={Login} />

            <Route path='/sign-up' component={SignUp} />

            <Route path='/post-detail' component={PostDetail} />
          </Switch>
          <Footer />
        </Route>
        <Route path='/quan-ly' component={ManagerRouter} />
      </Switch>
    </Router>
  );
};

export default Routes;
