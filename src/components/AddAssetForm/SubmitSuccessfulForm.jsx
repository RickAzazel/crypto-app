import React from 'react';
import Button from '../Buttons/Button';

const SubmitSuccessfulForm = (props) => {
	const { onClick, amount, name, price } = props;
	
	return (
		<div className='form-submitted'>
			<span className='form-submitted__icon'>
				<i className="uil uil-check-circle" />
			</span>

			<h2 className='form-submitted__title'>New Asset Added</h2>

			<p className='form-submitted__text'>
				{`Added ${amount} of ${name} by price ${price}`}
			</p>

			<Button
				className={'form-submitted__button'}
				onClick={onClick}
				text={'Close'}
			/>
		</div>
	)
}

export default SubmitSuccessfulForm;