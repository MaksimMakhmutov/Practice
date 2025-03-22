import styled from 'styled-components';
import { Icon } from '../../../../../components';

const CommentContainer = ({ id, author, content, publishedAt, className }) => {
	return (
		<div className={className}>
			<div className="comment">
				{' '}
				<div className="information-panel">
					<div className="author">
						<Icon
							iconId="fa-user-circle-o"
							margin="0 10px 0 0"
							size="18px"
							onClick={() => {}}
						/>
						{author}
					</div>
					<div className="published-at">
						<Icon
							iconId="fa-calendar-o"
							margin="0 10px 0 0"
							size="18px"
							onClick={() => {}}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon
				iconId="fa-trash-o"
				margin="0 0 0 10px"
				size="21px"
				onClick={() => {}}
			/>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 10px;

	& .comment {
		padding: 5px 10px;
		width: 550px;
		border: 1px solid #000;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}
	& .autor {
		display: flex;
	}
	& .published-at {
		display: flex;
	}
`;
