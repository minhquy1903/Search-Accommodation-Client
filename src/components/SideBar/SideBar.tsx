import React from 'react';

import UserInfo from './UserInfo';
import NavSideBar from './NavSideBar';

import './SideBar.scss';

interface Props {
  path: string;
}

const SideBar: React.FC<Props> = ({ path }) => {
  return (
    <nav className='sidebar'>
      <UserInfo />
      <NavSideBar path={path} />
    </nav>
  );
};

export default SideBar;
