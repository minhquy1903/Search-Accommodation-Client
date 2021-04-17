import React from 'react';

type FILTER_AREA = Array<{ area_name: string; area_id: number }>;

const typeFilter: FILTER_AREA = [
  { area_name: 'Dưới 20m2', area_id: 1 },
  { area_name: '20m2 - 30m2', area_id: 2 },
  { area_name: '30m2 - 50m2', area_id: 3 },
  { area_name: '50m2 - 60m2', area_id: 4 },
  { area_name: '60m2 - 70m2', area_id: 5 },
  { area_name: '70m2 - 80m2', area_id: 6 },
  { area_name: '80m2 - 90m2', area_id: 7 },
  { area_name: '900m2 - 100m2', area_id: 8 },
  { area_name: 'Trên 100m2', area_id: 9 },
];

const AeraFilter: React.FC = () => {
  return (
    <div className='col'>
      <label htmlFor=''>Diện tích</label>

      <select name='type' id='0' defaultValue={0}>
        <option value={0}>Tất cả</option>
        {typeFilter.map((element, i) => (
          <option key={i} value={element.area_id}>
            {element.area_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AeraFilter;
