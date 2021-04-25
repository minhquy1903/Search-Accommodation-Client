import React from 'react';

import Post from './Post/Post';
import Author from './Author';
import SubLinkSection from '../../components/SubLinkSection/SubLinkSection';
import NewPostSection from '../../components/NewPostSection/NewPostSection';

import './PostDetail.scss';

const PostDetail: React.FC = () => {
  return (
    <main id='main'>
      <div className='container'>
        <div className='container-page'>
          <div className='left-col'>
            <Post />
          </div>
          <div className='aside'>
            <Author />
            <SubLinkSection />
            <SubLinkSection />
            <NewPostSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostDetail;
