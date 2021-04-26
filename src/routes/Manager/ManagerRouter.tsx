import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import SideBar from '../../components/SideBar/SideBar';
import HeaderManager from '../../components/HeaderManager/HeaderManager';

import Account from '../../pages/Manager/Account/Account';
import Contact from '../../pages/Manager/Contact/Contact';
import Deposit from '../../pages/Manager/Deposit/Deposit';
import DepositHistory from '../../pages/Manager/DepositHistory/DepositHistory';
import PaymentHistory from '../../pages/Manager/PaymentHistory/PaymentHistory';
import PostManager from '../../pages/Manager/PostManager/PostManager';
import ServiceFee from '../../pages/Manager/ServiceFee/ServiceFee';

const ManagerRouter: React.FC = () => {
  const { path } = useRouteMatch();
  console.log(`path: ${path}`);
  console.log(`url: ${path}/tai-khoan`);

  return (
    <Router>
      <HeaderManager />
      <div className='manager-container'>
        <SideBar path={path} />
        <Switch>
          <div className='content-container'>
            <Route path={`${path}/tai-khoan`} component={Account} />
            <Route path={`${path}/lien-he`} component={Contact} />
            <Route path={`${path}/nap-tien`} component={Deposit} />
            <Route
              path={`${path}/lich-su-nap-tien`}
              component={DepositHistory}
            />
            <Route
              path={`${path}/lich-su-thanh-toan`}
              component={PaymentHistory}
            />
            <Route path={`${path}/quan-ly-tin-dang`} component={PostManager} />
            <Route path={`${path}/bang-phi-dich-vu`} component={ServiceFee} />
          </div>
        </Switch>
      </div>
    </Router>
  );
};

export default ManagerRouter;
