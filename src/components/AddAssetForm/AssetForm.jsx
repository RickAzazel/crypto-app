import React from 'react';

import CoinInfo from '../CoinInfo/CoinInfo';
import Button from '../Buttons/Button';

const AssetForm = (props) => {
	const {
		coin,
		handleSubmit,
		onSubmit,
		register,
		errors,
		watchPrice,
		watchAmount
	} = props;

	return (
		<form className="header__form" onSubmit={handleSubmit(onSubmit)}>

			<CoinInfo coin={coin} withSymbol />

			<div className="header__form-items">

				<div className="header__form-item">
					<label className='label-amount' htmlFor="amount">Amount: </label>
					<input
						className={errors.amount ?
							'header__form-input header__form-input--error' :
							'header__form-input'}
						id="amount"
						type='number'
						placeholder="Input coin amount"
						{...register('amount', {
							min: 0,
							required: true,
							valueAsNumber: true,
						})}
						aria-invalid={errors.amount ? true : false}
					/>
					{errors.amount?.type === 'required' && (
						<p className='input-error'>This is required</p>
					)}
					{errors.amount?.type === 'min' && (
						<p className='input-error'>Min num is 0</p>
					)}
				</div>

				<div className="header__form-item">
					<label className='label-price' htmlFor="price">Price: </label>
					<input
						className={errors.price ?
							'header__form-input header__form-input--error' :
							'header__form-input'}
						id="price"
						type='text'
						defaultValue={watchPrice ? watchPrice : ''}
						{...register('price', {
							valueAsNumber: true,
							required: true,
							min: 0,
						})}
						aria-invalid={errors.price ? true : false}
					/>
					{errors.price?.type === 'required' && (
						<p className='input-error'>This is required</p>
					)}
					{errors.price?.type === 'min' && (
						<p className='input-error'>Min num is 0</p>
					)}
				</div>

				<div className="header__form-item">
					<label htmlFor="date">Date & Time: </label>
					<input
						id="date"
						type='date'
						{...register('date', {
							valueAsDate: true,
						})}
					/>
				</div>

				<div className="header__form-item">
					<label className='label-total' htmlFor="total">Total: </label>
					<input
						id="total"
						type='number'
						placeholder={watchAmount && !isNaN(watchPrice) ?
							+(watchAmount * watchPrice).toFixed(2) :
							'Total'}
						{...register('total', {
							disabled: true,
							valueAsNumber: true,
							value: +(watchAmount * watchPrice).toFixed(2),
						})}
					/>
				</div>

				<Button
					className={'header__form-button'}
					type={'submit'}
					text={'Add asset'}
				/>
			</div>
		</form>
	)
}

export default AssetForm;