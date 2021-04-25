import React, { useState } from 'react';

import ProvinceFilter from './ProvinceFilter';
import DistrictFilter from './DistrictFilter';
import WardFilter from './WardFilter';
import TypeFilter from './TypeFilter';
import PriceRangeFilter from './PriceRangeFilter';
import AreaFilter from './AreaFilter';
import SubmitFilter from './SubmitFilter';

import { IProvince } from './FilterInterface';

import './Filter.scss';

const Filter: React.FC = () => {
  const [province, setProvince] = useState<IProvince>({
    province_id: 0,
    province_name: '',
  });
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
