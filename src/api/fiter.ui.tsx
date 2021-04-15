import axiosClient from './AxiosClient';

const filterUI = {
  getAllProvinces: async () => {
    const url: string = '/filter/province';
    return await axiosClient.get(url);
  },
  getDistrictOfProvince: (id: number) => {
    const url: string = `filter/district/${id}`;
    const data = axiosClient.get(url);
    return data;
  },
  getWardOfDistrict: (id: number) => {
    const url: string = `filter/ward/${id}`;
    const data = axiosClient.get(url);
    return data;
  },
};

export default filterUI;
