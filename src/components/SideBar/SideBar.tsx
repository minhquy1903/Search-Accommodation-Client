import React from 'react';

import UserInfo from './UserInfo';
import NavSideBar from './NavSideBar';

import './SideBar.scss';

const SideBar: React.FC = () => {
  return (
    <nav className='sidebar'>
      <UserInfo />
      <NavSideBar />
    </nav>
  );
};

export default SideBar;
