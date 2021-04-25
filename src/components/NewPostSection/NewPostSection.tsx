import React from 'react';

import NewPostItem from './NewPostItem';

import './NewPostSection.scss';

const NewPostSection: React.FC = () => {
  return (
    <section className='new-post-section'>
      <div className='section-header'>
        <span className='title'>Tin mới đăng</span>
      </div>
      <div className='post-list'>
        <NewPostItem />
        <NewPostItem />
        <NewPostItem />
        <NewPostItem />
        <NewPostItem />
        <NewPostItem />
        <NewPostItem />
        <NewPostItem />
      </div>
    </section>
  );
};

export default NewPostSection;
