import React from 'react';

import { Link } from 'react-router-dom';

const Author: React.FC = () => {
  return (
    <div className='author'>
      <figure className='avatar'>
        <img src='/resources/images/jisoo.jpg' alt='' />
      </figure>
      <span className='name'>Jisoo BlackPink</span>
      <div className='phone btn'>0965437825</div>
      <Link className='zalo btn' to='/'>
        Nhắn Zalo
      </Link>
      <span className='save-post btn'>Yêu thích</span>
    </div>
  );
};

export default Author;
