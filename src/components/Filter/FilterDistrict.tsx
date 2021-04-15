import React, { useState, useEffect } from 'react';

import filterUI from '../../api/fiter.ui';

interface IFilterDistrict {
  data: [
    district: {
      province_id: number;
      district_name: string;
      district_id: number;
    },
  ];
}

const FilterDistrict: React.FC = () => {
  const [districts, setDistricts] = useState<IFilterDistrict>();

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
        <option value={0} disabled hidden>
          Tất cả
        </option>
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

export default FilterDistrict;
