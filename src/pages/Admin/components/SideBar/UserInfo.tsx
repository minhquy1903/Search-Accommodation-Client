import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../../../store";

const UserInfo: React.FC = () => {
  const userInformation = useSelector(
    (state: AppState) => state.user.userInformation,
  );

  if (!userInformation) return null;

  return (
    <div className="user-info">
      <div className="user-avatar">
        <img
          src="https://static123.com/uploads/images/2018/12/12/boy_1544603222.png"
          alt="avt"
        />
      </div>

      <div className="user-meta">
        <div className="inner">
          <div className="user-name">{userInformation.name}</div>
          <div className="user-phone">{userInformation.phone}</div>
        </div>
      </div>
      <ul>
        <li>
          <span>Mã thành viên:</span>{" "}
          <span className="bold">
            {userInformation._id?.substr(0, 10).toUpperCase()}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
