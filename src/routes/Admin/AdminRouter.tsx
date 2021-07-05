import React from 'react';

import { Route, useRouteMatch, useHistory } from 'react-router-dom';

import SideBar from '../../pages/Admin/components/SideBar/SideBar';
import HeaderManager from '../../components/HeaderManager/HeaderManager';

import ConfirmedPost from '../../pages/Admin/ConfirmedPost';
import DashBoard from '../../pages/Admin/DashBoard';
import ManageOrder from '../../pages/Admin/ManageOrder';

const ManagerRouter: React.FC = () => {
	const { path } = useRouteMatch();
	const history = useHistory();
	React.useEffect(() => {
		const token = localStorage.getItem('accessToken');

		if (!token) history.replace('/');
	}, []);

	return (
		<>
			<HeaderManager />
			<div className='manager-container'>
				<SideBar path={path} />

				<div className='content-container'>
					<Route path={`${path}/quan-ly-tai-khoan`} component={ManageOrder} />
					<Route path={`${path}/bang-dieu-khien`} component={DashBoard} />
					<Route path={`${path}/xac-thuc-tin`} component={ConfirmedPost} />
				</div>
			</div>
		</>
	);
};

export default ManagerRouter;
