import React from 'react';

const CoinInfo = ({ coin, withSymbol }) => {

	return (
		<div className="coin-info">
			<img
				className='coin-info__icon'
				src={coin?.icon}
				alt={coin?.name}
			/>

			<h2 className='coin-info__title'>
				{withSymbol && `(${coin?.symbol})`} {coin?.name}
			</h2>
		</div>
	)
}

export default CoinInfo;