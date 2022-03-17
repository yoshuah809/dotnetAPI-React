import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";

import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useDispatch } from "react-redux";

const Home = () => {
	const {
		data,
		openCloseInsertModal,
		selectEngine,
		insertModal,
		handleChange,
		putData,
		postData,
		editModal,
		openCloseEditModal,
		selectedEngine,
		openCloseDeleteModal,
		deleteModal,
		deleteEngine,
	} = useContext(DataContext);
	return (
		<div className="App mt-4 py-3">
			<div className="container">
				<br />
				<br />
				<button
					className="btn btn-outline-info"
					onClick={() => openCloseInsertModal()}
				>
					ADD ENGINE
				</button>
				<h2>List of Database ENGINE</h2>
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
										className="btn btn-outline-success"
										onClick={() => selectEngine(engine, "Edit")}
									>
										Update
									</button>{" "}
									{"   "}
									<button
										onClick={() => selectEngine(engine)}
										className="btn btn-outline-danger"
									>
										Delete
									</button>
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
				openCloseEditModal={openCloseEditModal}
				selectedEngine={selectedEngine}
				handleChange={handleChange}
				putData={putData}
				editModal={editModal}
			/>

			<ModalDelete
				openCloseDeleteModal={openCloseDeleteModal}
				deleteModal={deleteModal}
				selectedEngine={selectedEngine}
				deleteEngine={deleteEngine}
			/>
		</div>
	);
};

export default Home;
