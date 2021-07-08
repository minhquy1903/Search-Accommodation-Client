import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userSlice from "./redux/userSlice";
import filterSlice from "./redux/filterSlice";
import dateSlice from "./redux/dateSlice";
import postSlice from "./redux/postSlice";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducers = combineReducers({
	date: dateSlice,
	user: userSlice,
	filter: filterSlice,
	post: postSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
	reducer: persistedReducer,
});

export type AppState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;
