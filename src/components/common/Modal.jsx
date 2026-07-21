import { use } from 'react';
import { SettingsContext } from '@context/SettingsContext.jsx';
import './common.css';

const Modal = ({ id, closeModal, align, children }) => {
	const { darkMode } = use(SettingsContext);

	return (
		<div id={id} className='modal' onClick={closeModal}>
			<div
				onClick={e => e.stopPropagation()}
				className={`modal__content ${darkMode ? 'light-mode' : 'dark-mode'} align-${align}`}>
				<div className='modal-button' onClick={closeModal}>
					<i className='fa-solid fa-xmark' />
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
