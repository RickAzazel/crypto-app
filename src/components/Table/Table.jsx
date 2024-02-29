import React from 'react';

import { useSortableTable } from './useSortableTable';

import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({ caption, data, columns }) => {
	const [tableData, handleSorting] = useSortableTable(data);

	return (
		<table className='table'>

			<caption>{caption}</caption>
			<TableHead {...{ columns, handleSorting }} />
			<TableBody {...{ columns, tableData }} />

		</table>
	)
}

export default Table;