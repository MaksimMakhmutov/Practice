import styled from 'styled-components';
import { Button } from '../../../../components';

const PaginationContainer = ({ className, page, setPage, totalPages }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</Button>
			<div className="current-page">
				Страница: {page} из {totalPages}
			</div>
			<Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
				Следующая
			</Button>
			<Button disabled={page === totalPages} onClick={() => setPage(totalPages)}>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: center;
	margin: 0 0 20px;
	padding: 0 35px;

	&.button {
		margin: 0 5px;
	}

	& .current-page {
		width: 100%;
		heigth: 32px;
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		border: 1px solid #000;
		line-height: 26px;
	}
`;
