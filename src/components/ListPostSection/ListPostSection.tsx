import React from 'react';

import PostItem from '../PostItem/PostItem';

import Pagination from '../Pagination/Pagination';

import './ListPostSection.scss';

const ListPostSection: React.FC = () => {
  return (
    <section className='list-post-section'>
      <div className='section-header'>
        <span className='section-title'>Danh sách tin đăng</span>
      </div>
      <div className='post-list'>
        <PostItem type='vip2' />
        <PostItem type='vip2' />
        <PostItem type='vip2' />
        <PostItem type='vip2' />
        <PostItem type='vip2' />
        <PostItem type='vip2' />
        <PostItem type='vip2' />
      </div>
      <Pagination />
    </section>
  );
};

export default ListPostSection;
