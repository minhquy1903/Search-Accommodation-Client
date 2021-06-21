import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFilter {
  type?: number | null;
  province?: string | null;
  district?: string | null;
  ward?: string | null;
  retail?: number | null;
  area?: number | null;
}

const initialState: IFilter = {
  type: null,
  province: null,
  district: null,
  ward: null,
  retail: null,
  area: null,
};

const filter = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    saveFilter: (state: IFilter, action: PayloadAction<IFilter>) => {
      return (state = { ...action.payload });
    },
  },
});

const { reducer, actions } = filter;

export const { saveFilter } = actions;

export default reducer;
