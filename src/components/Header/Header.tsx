import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import './Header.scss';

const Header: React.FC = () => {
  const loggedIn = useSelector((state: AppState) => state.user.loggedIn);

  return (
    <div className='container container-header'>
      <header className='header'>
        <Link to='/'>
          {/* <img
            className='logo'
            src='/resources/images/logo_70.png'
            alt='logo'
          /> */}
          <span className='logo'>TimTroVN</span>
        </Link>
        <div className='left-header'>
          <div className='slogan'>Website tìm kiếm phòng trọ số 1 Việt Nam</div>
          {loggedIn ? (
            <Link to='/quan-ly'>
              <button className='btn btn-red'>Quản lý tài khoản</button>
            </Link>
          ) : (
            <>
              <Link to='/dang-ky'>
                <button className='btn btn-primary'>Đăng ký</button>
              </Link>
              <Link to='/dang-nhap'>
                <button className='btn btn-primary'>Đăng nhập</button>
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
