import React from 'react';

import PostItem from '../PostItem/PostItem';

import './HotPostSection.scss';
import { IPost } from '../../interfaces/post';

interface Props {
  hotPosts: Array<IPost>;
}

const HotPostSection: React.FC<Props> = ({ hotPosts }) => {
  return (
    <section className='hot-post-section'>
      <div className='section-header'>
        <span className='section-title'>Tin nổi bật</span>
      </div>
      <div className='post-list'>
        {hotPosts &&
          hotPosts.map((post, i) => <PostItem data={post} key={i} />)}
      </div>
    </section>
  );
};

export default HotPostSection;
