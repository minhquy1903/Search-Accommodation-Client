import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilter {
  type: number | null;
  province: number | null;
  district: number | null;
  ward: number | null;
  priceRange: number | null;
  area: number | null;
}

const initialState: IFilter = {
  type: null,
  province: null,
  district: null,
  ward: null,
  priceRange: null,
  area: null,
};

const filter = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    submit: (state: IFilter, action: PayloadAction<any>) => {},
    addProvince: (state: IFilter, action: PayloadAction<number>) => {},
    addDistrict: (state: IFilter, action: PayloadAction<number>) => {},
    addWard: (state: IFilter, action: PayloadAction<number>) => {},
    addPriceRange: (state: IFilter, action: PayloadAction<number>) => {},
    addArea: (state: IFilter, action: PayloadAction<number>) => {},
  },
});

const { reducer, actions } = filter;

export const { submit } = actions;

export default reducer;
