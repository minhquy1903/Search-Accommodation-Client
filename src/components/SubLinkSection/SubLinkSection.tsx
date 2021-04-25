import React from 'react';

import { Link } from 'react-router-dom';

import './SubLinkSection.scss';

const SubLinkSection: React.FC = () => {
  return (
    <section className='sublink-section'>
      <div className='section-header'>
        <span className='title'>Danh mục cho thuê</span>
      </div>
      <ul>
        <li>
          <Link to='/'>Cho thuê phòng trọ</Link>
        </li>
        <li>
          <Link to='/'>Cho thuê phòng trọ</Link>
        </li>
        <li>
          <Link to='/'>Cho thuê phòng trọ</Link>
        </li>
        <li>
          <Link to='/'>Cho thuê phòng trọ</Link>
        </li>
        <li>
          <Link to='/'>Cho thuê phòng trọ</Link>
        </li>
      </ul>
    </section>
  );
};

export default SubLinkSection;
