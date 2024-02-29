import React, { forwardRef } from 'react';
import Select, { components } from 'react-select';
import { useCrypto } from '../../context/crypto-context';

const SelectCoin = forwardRef((props, ref) => {
	const { setCoin, setSelectedOption, onSelect } = props;

	const { crypto } = useCrypto();

	const SingleValue = (props) => (
		<components.SingleValue {...props} className='select__option'>
			<img style={{ width: 20, marginRight: 7 }} src={props.data.icon} alt={props.data.label} />
			{props.data.label}
		</components.SingleValue>
	);

	const Option = (props) => (
		<components.Option {...props} className='select__option'>
			<img style={{ width: 20, marginRight: 7 }} src={props.data.icon} alt={props.data.label} />
			{props.data.label}
		</components.Option>
	);

	const customTheme = (theme) => {
		return {
			...theme,
			colors: {
				...theme.colors,
				primary25: 'orange',
				primary: 'grey',
			}
		};
	}

	const handleSelect = (v) => {
		if (v) {
			setSelectedOption(v);
			setCoin(crypto.find((c) => c.id === v.value));
			if (onSelect) onSelect();
		}
	}

	return (
		<Select
			ref={ref}
			className='select'
			components={{ SingleValue, Option }}
			theme={customTheme}
			onChange={handleSelect}
			options={
				crypto.map((coin) => ({
					label: coin.name,
					value: coin.id,
					icon: coin.icon,
				}))
			}
			placeholder={'Please select your option'}
			noOptionsMessage={() => 'No other options'}
			isSearchable
			autoFocus
			escapeClearsValue
		/>
	)
});

export default SelectCoin;