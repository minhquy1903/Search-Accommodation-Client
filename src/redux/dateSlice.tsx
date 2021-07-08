import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
	typePost: 'Tin thường',
	typeTime: 'Đăng theo ngày',
	dateEnd: 5,
	dateEndAccommodation: '',
	money: 2000,
};

const date = createSlice({
	name: 'date',
	initialState: initialState,
	reducers: {
		changeMoney: (state: any, action: PayloadAction<number>) => {
			state.money = action.payload;
		},
		changeTypePost: (state: any, action: PayloadAction<string>) => {
			state.typePost = action.payload;
		},
		changeTypeTime: (state: any, action: PayloadAction<string>) => {
			state.typeTime = action.payload;
		},
		changeDateEnd: (state: any, action: PayloadAction<number>) => {
			state.dateEnd = action.payload;
		},
		changeDateEndAccommodation: (state: any, action: PayloadAction<string>) => {
			state.dateEndAccommodation = action.payload;
		},
	},
});

export const {
	changeMoney,
	changeTypePost,
	changeTypeTime,
	changeDateEnd,
	changeDateEndAccommodation,
} = date.actions;

export default date.reducer;
