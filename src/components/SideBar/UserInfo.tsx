import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  path: string;
}

const UserInfo: React.FC<Props> = ({ path }) => {
  return (
    <div className="user-info">
      <Link to="/">
        <div className="user-avatar">
          <img
            src="https://static123.com/uploads/images/2018/12/12/boy_1544603222.png"
            alt="avt"
          />
        </div>
        <div className="user-meta">
          <div className="inner">
            <div className="user-name">Vo Minh Quy</div>
            <div className="user-phone">0965437825</div>
          </div>
        </div>
      </Link>
      <ul>
        <li>
          <span>Mã thành viên:</span> <span className="bold"> 105363</span>
        </li>
        <li>
          <span>Số dư:</span> <span className="bold"> 10.000 đ</span>
        </li>
      </ul>
      <Link to="/">
        <button className="btn btn-nap">Nạp tiền</button>
      </Link>
      <Link to={`${path}/dang-bai`}>
        <button className="btn btn-dang">Đăng tin</button>
      </Link>
    </div>
  );
};

export default UserInfo;
