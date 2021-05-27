import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar: React.FC = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <ul className='nav-menu'>
          <li className='is-active'>Trang chủ</li>
          <li>Phòng trọ</li>
          <li>
            <Link to='/quan-ly'>Căn hộ</Link>
          </li>
          <li>Mặt bằng</li>
          <li>Hưỡng Dẫn</li>
          <li>Nạp tiền</li>
          <li>Bảng giá</li>
          <li>Liên hệ</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
