import { IOptionData } from '../components/Filter/FilterInterface';

const typeOptions: IOptionData = {
  data: [
    { value: 'Phòng trọ, nhà trọ', id: 1 },
    { value: 'Nhà nguyên căn', id: 2 },
    { value: 'Căn hộ', id: 3 },
    { value: 'Mặt bằng', id: 4 },
    { value: 'Căn hộ dịch vụ', id: 5 },
  ],
};

const priceOptions: IOptionData = {
  data: [
    { value: '1 triệu - 2 triệu', id: 1 },
    { value: '2 triệu - 3 triệu', id: 2 },
    { value: '3 triệu - 5 triệu', id: 3 },
    { value: '5 triệu - 7 triệu', id: 4 },
    { value: '7 triệu - 10 triệu', id: 5 },
    { value: '10 triệu - 15 triệu', id: 6 },
    { value: 'Trên 15 triệu', id: 7 },
  ],
};

const areaOptions: IOptionData = {
  data: [
    { value: 'Dưới 20m2', id: 1 },
    { value: '20m2 - 30m2', id: 2 },
    { value: '30m2 - 50m2', id: 3 },
    { value: '50m2 - 60m2', id: 4 },
    { value: '60m2 - 70m2', id: 5 },
    { value: '70m2 - 80m2', id: 6 },
    { value: '80m2 - 90m2', id: 7 },
    { value: '90m2 - 100m2', id: 8 },
    { value: 'Trên 100m2', id: 9 },
  ],
};

export { typeOptions, priceOptions, areaOptions };
