import { configureStore } from "@reduxjs/toolkit";
import engineReducer from "./engineSlice";

const store = configureStore({
	reducer: {
		engines: engineReducer,
	},
});

export default store;
