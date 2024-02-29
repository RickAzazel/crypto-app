import React from 'react';

const TableBody = ({ columns, tableData }) => {
	
	return (
		<tbody>
			{tableData.map((asset) => (
				<tr key={asset.key}>
					{columns.map(({ accessor }) => {
						const tData = asset[accessor] ? asset[accessor] : '--';
						return <td key={accessor}>{tData}</td>
					})}
				</tr>
			))}
		</tbody>
	)
}

export default TableBody;