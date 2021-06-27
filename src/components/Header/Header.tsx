import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppState } from '../../store';

import './Header.scss';

const Header: React.FC = () => {
	const loggedIn = useSelector((state: AppState) => state.user.loggedIn);
	const userInformation = useSelector(
		(state: AppState) => state.user.userInformation,
	);

	return (
		<div className='container container-header'>
			<header className='header'>
				<Link to='/'>
					{/* <img
            className='logo'
            src='/resources/images/logo_70.png'
            alt='logo'
          /> */}
					<span
						className='logo'
						onClick={() => {
							window.location.href = 'http://localhost:3000/';
						}}
					>
						TimTroVN
					</span>
				</Link>
				<div className='left-header'>
					{loggedIn ? (
						<>
							<Link to='/quan-ly/tai-khoan' className='info-user'>
								<img src='https://phongtro123.com/images/default-user.png' />
								<div>
									<span className='name'>
										Xin chào, <strong>{userInformation.name}</strong>
									</span>
									<span className='bottom'>
										Mã tài khoản:{' '}
										<strong>
											{userInformation._id?.substr(0, 10).toUpperCase()}
										</strong>
										. Số dư: <strong>{userInformation.money} VNĐ</strong>
									</span>
								</div>
							</Link>
							<Link
								to={
									userInformation.active
										? '/quan-ly/quan-ly-tin-dang'
										: '/xac-thuc-tai-khoan'
								}
							>
								<button className='btn btn-red'>Quản lý tài khoản</button>
							</Link>
						</>
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
