import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderManager.scss';

const HeaderManager: React.FC = () => {
  return (
    <header className='header-manager'>
      <Link className='header-brand' to='/'>
        Timtrovn.com
      </Link>
    </header>
  );
};

export default HeaderManager;
