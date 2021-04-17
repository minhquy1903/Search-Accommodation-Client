import React from 'react';

import { Link } from 'react-router-dom';

import './Pagination.scss';

const pages: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Pagination: React.FC = () => {
  return (
    <div className='pagination-container'>
      <ul className='pagination'>
        <li className='page-item'>
          <Link to={'/page'}>«</Link>
        </li>
        {pages.map((element, i) => (
          <li className='page-item' key={i}>
            <Link
              to={'/page'}
              className={element === 1 ? 'active' : ''}
              key={i}>
              {element}
            </Link>
          </li>
        ))}
        <li className='page-item'>
          <Link to={'/page'}>»</Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
