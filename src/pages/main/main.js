import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { Pagination, PostCard } from './components';
import { PAGINNATION_LIMIT } from '../../bff/constants';
import { getTotalPagesCount } from './utils/getLastPagesCount';

const MainContainer = ({ className }) => {
	const requestServer = useServerRequest();

	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0); // Добавляем состояние для общего количества страниц

	useEffect(() => {
		const fetchData = async () => {
			const { res: postsData, totalPosts } = await requestServer(
				'fetchPosts',
				page,
				PAGINNATION_LIMIT,
			);

			setPosts(postsData);
			setTotalPages(getTotalPagesCount(totalPosts, PAGINNATION_LIMIT));
		};

		fetchData();
	}, [requestServer, page]);

	return (
		<div className={className}>
			<div className="post-list">
				{posts.map(({ id, title, imageUrl, publishedAt, commentsCount }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						imageUrl={imageUrl}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
					/>
				))}
			</div>
			{totalPages > 1 && (
				<Pagination page={page} setPage={setPage} totalPages={totalPages} />
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
	}
`;
