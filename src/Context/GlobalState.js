import { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";
import { getEngines, updateEngine } from "../Services/EngineServices";

const initialState = {
	engines: [],
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//Actions;

	const addEngine = (engine) => {
		dispatch({
			type: "ADD_ENGINE",
			payload: engine,
		});
	};

	return (
		<GlobalContext.Provider value={{ engines: state.engines, addEngine }}>
			{children}
		</GlobalContext.Provider>
	);
};
