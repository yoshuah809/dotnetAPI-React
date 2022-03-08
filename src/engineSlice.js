import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://localhost:5001/api/engine/";

export const enginesFetch = createAsyncThunk(
	"engines/enginesFetch",
	async () => {
		const response = await axios.get(baseUrl);
		return response?.data;
	}
);

export const engineSlice = createSlice({
	name: "engines",
	initialState: {
		engines: [],
		status: null,
		
	},

	reducers: {},
	extraReducers: {
		[enginesFetch.pending]: (state, action) => {
			state.status = "pending";
		},
		[enginesFetch.fulfill]: (state, action) => {
			state.status = "success";
			state.engines = action.payload;
		},
		[enginesFetch.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
	},
});

//export const { addEngine } = engineSlice.actions;
export default engineSlice.reducer;
