import React, { useState, useEffect } from 'react';

import SelectionField from './SelectionField';
import SubmitFilter from './SubmitFilter';
import { IOptionData } from './FilterInterface';
import filterUI from '../../api/fiter.ui';
import { areaOptions, typeOptions, priceOptions } from '../../constants/filter';

import './Filter.scss';

const Filter: React.FC = () => {
  const [provinces, setProvinces] = useState<IOptionData>();
  const [districts, setDistricts] = useState<IOptionData>();
  const [wards, setWards] = useState<IOptionData>();
  // const [province, setProvince] = useState<string | null>();
  // const [district, setDistrict] = useState<string | null>();
  // const [ward, setWard] = useState<string | null>();

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

  const filterSubmit = (e: any) => {
    e.preventDefault();

    console.log(e.target);
  };

  const getDistrictOfProvince = async (id: number) => {
    try {
      const data = await filterUI.getDistrictOfProvince(id);
      setDistricts(data);
    } catch (error) {}
  };

  const getWardOfDistrict = async (id: number) => {
    try {
      const data = await filterUI.getWardOfDistrict(id);

      setWards(data);
    } catch (error) {}
  };

  const handleChange = (e: any) => {
    const name: string = e.target.name;

    const value = e.target.value;
    if (name === 'province') {
      console.log(name);
      getDistrictOfProvince(value);
    } else if (name === 'district') {
      getWardOfDistrict(value);
    }
  };

  return (
    <form onSubmit={filterSubmit} className='filter'>
      <SelectionField
        label='Loại phòng'
        name='type'
        optionData={typeOptions}
        handleChange={handleChange}
      />
      <SelectionField
        handleChange={handleChange}
        label='Tỉnh thành'
        name='province'
        optionData={provinces!}
      />
      <SelectionField
        handleChange={handleChange}
        label='Quận huyện'
        name='district'
        optionData={districts!}
      />
      <SelectionField
        handleChange={handleChange}
        label='Phường xã'
        name='ward'
        optionData={wards!}
      />

      <SelectionField
        label='Khoảng giá'
        name='price'
        optionData={priceOptions}
        handleChange={handleChange}
      />
      <SelectionField
        label='Diện tích'
        name='area'
        optionData={areaOptions}
        handleChange={handleChange}
      />
      <SubmitFilter />
    </form>
  );
};

export default Filter;
