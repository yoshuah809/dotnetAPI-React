import React from "react";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const Insert = () => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		setSelectedEngine({
			...selectedEngine,
			[name]: value,
		});
	};

	return (
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
					onClick={() => openCloseInsertModal()}
				>
					Cancel
				</button>
			</ModalFooter>
		</Modal>
	);
};

export default Insert;
