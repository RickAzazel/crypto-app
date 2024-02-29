import React from 'react';

import { useCrypto } from './../../context/crypto-context';

import PortfolioChart from './PortfolioChart';
import AssetsTable from '../AssetsTable/AssetsTable';

const Content = () => {
	const { assets, crypto } = useCrypto();

	const cryptoPriceMap = crypto.reduce((acc, c) => {
		acc[c.id] = c.price;

		return acc;
	}, {});

	return (
		<section className='content'>

			<h3 className='content__title'>
				Portfolio: $
				{assets
					.map((asset) => asset.amount * cryptoPriceMap[asset.id])
					.reduce((acc, val) => (acc += val), 0)
					.toFixed(2)}
			</h3>

			<PortfolioChart />
			<AssetsTable />

		</section>
	)
}

export default Content;