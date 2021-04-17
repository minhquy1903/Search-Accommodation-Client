import React from 'react';

import PostItem from '../PostItem/PostItem';
import Pagination from '../Pagination/Pagination';

import './HotPostSection.scss';

const HotPostSection: React.FC = () => {
  return (
    <section className='hot-post-section'>
      <div className='section-header'>
        <span className='section-title'>Tin nổi bật</span>
      </div>
      <div className='post-list'>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
      <Pagination />
    </section>
  );
};

export default HotPostSection;
