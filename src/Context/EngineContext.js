import { createContext, useEffect, useState } from "react";
import { getEngines, updateEngine } from "../Services/EngineServices";

export const EngineContext = createContext();

export const EngineProvider = (props) => {
	const [data, setData] = useState([]);

	const handleGetEngines = async () => {
		const { data: engines } = await getEngines();
		setData(engines);
	};

	const handleUpdateEngine = async (engine) => {
		//console.log(movie.movieId);
		await updateEngine({
			//Code goes here
		});
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
