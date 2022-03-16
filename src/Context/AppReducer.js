import { useReducer } from "react";

export const AppReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ENGINE":
			return {
				...state,
				engines: [action.payload, ...state.engines],
			};
		default:
			return state;
	}
};

export default AppReducer;
