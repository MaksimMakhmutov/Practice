import { Comments, PostContent } from './components';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useMatch, useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks';
import { selectPost } from '../../selectors';
import { PostForm } from './components/post-form/post-form';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';

const PostContainer = (className) => {
	const dispatch = useDispatch();
	const isEditiong = useMatch('/post/:id/edit');
	const isCreating = useMatch('/post');
	const params = useParams();
	const post = useSelector(selectPost);
	const requestServer = useServerRequest();

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			return;
		}
		dispatch(loadPostAsync(requestServer, params.id));
	}, [requestServer, dispatch, isCreating, params.id]);

	return (
		<div className={className}>
			{isCreating || isEditiong ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	padding: 0 80px;
	margin: 40px 0;
`;
