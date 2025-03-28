import { addComment, getPost } from '../api';
import { getComments } from '../api/get-comments';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const addPostComment = async (hash, userId, postId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён, для написания комментария нужно авторизоваться',
			res: null,
		};
	}
	console.log('2', 'userId', 'postId', 'content', userId, postId, content);
	addComment(userId, postId, content);

	const post = await getPost(postId);

	const comments = await getComments(postId);

	return {
		error: null,
		res: {
			...post,
			comments,
		},
	};
};
