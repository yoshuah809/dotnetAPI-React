import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useEffect, useState } from "react";

function App() {
	const [data, setData] = useState([]);

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

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="App mt-4 py-3">
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

			<Modal>
				<ModalHeader>Please Add New Database Engine </ModalHeader>
				<ModalBody>
					<div className="formgroup">
						<label> Name: </label>
						<br />
						<input type="text" className="form-control" />
						<br />
						<label> Launched: </label>
						<br />
						<input type="text" className="form-control" />
						<br />
						<label> Developer: </label>
						<br />
						<input type="text" className="form-control" />
						<br />
					</div>
				</ModalBody>
				<ModalFooter>
					<button className="btn btn-primary">Add New ITem</button> {"   "}
					<button className="btn btn-danger">Cancel</button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default App;
