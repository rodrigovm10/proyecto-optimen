import { useMemo } from 'react';

export default function useRows() {
	const rows = useMemo(
		() => [
			{
				tipoMovimiento: 'Update',
				fechaMovimiento: '24/02/2023',
				usuario: 'itzel_fuentes@optimen.com.mx',
			},
			{
				tipoMovimiento: 'Delete',
				fechaMovimiento: '25/02/2023',
				usuario: 'itzel_fuentes@optimen.com.mx',
			},
			{
				tipoMovimiento: 'Delete',
				fechaMovimiento: '25/02/2023',
				usuario: 'itzel_fuentes@optimen.com.mx',
			},
			{
				tipoMovimiento: 'Delete',
				fechaMovimiento: '25/02/2023',
				usuario: 'itzel_fuentes@optimen.com.mx',
			},
			{
				tipoMovimiento: 'Delete',
				fechaMovimiento: '25/02/2023',
				usuario: 'itzel_fuentes@optimen.com.mx',
			},
		],
		[]
	);

	return rows;
}
