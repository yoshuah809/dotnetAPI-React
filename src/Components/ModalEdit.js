import React from "react";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalEdit = ({
	openCloseEditModal,
	selectedEngine,
	putData,
	handleChange,
	editModal,
}) => {
	return (
		<Modal isOpen={editModal}>
			<ModalHeader className="bg-success">Edit Database Engine </ModalHeader>
			<ModalBody>
				<div className="formgroup">
					<label> ID: </label>
					<br />
					<input
						type="text"
						className="form-control"
						name="id"
						value={selectedEngine && selectedEngine.id}
						readOnly
					/>
					<label> Name: </label>
					<br />
					<input
						type="text"
						className="form-control"
						name="name"
						value={selectedEngine && selectedEngine.name}
						onChange={handleChange}
					/>
					<br />
					<label> Launched: </label>
					<br />
					<input
						type="number"
						className="form-control"
						name="launched"
						onChange={handleChange}
						value={selectedEngine && selectedEngine.launched}
					/>
					<br />
					<label> Developer: </label>
					<br />
					<input
						type="text"
						className="form-control"
						name="developer"
						value={selectedEngine && selectedEngine.developer}
						onChange={handleChange}
					/>
					<br />
				</div>
			</ModalBody>
			<ModalFooter>
				<button className="btn btn-success" onClick={() => putData()}>
					Save
				</button>{" "}
				<button
					className="btn btn-outline-danger"
					onClick={() => openCloseEditModal()}
				>
					Cancel
				</button>
			</ModalFooter>
		</Modal>
	);
};

export default ModalEdit;
