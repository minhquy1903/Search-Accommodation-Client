import React from 'react';

type FILTER_TYPE = Array<{ type_name: string; type_id: number }>;

const typeFilter: FILTER_TYPE = [
  { type_name: 'Phòng trọ, nhà trọ', type_id: 1 },
  { type_name: 'Nhà nguyên căn', type_id: 2 },
  { type_name: 'Căn hộ', type_id: 3 },
  { type_name: 'Mặt bằng', type_id: 4 },
  { type_name: 'Căn hộ dịch vụ', type_id: 5 },
];

const TypeFilter: React.FC = () => {
  return (
    <div className='col'>
      <label htmlFor=''>Loại tin</label>

      <select name='type' id='0' defaultValue={0}>
        <option value={0}>Tất cả</option>
        {typeFilter.map((element, i) => (
          <option key={i} value={element.type_id}>
            {element.type_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
