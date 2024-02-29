import React, { useState } from 'react';

import SelectCoin from './SelectCoin';

const SelectCoinDrawer = ({ setCoin }) => {
	const [selectedOption, setSelectedOption] = useState();

	return (
		<SelectCoin
			onSelect={null}
			setCoin={setCoin}
			setSelectedOption={setSelectedOption}
		/>
	)
}

export default SelectCoinDrawer;