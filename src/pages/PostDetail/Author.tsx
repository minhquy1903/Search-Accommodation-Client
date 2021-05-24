import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import userAPI from '../../api/userAPI';

interface Props {
  _id: string;
}

const Author: React.FC<Props> = ({ _id }) => {
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const getUserInfo = async (_id: string) => {
      try {
        const user = await userAPI.getUserInfomation(_id);
        console.log(user);

        if (user.data.result) {
          setUserInfo(user.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo(_id);
  }, [_id]);
  console.log(userInfo);
  if (!userInfo) return null;
  return (
    <div className='author'>
      <figure className='avatar'>
        <img src='/resources/images/jisoo.jpg' alt='hinh-jisoo' />
      </figure>
      <span className='name'>{userInfo.name}</span>
      <div className='phone btn'>{userInfo.phone}</div>
      <Link className='zalo btn' to='/'>
        Nhắn Zalo
      </Link>
      <span className='save-post btn'>Yêu thích</span>
    </div>
  );
};

export default Author;
