import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className='container container-header'>
      <header className='header'>
        <Link to='/'>
          <img
            className='logo'
            src='/resources/images/logo_70.png'
            alt='logo'
          />
        </Link>
        <div className='left-header'>
          <div className='slogan'>Website tìm kiếm phòng trọ số 1 Việt Nam</div>
          <Link to='/sign-up'>
            <button className='btn btn-primary'>Đăng ký</button>
          </Link>
          <Link to='/login'>
            <button className='btn btn-primary'>Đăng nhập</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
