import styled from 'styled-components';
import { H2, Icon } from '../../../../components';

const PostContantContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className="spacial-panel">
				<div className="published-at">
					{' '}
					<Icon
						iconId="fa-calendar-o"
						margin="0 7px 0 0"
						size="18px"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon
						size="21px"
						iconId="fa-pencil-square-o"
						margin="0 10px 0 0"
						onClick={() => {}}
					/>
					<Icon iconId="fa-trash-o" size="21px" onClick={() => {}} />
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContantContainer)`
	& ing {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .special-panel {
		margin: -20px 0 20px;
		justify-content: space-between;
		display: flex;
	}

	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& i {
		position: relative;
		top: -1px;
	}

	& .buttons {
		display: flex;
	}

	& .post-text {
		font-size: 18px;
	}
`;
