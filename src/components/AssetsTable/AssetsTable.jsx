import React from 'react';
import { useCrypto } from '../../context/crypto-context';

import Table from '../Table/Table';

const AssetsTable = () => {
	const { assets } = useCrypto();

	const data = assets.map((asset, index) => ({
		key: index + asset.id,
		name: asset.name,
		price: asset.price,
		amount: asset.amount,
	}));

	const columns = [
		{ label: 'Name', accessor: 'name', sortable: true },
		{ label: 'Price, $', accessor: 'price', sortable: true },
		{ label: 'Amount', accessor: 'amount', sortable: true },
	];

	return (
		<div className='assets-table'>

			<Table
				caption={'Assets'}
				data={data}
				columns={columns}
			/>

		</div>
	)
}

export default AssetsTable;