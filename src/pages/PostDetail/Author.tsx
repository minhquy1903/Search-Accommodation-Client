import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import userAPI from "../../api/userAPI";

interface Props {
  userInfo: any;
}

const Author: React.FC<Props> = ({ userInfo }) => {
  console.log(userInfo);
  if (!userInfo) return null;
  return (
    <div className="author">
      <figure className="avatar">
        <img src="https://phongtro123.com/images/default-user.png" alt="avt" />
      </figure>
      <span className="name">{userInfo.name}</span>
      <div className="phone btn">{userInfo.phone}</div>
      <Link className="zalo btn" to="/">
        Nhắn Zalo
      </Link>
      <span className="save-post btn">Yêu thích</span>
    </div>
  );
};

export default Author;
