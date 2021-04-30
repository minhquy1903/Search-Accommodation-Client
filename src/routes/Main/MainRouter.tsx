import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import PhoneConfirm from '../../pages/PhoneConfirm/PhoneConfirm';
import PostDetail from '../../pages/PostDetail/PostDetail';
import SignUp from '../../pages/SignUp/SignUp';

const MainRouter: React.FC = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <Switch>
        <Route path='/' component={Home} exact />

        <Route path='/xac-thuc-tai-khoan' component={PhoneConfirm} />

        <Route path='/dang-nhap' component={Login} />

        <Route path='/dang-ky' component={SignUp} />

        <Route path='/post-detail' component={PostDetail} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default MainRouter;
