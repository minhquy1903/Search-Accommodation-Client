import React from 'react';

import { Link } from 'react-router-dom';
import { IPost } from '../../interfaces/post';

import './PostItem.scss';

interface Props {
  data: IPost;
}

const PostItem: React.FC<Props> = ({ data }) => {
  return (
    <div className={`${data.typePost === 1 ? 'hot-post' : ''} post-item`}>
      <figure>
        <Link to='/post-detail'>
          {data.accommodation.images[0] !== null ? (
            <img
              src={data.accommodation.images[0].src}
              alt={data.accommodation.images[0].alt}
            />
          ) : null}
        </Link>
      </figure>
      <div className='post-meta'>
        <h3 className='post-title'>
          <Link to='/post-detail'>{data.accommodation.title}</Link>
        </h3>
        <span className='room-price mgb-10'>
          {data.accommodation.retail} triệu/tháng
        </span>
        <span className='room-area mgb-10'>{data.accommodation.area}m²</span>
        <span className='room-location mgb-10'>
          {data.accommodation.address.district},{' '}
          {data.accommodation.address.province}
        </span>
        <time className='post-time mgb-10'>Cập nhật: 2h trước</time>
        {data.typePost === 1 ? (
          <span className='hot-post-stick'>
            <img src='/resources/images/hot-post.svg' alt='hot-post' />
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default PostItem;
