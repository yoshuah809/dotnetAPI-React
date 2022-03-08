// import React from "react";
// import { useEffect, useState } from "react";
// //import { getData } from "../Services/axios";
// import axios from "axios";

// const Main = () => {
// 	const [selectedEngine, setSelectedEngine] = useState({
// 		id: "",
// 		name: "",
// 		launched: "",
// 		developer: "",
// 	});

// 	const selectEngine = (engine, operation) => {
// 		setSelectedEngine(engine);
// 		operation === "Edit" ? openCloseEditModal() : openCloseDeleteModal();
// 	};

// 	const [insertModal, setInsertModal] = useState(false);
// 	const [editModal, setEditModal] = useState(false);
// 	const [deleteModal, setDeleteModal] = useState(false);
// 	const { data } = getData();

// 	const openCloseInsertModal = () => {
// 		setInsertModal(!insertModal);
// 	};

// 	const openCloseEditModal = () => {
// 		setEditModal(!editModal);
// 	};

// 	const openCloseDeleteModal = () => {
// 		setDeleteModal(!deleteModal);
// 	};

// 	const baseUrl = "https://localhost:44383/api/engine/";

// 	const getData = async () => {
// 		const [data, setData] = useState([]);
// 		await axios
// 			.get(baseUrl)
// 			.then((response) => {
// 				setData(response.data);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	};

// 	const postData = async () => {
// 		delete selectedEngine.id;
// 		selectedEngine.launched = parseInt(selectedEngine.launched);
// 		await axios
// 			.post(baseUrl, selectedEngine)
// 			.then((response) => {
// 				setData(data.concat(response.data));
// 				openCloseInsertModal();
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	};

// 	const putData = async () => {
// 		selectedEngine.launched = parseInt(selectedEngine.launched);
// 		await axios
// 			.put(baseUrl + selectedEngine.id, selectedEngine)
// 			.then((response) => {
// 				var resp = response.data;
// 				var tmpData = data;
// 				tmpData.map((engine) => {
// 					if (engine.id === selectedEngine.id) {
// 						engine.name = resp.name;
// 						engine.launched = resp.launched;
// 						engine.developer = resp.developer;
// 					}
// 				});
// 				openCloseEditModal();
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	};

// 	const deleteData = async () => {
// 		selectedEngine.launched = parseInt(selectedEngine.launched);
// 		await axios
// 			.delete(baseUrl + selectedEngine.id, selectedEngine)
// 			.then((response) => {
// 				setData(data.filter((engine) => engine.id !== response.data));
// 				openCloseDeleteModal();
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	};

// 	useEffect(() => {
// 		getData();
// 	}, []);

// 	return (
// 		<div className="container">
// 			<br />
// 			<br />
// 			<button
// 				className="btn btn-success"
// 				onClick={() => openCloseInsertModal()}
// 			>
// 				Add Engine
// 			</button>
// 			<h2>List of Database Engine</h2>
// 			<table className="table stripped hover responsible table-light">
// 				<thead>
// 					<tr>
// 						<th>ID</th>
// 						<th>Name</th>
// 						<th>First Launched</th>
// 						<th>Developer</th>
// 						<th>Actions</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{data.map((engine) => (
// 						<tr key={engine.id}>
// 							<td>{engine.id}</td>
// 							<td>{engine.name}</td>
// 							<td>{engine.launched}</td>
// 							<td>{engine.developer}</td>
// 							<td>
// 								<button
// 									className="btn btn-primary"
// 									onClick={() => selectEngine(engine, "Edit")}
// 								>
// 									Edit
// 								</button>{" "}
// 								{"   "}
// 								<button
// 									className="btn btn-danger"
// 									onClick={() => selectEngine(engine, "Delete")}
// 								>
// 									Delete
// 								</button>
// 							</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// };

// export default Main;
