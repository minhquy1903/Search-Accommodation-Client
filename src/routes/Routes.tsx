import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Account from '../pages/Account/Account';
import Home from '../pages/Home/Home';
import PostManagement from '../pages/PostManagement/PostManagement';
import PayIn from '../pages/PayIn/PayIn';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <Switch>
        <Route path='/' component={Home} exact />

        <Route path='/login' component={Login} />

        <Route path='/sign-up' component={SignUp} />

        <Route path='/account' component={Account} />

        <Route path='/post-management' component={PostManagement} />

        <Route path='/pay-in' component={PayIn} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
