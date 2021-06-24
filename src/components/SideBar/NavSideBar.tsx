import React from "react";

import NavItem from "./NavItem";

import { ReactComponent as PostManagerIcon } from "../Atoms/Icons/post-manager.svg";
import { ReactComponent as ClockIcon } from "../Atoms/Icons/clock.svg";
import { ReactComponent as CalenderIcon } from "../Atoms/Icons/calendar.svg";
import { ReactComponent as ContactIcon } from "../Atoms/Icons/contact.svg";
import { ReactComponent as DepositIcon } from "../Atoms/Icons/deposit.svg";
import { ReactComponent as EditIcon } from "../Atoms/Icons/edit.svg";
import { ReactComponent as ExitIcon } from "../Atoms/Icons/exit.svg";

interface Props {
  path: string;
}

const NavSideBar: React.FC<Props> = ({ path }) => {
  return (
    <ul className="nav-sidebar">
      <NavItem name="Quản lý tin đăng" href={`${path}/quan-ly-tin-dang`}>
        <PostManagerIcon />
      </NavItem>
      <NavItem name="Thông tin cá nhân" href={`${path}/tai-khoan`}>
        <EditIcon />
      </NavItem>
      <NavItem name="Nạp tiền vào tài khoản" href={`${path}/nap-tien`}>
        <DepositIcon />
      </NavItem>
      <NavItem name="Lịch sử nạp tiền" href={`${path}/lich-su-nap-tien`}>
        <ClockIcon />
      </NavItem>
      <NavItem name="Lịch sử thanh toán" href={`${path}/lich-su-thanh-toan`}>
        <ClockIcon />
      </NavItem>
      <NavItem name="Bảng giá dịch vụ" href={`${path}/bang-gia`}>
        <CalenderIcon />
      </NavItem>
      <NavItem name="Liên hệ" href={`${path}/lien-he`}>
        <ContactIcon />
      </NavItem>
      <NavItem name="Thoát" href="/">
        <span></span>
        <ExitIcon />
      </NavItem>
    </ul>
  );
};

export default NavSideBar;
