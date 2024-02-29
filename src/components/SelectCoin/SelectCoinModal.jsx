import React, { createRef, useEffect, useState } from 'react';
import SelectCoin from './SelectCoin';

const SelectCoinModal = (props) => {
	const { setCoin, modalIsOpen, setModalIsOpen } = props;

	const ref = createRef();

	const [selectedOption, setSelectedOption] = useState();

	useEffect(() => {
		if (!modalIsOpen) ref.current.clearValue();
	}, [modalIsOpen, ref]);

	return (
		<SelectCoin
			ref={ref}
			onSelect={() => setModalIsOpen(true)}
			setCoin={setCoin}
			setSelectedOption={setSelectedOption}
		/>
	)
}

export default SelectCoinModal;