import React from 'react';

import './PageHeader.scss';

interface Props {
  heading?: string;
  description?: string;
}

const PageHeader: React.FC<Props> = ({ heading, description }) => {
  return (
    <div className='page-header'>
      <h1 className='page-heading'>{heading}</h1>
      <p className='description'>{description}</p>
    </div>
  );
};

export default PageHeader;
