import React from 'react';

import NavItem from './NavItem';

import { ReactComponent as PostManagerIcon } from '../Atoms/Icons/post-manager.svg';
import { ReactComponent as ClockIcon } from '../Atoms/Icons/clock.svg';
import { ReactComponent as CalenderIcon } from '../Atoms/Icons/calendar.svg';
import { ReactComponent as ContactIcon } from '../Atoms/Icons/contact.svg';
import { ReactComponent as DepositIcon } from '../Atoms/Icons/deposit.svg';
import { ReactComponent as EditIcon } from '../Atoms/Icons/edit.svg';
import { ReactComponent as ExitIcon } from '../Atoms/Icons/exit.svg';

const NavSideBar: React.FC = () => {
  return (
    <ul className='nav-sidebar'>
      <NavItem name='Quản lý tin đăng' href='/tin-dang' active={true}>
        <PostManagerIcon />
      </NavItem>
      <NavItem name='Thông tin cá nhân' href='/thong-tin-ca-nhan'>
        <EditIcon />
      </NavItem>
      <NavItem name='Nạp tiền vào tài khoản' href='/nap-tien'>
        <DepositIcon />
      </NavItem>
      <NavItem name='Lịch sử nạp tiền' href='/lich-su-nap-tien'>
        <ClockIcon />
      </NavItem>
      <NavItem name='Lịch sử thanh toán' href='/lich-su-thanh-toan'>
        <ClockIcon />
      </NavItem>
      <NavItem name='Bảng giá dịch vụ' href='/bang-gia'>
        <CalenderIcon />
      </NavItem>
      <NavItem name='Liên hệ' href='/lien-he'>
        <ContactIcon />
      </NavItem>
      <NavItem name='Thoát' href='/tin-dang'>
        <ExitIcon />
      </NavItem>
    </ul>
  );
};

export default NavSideBar;
