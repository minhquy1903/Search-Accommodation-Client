import React, { useState, useEffect } from 'react';

import { IProvinceFilter } from './FilterInterface';

import filterUI from '../../api/fiter.ui';

const ProvinceFilter: React.FC = () => {
  const [provinces, setProvinces] = useState<IProvinceFilter>();

  useEffect(() => {
    const getAllProvinces = async () => {
      try {
        const data = await filterUI.getAllProvinces();
        console.log(data.data);

        setProvinces(data);
      } catch (error) {}
    };
    getAllProvinces();
  }, []);

  return (
    <div className='col'>
      <label htmlFor=''>Tỉnh thành</label>
      <select name='province' id='1' defaultValue={0}>
        <option value={0}>Tất cả</option>
        {provinces &&
          provinces.data.map((element, i) => (
            <option key={i} value={element.province_id}>
              {element.province_name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default ProvinceFilter;
