const Modal = ({ id, closeModal, children }) => {
	return (
		<div id={id} className="modal">
			<div id="modal-contents">
				<div className="modal-button" onClick={closeModal}>
					<i className="fa-solid fa-xmark" />
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
