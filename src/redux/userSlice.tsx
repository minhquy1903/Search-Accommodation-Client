import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from '../interfaces/user';

const initState: IUser = {
  userInformation: {
    _id: null,
    name: '',
    phone: '',
    email: '',
    money: 0,
    type: 1,
    active: false,
  },
  loggedIn: false,
  accssToken: '',
};

const user = createSlice({
  name: 'userInformation',
  initialState: initState,
  reducers: {
    saveUserInformation: (state: IUser, action: PayloadAction<any>) => {
      console.log({ ...state, userInformation: action.payload });

      return { ...state, userInformation: action.payload };
    },
    loginSuccess: (state: IUser, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    saveAccessToken: (state: IUser, action: PayloadAction<string>) => {
      state.accssToken = action.payload;
    },
  },
});

const { reducer, actions } = user;
export const { saveUserInformation, loginSuccess, saveAccessToken } = actions;
export default reducer;
