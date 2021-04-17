import React, { useState, useEffect } from 'react';

import filterUI from '../../api/fiter.ui';

interface IDistrictFilter {
  data: [
    district: {
      ward_id: number;
      ward_name: string;
      district_id: number;
    },
  ];
}

const WardFilter: React.FC = () => {
  const [wards, setWards] = useState<IDistrictFilter>();

  useEffect(() => {
    const getWardOfDistrict = async (id: number) => {
      try {
        const data = await filterUI.getWardOfDistrict(id);

        setWards(data);
      } catch (error) {}
    };
    getWardOfDistrict(762);
  }, []);

  return (
    <div className='col'>
      <label htmlFor=''>Phường xã</label>

      <select name='district' id='3' defaultValue={0}>
        <option value={0}>Tất cả</option>
        {wards &&
          wards.data.map((element, i) => (
            <option key={i} value={element.ward_id}>
              {element.ward_name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default WardFilter;
