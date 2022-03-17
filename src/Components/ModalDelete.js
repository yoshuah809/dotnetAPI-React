import React from "react";
import { useDispatch } from "react-redux";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

// import { useContext } from "react";
// import { DataContext } from "../Context/DataContext";

const ModalDelete = ({
	selectedEngine,
	deleteModal,
	deleteEngine,
	openCloseDeleteModal,
}) => {
	const handleDelete = () => {
		deleteEngine(selectedEngine);
	};
	return (
		<Modal isOpen={deleteModal}>
			<ModalHeader>Delete Database Engine </ModalHeader>
			<ModalBody>
				Are you sure you want to remove this item?{" "}
				{selectedEngine && selectedEngine.developer}{" "}
			</ModalBody>
			<ModalFooter>
				<button className="btn btn-danger" onClick={handleDelete}>
					Yes
				</button>{" "}
				<button
					className="btn btn-secondary"
					onClick={() => openCloseDeleteModal()}
				>
					NO
				</button>
			</ModalFooter>
		</Modal>
	);
};

export default ModalDelete;
