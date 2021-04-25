import React from 'react';

import { Link } from 'react-router-dom';

const NewPostItem: React.FC = () => {
  return (
    <div className='item-container'>
      <Link to='/' className='item'>
        <figure>
          <img
            src='https://static123.com/phongtro123/uploads/images/thumbs/450x300/fit/2021/04/21/04bf8fc2-511b-4b2f-be94-0f554138c00e_1618938159.jpg'
            alt='hinh-phong'
          />
        </figure>
        <div className='post-meta'>
          <h4 className='post-title'>
            CĂN HỘ GIÁ RẺ-ĐẸP- AN NINH-QUẬN6-ĐƯỜNG AN…
          </h4>
          <div>
            <span className='room-price'>5 triệu/tháng</span>
            <span className='post-time'>3 giờ trước</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewPostItem;
