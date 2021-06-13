import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
	typePost: 'Tin thường',
	typeTime: 'Đăng theo ngày',
	dateEnd: 5,
};

const date = createSlice({
	name: 'date',
	initialState: initialState,
	reducers: {
		changeTypePost: (state: any, action: PayloadAction<string>) => {
			state.typePost = action.payload;
		},
		changeTypeTime: (state: any, action: PayloadAction<string>) => {
			state.typeTime = action.payload;
		},
		changeDateEnd: (state: any, action: PayloadAction<number>) => {
			state.dateEnd = action.payload;
		},
	},
});

export const { changeTypePost, changeTypeTime, changeDateEnd } = date.actions;

export default date.reducer;
