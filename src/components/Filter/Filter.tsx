import React from 'react';

import FilterProvince from './FilterProvince';
import FilterDistrict from './FilterDistrict';
import FilterWard from './FilterWard';

import './Filter.scss';

const Filter: React.FC = () => {
  return (
    <div className='filter'>
      <FilterProvince />
      <FilterDistrict />
      <FilterWard />
    </div>
  );
};

export default Filter;
