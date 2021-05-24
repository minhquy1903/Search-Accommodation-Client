import React from 'react';

interface Props {
  description: Array<string>;
}

const PostMain: React.FC<Props> = ({ description }) => {
  return (
    <div className='section main-post'>
      <div className='title'>Thông tin mô tả</div>
      <div className='content'>
        {description.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default PostMain;
