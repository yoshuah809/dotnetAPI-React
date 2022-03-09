import { createContext, useEffect, useState } from "react";
import { getEngines } from "../Services/EngineServices";

export const EngineContext = createContext();

export const EngineProvider = (props) => {
	const [allEngines, setAllEngines] = useState([]);

	const handleGetEngines = async () => {
		const { data: engines } = await getEngines();
		setAllEngines(engines);
	};

	useEffect(() => {
		handleGetEngines();
	}, []);

	return (
		<EngineContext.Provider value={{ allEngines }}>
			{props.children}
		</EngineContext.Provider>
	);
};
