import React from 'react';

import { IOptionData } from './FilterInterface';

interface Props {
  handleChange?: (e: any) => void;

  label: string;
  name: string;
  optionData: IOptionData;
}

const SelectionField: React.FC<Props> = ({
  handleChange,

  optionData,
  label,
  name,
}) => {
  return (
    <div className='col'>
      <label htmlFor={name}>{label}</label>
      <select name={name} defaultValue={0} onChange={(e) => handleChange!(e)}>
        <option value={0}>Tất cả</option>
        {optionData &&
          optionData.data!.map((element, i) => (
            <option key={i} value={element.id}>
              {element.value}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectionField;
