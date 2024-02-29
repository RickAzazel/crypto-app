import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useCrypto } from '../../context/crypto-context';

import AssetForm from './AssetForm';
import SelectCoinDrawer from '../SelectCoin/SelectCoinDrawer';
import SubmitSuccessfulForm from './SubmitSuccessfulForm';


const AddAssetForm = (props) => {
	const {
		drawerIsOpen,
		setDrawerIsOpen,
		setCoin, coin
	} = props;

	const { addAsset } = useCrypto();

	const assetRef = useRef();

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm({
		mode: 'onChange',
	});

	const watchAmount = watch('amount');
	const watchPrice = watch('price', +coin?.price.toFixed(2));

	useEffect(() => {
		if (!drawerIsOpen) reset();
	}, [drawerIsOpen, reset])

	const onClose = () => {
		setCoin(null);
		reset();
		setDrawerIsOpen(false);
	}

	const onSubmit = (data) => {
		const newAsset = {
			id: coin.id,
			name: coin.name,
			amount: data.amount,
			price: data.price,
			date: isNaN(Date.parse(data.date)) ? new Date() : data.date,
		}

		assetRef.current = newAsset;
		addAsset(newAsset);
	};

	if (!coin) {
		return (
			<SelectCoinDrawer {...{ setCoin }} />
		)
	}

	if (!isSubmitSuccessful) {
		return (
			<AssetForm {...{
				coin,
				handleSubmit,
				onSubmit,
				register,
				errors,
				watchPrice,
				watchAmount,
			}}
			/>
		)
	}

	if (isSubmitSuccessful) {
		return (
			<SubmitSuccessfulForm
				onClick={onClose}
				amount={assetRef.current.amount}
				name={assetRef.current.name}
				price={assetRef.current.price}
			/>
		)
	}
}

export default AddAssetForm;