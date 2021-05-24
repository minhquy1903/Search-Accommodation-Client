import { configureStore } from '@reduxjs/toolkit';

import userSlice from './redux/userSlice';
import filterSlice from './redux/filterSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    filter: filterSlice,
  },
});
export type AppState = ReturnType<typeof store.getState>;

export default store;
