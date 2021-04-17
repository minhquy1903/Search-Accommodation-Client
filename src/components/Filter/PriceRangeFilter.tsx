import React from 'react';

type FILTER_RANGE = Array<{ price_range_name: string; price_range_id: number }>;

const typeFilter: FILTER_RANGE = [
  { price_range_name: '1 triệu - 2 triệu', price_range_id: 1 },
  { price_range_name: '2 triệu - 3 triệu', price_range_id: 2 },
  { price_range_name: '3 triệu - 5 triệu', price_range_id: 3 },
  { price_range_name: '5 triệu - 7 triệu', price_range_id: 4 },
  { price_range_name: '7 triệu - 10 triệu', price_range_id: 5 },
  { price_range_name: '10 triệu - 15 triệu', price_range_id: 6 },
  { price_range_name: 'Trên 15 triệu', price_range_id: 7 },
];

const PriceRangeFilter: React.FC = () => {
  return (
    <div className='col'>
      <label htmlFor=''>Mực giá</label>

      <select name='type' id='0' defaultValue={0}>
        <option value={0}>Tất cả</option>
        {typeFilter.map((element, i) => (
          <option key={i} value={element.price_range_id}>
            {element.price_range_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceRangeFilter;
