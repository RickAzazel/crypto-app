import React, { useState } from 'react';

import SelectCoinModal from '../SelectCoin/SelectCoinModal';
import Drawer from '../Drawer/Drawer';
import Modal from '../Modal/Modal';
import Button from '../Buttons/Button';


const Header = ({ setAssetsVisible }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);
	const [coin, setCoin] = useState(null);

	const handleButtonClick = () => {
		setCoin(null);
		setDrawerIsOpen(true);
	};

	return (
		<header className='header'>

			<Button
				className={'header__assets-button'}
				onClick={() => setAssetsVisible((prev) => !prev)}
				text={'Assets'}
			/>

			<SelectCoinModal
				{...{
					setCoin,
					modalIsOpen,
					setModalIsOpen,
				}}
			/>

			<Button
				className={'header__add-asset-button'}
				onClick={handleButtonClick}
				text={'Add Asset'}
			/>

			<Drawer
				drawerIsOpen={drawerIsOpen}
				setDrawerIsOpen={setDrawerIsOpen}
				title={'Add asset'}
				setCoin={setCoin}
				coin={coin}
			/>

			<Modal
				{...{
					coin,
					setCoin,
					modalIsOpen,
					setModalIsOpen,
				}}
			/>

		</header>
	)
}

export default Header;