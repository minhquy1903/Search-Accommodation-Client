import React from 'react';

import PostHeader from './PostHeader';
import PostMain from './PostMain';
import PostImages from './PostImages';
import PostOverview from './PostOverview';
import PostMap from './PostMap';

const Post: React.FC = () => {
  return (
    <article className='post'>
      <PostHeader />
      <PostMain />
      <PostImages />
      <PostOverview />
      <PostMap />
    </article>
  );
};

export default Post;
