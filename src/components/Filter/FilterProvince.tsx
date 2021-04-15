import React, { useState, useEffect } from 'react';

import filterUI from '../../api/fiter.ui';

interface IFilterProvince {
  data: [
    provinces: {
      province_id: number;
      province_name: string;
    },
  ];
}

const FilterProvince: React.FC = () => {
  const [provinces, setProvinces] = useState<IFilterProvince>();

  useEffect(() => {
    const getAllProvinces = async () => {
      try {
        const data = await filterUI.getAllProvinces();
        setProvinces(data);
      } catch (error) {}
    };
    getAllProvinces();
  }, []);

  return (
    <div>
      <div className='col'>
        <label htmlFor=''>Tỉnh thành</label>

        <select name='province' id='1' defaultValue={0}>
          <option value={0} disabled hidden>
            Tất cả
          </option>
          {provinces &&
            provinces.data.map((element, i) => (
              <option key={i} value={element.province_id}>
                {element.province_name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default FilterProvince;
