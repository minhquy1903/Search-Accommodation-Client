import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

const UserInfo: React.FC = () => {
  const userInformation = useSelector(
    (state: AppState) => state.user.userInformation,
  );

  return (
    <div className='user-info'>
      <Link to='/'>
        <div className='user-avatar'>
          <img
            src='https://static123.com/uploads/images/2018/12/12/boy_1544603222.png'
            alt='avt'
          />
        </div>
        <div className='user-meta'>
          <div className='inner'>
            <div className='user-name'>{userInformation.name}</div>
            <div className='user-phone'>{userInformation.phone}</div>
          </div>
        </div>
      </Link>
      <ul>
        <li>
          <span>Mã thành viên:</span>{' '}
          <span className='bold'>
            {userInformation._id?.substr(0, 10).toUpperCase()}
          </span>
        </li>
        <li>
          <span>Số dư:</span>{' '}
          <span className='bold'>{userInformation.money} đ</span>
        </li>
      </ul>
      <Link to='/quan-ly/nap-tien'>
        <button className='btn btn-nap'>Nạp tiền</button>
      </Link>
      <Link to='/quan-ly/dang-tin'>
        <button className='btn btn-dang'>Đăng tin</button>
      </Link>
    </div>
  );
};

export default UserInfo;
