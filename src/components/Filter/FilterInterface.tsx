interface IProvinceFilter {
  data: [
    provinces: {
      province_id: number;
      province_name: string;
    },
  ];
}

interface IDistrictFilter {
  data: [
    district: {
      province_id: number;
      district_name: string;
      district_id: number;
    },
  ];
}

interface IWardFilter {
  data: [
    district: {
      ward_id: number;
      ward_name: string;
      district_id: number;
    },
  ];
}

interface IProvince {
  province_id: number;
  province_name: string;
}

interface IDistrict {
  province_id: number;
  district_id: number;
  district_name: string;
}

interface IWard {
  district_id: number;
  ward_id: number;
  ward_name: string;
}

export type {
  IWardFilter,
  IProvinceFilter,
  IDistrictFilter,
  IProvince,
  IDistrict,
  IWard,
};
