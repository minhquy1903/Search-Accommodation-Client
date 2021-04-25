import React, { useState, useEffect } from 'react';

import { IDistrictFilter } from './FilterInterface';

import filterUI from '../../api/fiter.ui';

const DistrictFilter: React.FC = () => {
  const [districts, setDistricts] = useState<IDistrictFilter>();

  useEffect(() => {
    const getDistrictOfProvince = async (id: number) => {
      try {
        const data = await filterUI.getDistrictOfProvince(id);

        setDistricts(data);
      } catch (error) {}
    };
    getDistrictOfProvince(79);
  }, []);

  return (
    <div className='col'>
      <label htmlFor=''>Quận huyện</label>

      <select name='district' id='2' defaultValue={0}>
        <option value={0}>Tất cả</option>
        {districts &&
          districts.data.map((element, i) => (
            <option key={i} value={element.district_id}>
              {element.district_name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default DistrictFilter;
