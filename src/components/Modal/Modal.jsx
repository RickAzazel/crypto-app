import React, { useRef } from 'react';
import CoinInfoModal from '../Modal/CoinInfoModal';

const Modal = (props) => {
	const { coin, modalIsOpen, setModalIsOpen } = props;
	
	const ref = useRef();

	const handleClick = (e) => {
		if (e.target === ref.current) {
			setModalIsOpen(false);
		};
	};

	return (
		<div
			ref={ref}
			onClick={handleClick}
			className={modalIsOpen ?
				'modal modal--active' :
				'modal'}
		>
			<CoinInfoModal
				coin={coin}
				handleButtonClick={() => setModalIsOpen(false)}
			/>
		</div>
	)
};

export default Modal;