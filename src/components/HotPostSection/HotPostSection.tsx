import React from 'react';

import PostItem from '../PostItem/PostItem';

import './HotPostSection.scss';

const HotPostSection: React.FC = () => {
  return (
    <section className='hot-post-section'>
      <div className='section-header'>
        <span className='section-title'>Tin nổi bật</span>
      </div>
      <div className='post-list'>
        <PostItem type={'vip1'} />
        <PostItem type={'vip1'} />
        <PostItem type={'vip1'} />
        <PostItem type={'vip1'} />
        <PostItem type={'vip1'} />
        <PostItem type={'vip1'} />
        <PostItem type={'vip1'} />
        <PostItem type={'vip1'} />
      </div>
    </section>
  );
};

export default HotPostSection;
