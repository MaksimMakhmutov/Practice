import { Comments, PostContent } from './components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { H2 } from '../../components';
import { useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks';
import { loadPostAsync } from '../../actions/load-post-async';
import { selectPost } from '../../selectors';

const PostContainer = (className) => {
	const dispatch = useDispatch();
	const params = useParams();
	const post = useSelector(selectPost);
	const requestServer = useServerRequest();

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [requestServer, dispatch, params.id]);

	return (
		<div className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments} postId={post.id}/>
			<H2></H2>
		</div>
	);
};

export const Post = styled(PostContainer)`
	padding: 40px 80px;
`;
