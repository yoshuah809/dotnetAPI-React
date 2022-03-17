import { createContext, useEffect, useState } from "react";
import { getEngines, updateEngine } from "../Services/EngineServices";
import axios from "axios";
import { useDispatch } from "react-redux";

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [data, setData] = useState([]);
	const [insertModal, setInsertModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);

	//const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setSelectedEngine({
			...selectedEngine,
			[name]: value,
		});
	};

	const openCloseInsertModal = () => {
		setInsertModal(!insertModal);
	};

	// const deleteItem = (id) => {
	// 	dispatch(deleteEngine(id));
	// 	openCloseDeleteModal();
	// };

	const openCloseEditModal = () => {
		setEditModal(!editModal);
	};

	const openCloseDeleteModal = () => {
		setDeleteModal(!deleteModal);
	};

	const baseUrl = "https://localhost:5001/api/engine/";

	const fetchEngineData = () => {
		axios.get(baseUrl).then((response) => {
			try {
				if (response.data) {
					setData(response.data);
				}
			} catch (error) {
				console.log(error.message);
			}
		});
	};

	const putData = async () => {
		selectedEngine.launched = parseInt(selectedEngine.launched);
		await axios
			.put(baseUrl + selectedEngine.id, selectedEngine)
			.then((response) => {
				var resp = response.data;
				var tmpData = data;
				tmpData.map((engine) => {
					if (engine.id === selectedEngine.id) {
						engine.name = resp.name;
						engine.launched = resp.launched;
						engine.developer = resp.developer;
					}
					return engine;
				});
				openCloseEditModal();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const deleteEngine = async (engine) => {
		await axios
			.delete(`${baseUrl}${engine.id}`)
			.then((response) => {
				setData(data.filter((engine) => engine.id !== response.data));
				openCloseDeleteModal();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const postData = async () => {
		delete selectedEngine.id;
		selectedEngine.launched = parseInt(selectedEngine.launched);
		await axios
			.post(baseUrl, selectedEngine)
			.then((response) => {
				setData(data.concat(response.data));
				openCloseInsertModal();
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const selectEngine = (engine, operation) => {
		setSelectedEngine(engine);
		operation === "Edit" ? openCloseEditModal() : openCloseDeleteModal();
	};

	const [selectedEngine, setSelectedEngine] = useState({
		id: "",
		name: "",
		launched: "",
		developer: "",
	});

	useEffect(() => {
		fetchEngineData();
	}, []);

	return (
		<DataContext.Provider
			value={{
				data,
				openCloseInsertModal,
				selectEngine,
				openCloseEditModal,
				selectedEngine,
				insertModal,
				handleChange,
				putData,
				postData,
				editModal,
				deleteEngine,
				deleteModal,
				setDeleteModal,
				openCloseDeleteModal,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
};
