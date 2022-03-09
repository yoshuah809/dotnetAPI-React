import { createContext, useEffect, useState } from "react";
import { getEngines } from "../Services/EngineServices";

export const EngineContext = createContext();

export const EngineProvider = (props) => {
	const [data, setData] = useState([]);

	const handleGetEngines = async () => {
		const { data: engines } = await getEngines();
		setData(engines);
	};

	useEffect(() => {
		handleGetEngines();
	}, []);

	return (
		<EngineContext.Provider value={{ data }}>
			{props.children}
		</EngineContext.Provider>
	);
};
