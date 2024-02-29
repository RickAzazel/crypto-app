import React from 'react';

import Tag from '../Tag/Tag';
import CoinInfo from '../CoinInfo/CoinInfo';
import ButtonClose from '../Buttons/ButtonClose';

const CoinInfoModal = ({ coin, handleButtonClick }) => {
	
	return (
		<div className="modal__content">

			<ButtonClose handleClick={handleButtonClick} />
			<CoinInfo coin={coin} withSymbol />

			<div className="modal__text">
				<div>
					<p>
						1 hour:
						<Tag
							className={coin?.priceChange1h > 0 ?
								'tag--green' :
								'tag--red'}
							text={coin?.priceChange1h + '%'}
						/>
					</p>

					<p>
						1 day:
						<Tag
							className={coin?.priceChange1d > 0 ?
								'tag--green' :
								'tag--red'}
							text={coin?.priceChange1d + '%'}
						/>
					</p>

					<p>
						1 week:
						<Tag
							className={coin?.priceChange1w > 0 ?
								'tag--green' :
								'tag--red'}
							text={coin?.priceChange1w + '%'}
						/>
					</p>
				</div>

				<p>
					Price:
					<span>${coin?.price.toFixed(2)}</span>
				</p>

				<p>
					Price BTC:
					<span>{coin?.priceBtc}</span>
				</p>

				<p>
					Market Cap:
					<span>{coin?.marketCap}</span>
				</p>

				{coin?.contractAddress && (
					<p className='modal__contract-address'>
						Contract Address:
						<span>{coin?.contractAddress}</span>
					</p>
				)}
			</div>
		</div>
	)
}

export default CoinInfoModal;