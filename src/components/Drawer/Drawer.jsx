import React, { useRef } from 'react';

import AddAssetForm from '../AddAssetForm/AddAssetForm';
import ButtonClose from '../Buttons/ButtonClose';

const Drawer = (props) => {
	const {
		drawerIsOpen,
		setDrawerIsOpen,
		title,
		coin,
		setCoin,
	} = props;
	
	const ref = useRef();

	const handleDrawerClick = (e) => {
		if (e.target === ref.current) setDrawerIsOpen(false);
	};

	const handleButtonClick = () => {
		setDrawerIsOpen(false);
		setCoin(null);
	};

	return (
		<div
			ref={ref}
			onClick={handleDrawerClick}
			className={drawerIsOpen ?
				'drawer drawer--active' :
				'drawer'}
		>

			<div className="drawer-content">
				<h2 className="drawer-title">{title}</h2>

				<ButtonClose handleClick={handleButtonClick} />
				<AddAssetForm
					{...{
						drawerIsOpen,
						setDrawerIsOpen,
						setCoin,
						coin,
					}}
				/>

			</div>
		</div>
	)
};

export default Drawer;