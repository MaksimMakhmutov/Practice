import { transformPost } from '../transformers';

export const getPosts = (page, limit) => {
	return fetch(`http://localhost:3005/posts?_page=${page}&_limit=${limit}`).then(
		(loadedPosts) => {
			const totalCount = loadedPosts.headers.get('X-Total-Count'); // Получаем общее количество постов из заголовка

			return loadedPosts.json().then((loadedPosts) => ({
				posts: loadedPosts ? loadedPosts.map(transformPost) : [],
				totalCount: totalCount ? parseInt(totalCount, 10) : 0, // Преобразуем в число
			}));
		},
	);
};
