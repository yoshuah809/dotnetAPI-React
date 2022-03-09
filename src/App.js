import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useEffect, useState } from "react";
import ModalEdit from "./Components/ModalEdit";

function App() {
	const [data, setData] = useState([]);

	const [selectedEngine, setSelectedEngine] = useState({
		id: "",
		name: "",
		launched: "",
		developer: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setSelectedEngine({
			...selectedEngine,
			[name]: value,
		});
	};

	const [insertModal, setInsertModal] = useState(false);
	const [editModal, setEditModal] = useState(false);

	const openCloseInsertModal = () => {
		setInsertModal(!insertModal);
	};

	const openCloseEditModal = () => {
		setEditModal(!editModal);
	};

	const baseUrl = "https://localhost:5001/api/engine/";

	const getData = async () => {
		await axios
			.get(baseUrl)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
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
		operation === "Edit" && openCloseEditModal();
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="App mt-4 py-3">
			<div className="container">
				<br />
				<br />
				<button
					className="btn btn-outline-primary"
					onClick={() => openCloseInsertModal()}
				>
					Add Engine
				</button>
				<h2>List of Database Engine</h2>
				<table className="table table-default table-striped table-hover responsible ">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>First Launched</th>
							<th>Developer</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{data.map((engine) => (
							<tr key={engine.id}>
								<td>{engine.id}</td>
								<td>{engine.name}</td>
								<td>{engine.launched}</td>
								<td>{engine.developer}</td>
								<td>
									<button
										className="btn btn-primary"
										onClick={() => selectEngine(engine, "Edit")}
									>
										Edit
									</button>{" "}
									{"   "}
									<button className="btn btn-outline-danger">Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<Modal isOpen={insertModal}>
				<ModalHeader>Please Add New Database Engine </ModalHeader>
				<ModalBody>
					<div className="formgroup">
						<label> Name: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="name"
							onChange={handleChange}
						/>
						<br />
						<label> Launched: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="launched"
							onChange={handleChange}
						/>
						<br />
						<label> Developer: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="developer"
							onChange={handleChange}
						/>
						<br />
					</div>
				</ModalBody>
				<ModalFooter>
					<button className="btn btn-primary" onClick={() => postData()}>
						Add New ITem
					</button>{" "}
					{"   "}
					<button
						className="btn btn-outline-primary"
						onClick={() => openCloseInsertModal()}
					>
						Cancel
					</button>
				</ModalFooter>
			</Modal>

			<ModalEdit
				editModal={editModal}
				openCloseEditModal={openCloseEditModal}
				selectedEngine={selectedEngine}
				handleChange={handleChange}
				putData={putData}
			/>
		</div>
	);
}

export default App;

// import { HashRouter as Router, Route } from "react-router-dom";
// function App() {
// 	return (
// 		<Router>
// 			<main className="py-3">
// 				<>
// 					<Route path="/" component={Main} exact />
// 				</>
// 			</main>
// 		</Router>
// 	);
// }

// export default App;
