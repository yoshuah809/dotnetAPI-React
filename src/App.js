import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useEffect, useState } from "react";

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
		console.log(selectedEngine);
	};

	const [insertModal, setInsertModal] = useState(false);
	const [editModal, setEditModal] = useState(false);

	const openCloseModalInsert = () => {
		setInsertModal(!insertModal);
	};

	const baseUrl = "https://localhost:44383/api/engine/";

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

	const postData = async () => {
		delete selectedEngine.id;
		selectedEngine.launched = parseInt(selectedEngine.launched);
		await axios
			.post(baseUrl, selectedEngine)
			.then((response) => {
				setData(data.concat(response.data));
				openCloseModalInsert();
			})
			.catch((error) => {
				console.log(error);
			});
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
					className="btn btn-success"
					onClick={() => openCloseModalInsert()}
				>
					Add New Db Engine
				</button>
				<h2>List of Database Engine</h2>
				<table className="table stripped hover responsible table-light">
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
									<button className="btn btn-primary">Edit</button> {"   "}
									<button className="btn btn-danger">Delete</button>
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
						className="btn btn-danger"
						onClick={() => openCloseModalInsert()}
					>
						Cancel
					</button>
				</ModalFooter>
			</Modal>

			<Modal isOpen={insertModal}>
				<ModalHeader>Edit Database Engine </ModalHeader>
				<ModalBody>
					<div className="formgroup">
						<label> ID: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="id"
							readOnly
							onChange={handleChange}
						/>
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
						className="btn btn-danger"
						onClick={() => openCloseModalInsert()}
					>
						Cancel
					</button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default App;
