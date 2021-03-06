import React from "react";

import { Route, useRouteMatch, useHistory } from "react-router-dom";

import SideBar from "../../components/SideBar/SideBar";
import HeaderManager from "../../components/HeaderManager/HeaderManager";

import Account from "../../pages/Manager/Account/Account";
import Contact from "../../pages/Manager/Contact/Contact";
import Deposit from "../../pages/Manager/Deposit/Deposit";
import DepositHistory from "../../pages/Manager/DepositHistory/DepositHistory";
import PaymentHistory from "../../pages/Manager/PaymentHistory/PaymentHistory";
import PostManager from "../../pages/Manager/PostManager/PostManager";
import ServiceFee from "../../pages/Manager/ServiceFee/ServiceFee";
import CreatePost from "../../pages/Manager/CreatePost/CreatePost";
import UpdatePost from "../../pages/Manager/UpdatePost/UpdatePost";
import ChangePhone from "../../pages/Manager/ChangePhone/ChangePhone";

const ManagerRouter: React.FC = () => {
	const { path } = useRouteMatch();
	const history = useHistory();
	React.useEffect(() => {
		const token = localStorage.getItem("accessToken");

		if (!token) history.replace("/");
	}, []);

	return (
		<>
			<HeaderManager />
			<div className="manager-container">
				<SideBar path={path} />

				<div className="content-container">
					<Route path={`${path}/dang-bai`} component={CreatePost} />
					<Route path={`${path}/sua-bai/:id`}>
						<UpdatePost />
					</Route>
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
					<Route
						path={`${path}/quan-ly-tin-dang`}
						component={PostManager}
					/>
					<Route path={`${path}/bang-gia`} component={ServiceFee} />
					<Route path={`${path}/doi-sdt`} component={ChangePhone} />
				</div>
			</div>
		</>
	);
};

export default ManagerRouter;
