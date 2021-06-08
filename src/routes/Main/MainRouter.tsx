import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import PhoneConfirm from '../../pages/PhoneConfirm/PhoneConfirm';
import PostDetail from '../../pages/PostDetail/PostDetail';
import SignUp from '../../pages/SignUp/SignUp';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const MainRouter: React.FC = () => {
  return (
    <>
      <Header />

      <NavBar />

      <Route path='/' component={Home} exact />

      <Route path='/dang-nhap' component={Login} />

      <Route path='/xac-thuc-tai-khoan' component={PhoneConfirm} />

      <Route path='/dang-ky' component={SignUp} />

      <Route path='/thong-tin-chi-tiet/:id' component={PostDetail} />

      <Footer />
    </>
  );
};

export default MainRouter;
