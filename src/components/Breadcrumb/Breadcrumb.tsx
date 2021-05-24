import React from 'react';

import { ReactComponent as RightChevron } from '../Atoms/Icons/right-chevron.svg';
import { IFilter } from '../../redux/filterSlice';
import './Breadcrumb.scss';

interface Props {
  filterObject: IFilter;
}

const Breadcrumb: React.FC<Props> = ({ filterObject }) => {
  return (
    <div className='breadcrumb'>
      <ul>
        {filterObject.province && <li>Cho thuê phòng trọ</li>}
        {filterObject.province && (
          <li>
            {' '}
            <RightChevron /> {filterObject.province}
          </li>
        )}
        {filterObject.district && (
          <li>
            {' '}
            <RightChevron /> {filterObject.district}
          </li>
        )}
        {filterObject.ward && (
          <li>
            {' '}
            <RightChevron /> {filterObject.ward}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumb;
