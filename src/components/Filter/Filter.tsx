import React from 'react';

import ProvinceFilter from './ProvinceFilter';
import DistrictFilter from './DistrictFilter';
import WardFilter from './WardFilter';
import TypeFilter from './TypeFilter';
import PriceRangeFilter from './PriceRangeFilter';
import AreaFilter from './AreaFilter';
import SubmitFilter from './SubmitFilter';

// import { IProvince } from './FilterInterface';

import './Filter.scss';

const Filter: React.FC = () => {
  return (
    <div className='filter'>
      <TypeFilter />
      <ProvinceFilter />
      <DistrictFilter />
      <WardFilter />
      <PriceRangeFilter />
      <AreaFilter />
      <SubmitFilter />
    </div>
  );
};

export default Filter;
