import React from "react";
import { useEffect, useState } from "react";
import getData from "../Services/axios";

const Main = () => {
	const [selectedEngine, setSelectedEngine] = useState({
		id: "",
		name: "",
		launched: "",
		developer: "",
	});

	const selectEngine = (engine, operation) => {
		setSelectedEngine(engine);
		operation === "Edit" ? openCloseEditModal() : openCloseDeleteModal();
	};

	const [insertModal, setInsertModal] = useState(false);

	const [deleteModal, setDeleteModal] = useState(false);

	const openCloseInsertModal = () => {
		setInsertModal(!insertModal);
	};

	const openCloseEditModal = () => {
		setEditModal(!editModal);
	};

	const openCloseDeleteModal = () => {
		setDeleteModal(!deleteModal);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="container">
			<br />
			<br />
			<button
				className="btn btn-success"
				onClick={() => openCloseInsertModal()}
			>
				Add Engine
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
								<button
									className="btn btn-primary"
									onClick={() => selectEngine(engine, "Edit")}
								>
									Edit
								</button>{" "}
								{"   "}
								<button
									className="btn btn-danger"
									onClick={() => selectEngine(engine, "Delete")}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Main;
