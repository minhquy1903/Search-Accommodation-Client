import React from 'react';

import { Link } from 'react-router-dom';

import './PostItem.scss';

interface Props {
  type?: string;
}

const PostItem: React.FC<Props> = ({ type }) => {
  return (
    <div className={`${typeof type === 'string' ? type : ''} post-item`}>
      <figure>
        <Link to='/post-detail'>
          <img
            src='https://static123.com/phongtro123/uploads/images/thumbs/450x300/fit/2020/08/07/img-20200807-163316_1596793218.jpg'
            alt='hinh-phong-tro'
          />
        </Link>
      </figure>
      <div className='post-meta'>
        <h3 className='post-title'>
          <Link to='/post-detail'>
            PHÒNG TRỌ CAO CẤP MỚI XÂY CÓ GÁC 30M2 CÓ MÁY LẠNH + CỬA SỔ + BẾP +
            BẢO VỆ 24/24
          </Link>
        </h3>
        <span className='room-price mgb-10'>5 triệu/tháng</span>
        <span className='room-area mgb-10'>25m²</span>
        <span className='room-location mgb-10'>Tân Bình, Hồ Chí Minh</span>
        <time className='post-time mgb-10'>Cập nhật: 2h trước</time>
        <span className='hot-post-stick'>
          <img src='/resources/images/hot-post.svg' alt='hot-post' />
        </span>
      </div>
    </div>
  );
};

export default PostItem;
