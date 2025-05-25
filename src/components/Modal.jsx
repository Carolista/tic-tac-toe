import { useContext } from 'react';
import DarkModeContext from '../contexts/DarkModeContext';

const Modal = ({ id, closeModal, align, children }) => {
	const darkMode = useContext(DarkModeContext);

	return (
		<div id={id} className="modal">
			<div
				id="modal-contents"
				className={`${darkMode ? 'light-mode' : 'dark-mode'} align-${align}`}>
				<div className="modal-button" onClick={closeModal}>
					<i className="fa-solid fa-xmark" />
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
