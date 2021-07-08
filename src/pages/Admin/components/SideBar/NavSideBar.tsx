import React from "react";

import NavItem from "./NavItem";

import { ReactComponent as PostManagerIcon } from "../../../../components/Atoms//Icons/post-manager.svg";

import { ReactComponent as ExitIcon } from "../../../../components/Atoms//Icons/exit.svg";

interface Props {
	path: string;
}

const NavSideBar: React.FC<Props> = ({ path }) => {
	return (
		<ul className="nav-sidebar">
			<NavItem name="Bảng điều khiển" href={`${path}/bang-dieu-khien`}>
				<PostManagerIcon />
			</NavItem>
			<NavItem name="Xác thực tin đăng" href={`${path}/xac-thuc-tin`}>
				<PostManagerIcon />
			</NavItem>
			<NavItem
				name="Quản lý tài khoản"
				href={`${path}/quan-ly-tai-khoan`}>
				<PostManagerIcon />
			</NavItem>

			<NavItem name="Thoát" href="/">
				<ExitIcon />
			</NavItem>
		</ul>
	);
};

export default NavSideBar;
