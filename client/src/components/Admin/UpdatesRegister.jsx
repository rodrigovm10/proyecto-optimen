import NavBar from './NavBar';
import { useTable } from 'react-table';
import useRows from '../Hooks/useRows';
import useColumns from '../Hooks/useColumn';
function UpdatesRegister() {
	const columns = useColumns();
	const data = useRows();
	const table = useTable({ columns, data });
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		table;

	return (
		<>
			<NavBar />
			<div className="ml-[20%] flex items-center justify-center font-monserrat">
				<table {...getTableProps()} className="mt-[10px]">
					<thead>
						{headerGroups.map(headerGroup => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column => (
									<th
										{...column.getHeaderProps()}
										className="border-2 border-azulito px-10"
									>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map(row => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map(cell => {
										return (
											<td
												{...cell.getCellProps()}
												className="border-2 border-azulito px-10 text-center"
											>
												{cell.render('Cell')}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default UpdatesRegister;
